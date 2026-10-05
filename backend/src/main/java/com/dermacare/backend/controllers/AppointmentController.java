package com.dermacare.backend.controllers;

import com.dermacare.backend.dtos.CreatePaymentPreferenceRequest;
import com.dermacare.backend.dtos.PaymentPreferenceResponse;
import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.services.AppointmentService;
import com.dermacare.backend.entities.AppointmentStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

import com.dermacare.backend.entities.Payment;
import com.dermacare.backend.services.PaymentService;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;
    private final PaymentService paymentService;

    public AppointmentController(AppointmentService appointmentService, PaymentService paymentService) {
        this.appointmentService = appointmentService;
        this.paymentService = paymentService;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        return appointmentService.getAppointmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Appointment> updateStatus(@PathVariable Long id, @RequestParam AppointmentStatus status) {
        return ResponseEntity.ok(appointmentService.updateStatus(id, status));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<Void> cancelAppointment(@PathVariable Long id) {
        appointmentService.cancelAppointment(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/payment-preference")
    public ResponseEntity<PaymentPreferenceResponse> createPaymentPreference(
            @PathVariable Long id,
            @RequestBody(required = false) CreatePaymentPreferenceRequest request) {
        BigDecimal deposit = (request != null && request.getDepositAmount() != null)
                ? request.getDepositAmount()
                : new BigDecimal("3000.00");
        String title = request != null ? request.getTitle() : "Seña Turno DermaCare #" + id;
        String payerEmail = request != null ? request.getPayerEmail() : null;

        PaymentPreferenceResponse response = appointmentService.createPaymentPreference(id, deposit, title, payerEmail);
        return ResponseEntity.ok(response);
    }

    public static class CashPaymentRequest {
        private BigDecimal amount;
        private String concept;
        private String recordedBy;

        public BigDecimal getAmount() { return amount; }
        public void setAmount(BigDecimal amount) { this.amount = amount; }
        public String getConcept() { return concept; }
        public void setConcept(String concept) { this.concept = concept; }
        public String getRecordedBy() { return recordedBy; }
        public void setRecordedBy(String recordedBy) { this.recordedBy = recordedBy; }
    }

    @PostMapping("/{id}/payments/cash")
    public ResponseEntity<Payment> registerCashPayment(
            @PathVariable Long id,
            @RequestBody(required = false) CashPaymentRequest request) {
        BigDecimal amount = (request != null && request.getAmount() != null)
                ? request.getAmount()
                : new BigDecimal("3000.00");
        String concept = (request != null && request.getConcept() != null)
                ? request.getConcept()
                : "Pago Seña en Efectivo";
        String recordedBy = (request != null && request.getRecordedBy() != null)
                ? request.getRecordedBy()
                : "SECRETARIA";

        Payment payment = paymentService.registerCashPayment(id, amount, concept, recordedBy);
        return ResponseEntity.ok(payment);
    }
}
