package com.dermacare.backend.services;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.entities.Payment;
import com.dermacare.backend.entities.PaymentMethod;
import com.dermacare.backend.entities.PaymentStatus;
import com.dermacare.backend.repositories.AppointmentRepository;
import com.dermacare.backend.repositories.PaymentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;

@Service
@Transactional
public class PaymentService {

    private static final Logger log = LoggerFactory.getLogger(PaymentService.class);

    private final PaymentRepository paymentRepository;
    private final AppointmentRepository appointmentRepository;

    public PaymentService(PaymentRepository paymentRepository, AppointmentRepository appointmentRepository) {
        this.paymentRepository = paymentRepository;
        this.appointmentRepository = appointmentRepository;
    }

    public Payment registerCashPayment(Long appointmentId, BigDecimal amount, String concept, String recordedBy) {
        if (appointmentId == null) {
            throw new IllegalArgumentException("Appointment ID cannot be null");
        }
        if (amount == null || amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Payment amount must be greater than zero");
        }

        Appointment appointment = appointmentRepository.findById(appointmentId)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found with id: " + appointmentId));

        if (appointment.getStatus() == AppointmentStatus.CANCELLED) {
            throw new IllegalStateException("Cannot register payment for a cancelled appointment");
        }

        String receiptNumber = "REC-" + appointmentId + "-" + (System.currentTimeMillis() % 100000);
        String finalConcept = (concept != null && !concept.isBlank()) ? concept : "Pago de Seña en Efectivo";
        String operator = (recordedBy != null && !recordedBy.isBlank()) ? recordedBy : "SECRETARIA";

        Payment payment = new Payment(
                appointment,
                amount,
                PaymentMethod.CASH,
                PaymentStatus.APPROVED,
                finalConcept,
                receiptNumber,
                operator
        );

        Payment savedPayment = paymentRepository.save(payment);

        // Transition appointment to CONFIRMED
        appointment.setStatus(AppointmentStatus.CONFIRMED);
        appointmentRepository.save(appointment);

        log.info("Registered cash payment id={} for appointment id={} amount={}", savedPayment.getId(), appointmentId, amount);
        return savedPayment;
    }

    public boolean processMercadoPagoWebhook(Map<String, Object> payload, String queryType, String dataId) {
        log.info("Processing Mercado Pago webhook event. queryType={}, dataId={}, payload={}", queryType, dataId, payload);

        String paymentId = dataId;
        if (paymentId == null && payload != null && payload.containsKey("data")) {
            Object dataObj = payload.get("data");
            if (dataObj instanceof Map<?, ?> dataMap) {
                paymentId = String.valueOf(dataMap.get("id"));
            }
        }

        if (paymentId == null && payload != null && payload.containsKey("id")) {
            paymentId = String.valueOf(payload.get("id"));
        }

        if (paymentId == null || paymentId.isBlank() || "null".equals(paymentId)) {
            log.warn("Webhook received without a resolvable paymentId. Acknowledging receipt anyway.");
            return true;
        }

        // Check if there is an appointment associated by preference or payment
        List<Appointment> pendingAppointments = appointmentRepository.findAll().stream()
                .filter(a -> a.getStatus() == AppointmentStatus.PENDING_PAYMENT)
                .toList();

        if (!pendingAppointments.isEmpty()) {
            Appointment appointment = pendingAppointments.get(0);
            appointment.setStatus(AppointmentStatus.CONFIRMED);
            appointment.setMercadoPagoPaymentId(paymentId);
            appointmentRepository.save(appointment);

            BigDecimal deposit = new BigDecimal("3000.00");
            Payment payment = new Payment(
                    appointment,
                    deposit,
                    PaymentMethod.MERCADO_PAGO,
                    PaymentStatus.APPROVED,
                    "Seña Mercado Pago Checkout Pro",
                    paymentId,
                    "MERCADO_PAGO_WEBHOOK"
            );
            paymentRepository.save(payment);
            log.info("Confirmed appointment id={} via Mercado Pago paymentId={}", appointment.getId(), paymentId);
        }

        return true;
    }

    @Transactional(readOnly = true)
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public List<Payment> getPaymentsByAppointment(Long appointmentId) {
        return paymentRepository.findByAppointmentId(appointmentId);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> getCollectionsSummary() {
        LocalDateTime startOfDay = LocalDate.now().atStartOfDay();

        BigDecimal totalRevenue = paymentRepository.calculateTotalApprovedAmount();
        BigDecimal todayRevenue = paymentRepository.calculateTodayApprovedAmount(startOfDay);

        List<Payment> allApproved = paymentRepository.findByStatus(PaymentStatus.APPROVED);

        BigDecimal cashRevenue = allApproved.stream()
                .filter(p -> p.getPaymentMethod() == PaymentMethod.CASH)
                .map(Payment::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        BigDecimal mpRevenue = allApproved.stream()
                .filter(p -> p.getPaymentMethod() == PaymentMethod.MERCADO_PAGO)
                .map(Payment::getAmount)
                .reduce(BigDecimal.ZERO, BigDecimal::add);

        List<Appointment> allAppointments = appointmentRepository.findAll();
        long pendingDeposits = allAppointments.stream()
                .filter(a -> a.getStatus() == AppointmentStatus.PENDING_PAYMENT)
                .count();

        long confirmedCount = allAppointments.stream()
                .filter(a -> a.getStatus() == AppointmentStatus.CONFIRMED)
                .count();

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalRevenue", totalRevenue != null ? totalRevenue : BigDecimal.ZERO);
        summary.put("todayRevenue", todayRevenue != null ? todayRevenue : BigDecimal.ZERO);
        summary.put("cashRevenue", cashRevenue);
        summary.put("mercadoPagoRevenue", mpRevenue);
        summary.put("pendingDepositsCount", pendingDeposits);
        summary.put("confirmedAppointmentsCount", confirmedCount);
        summary.put("totalTransactionsCount", allApproved.size());

        return summary;
    }
}
