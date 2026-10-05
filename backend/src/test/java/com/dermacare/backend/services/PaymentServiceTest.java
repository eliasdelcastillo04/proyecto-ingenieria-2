package com.dermacare.backend.services;

import com.dermacare.backend.entities.*;
import com.dermacare.backend.repositories.AppointmentRepository;
import com.dermacare.backend.repositories.PaymentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PaymentServiceTest {

    @Mock
    private PaymentRepository paymentRepository;

    @Mock
    private AppointmentRepository appointmentRepository;

    @InjectMocks
    private PaymentService paymentService;

    private Appointment sampleAppointment;

    @BeforeEach
    void setUp() {
        sampleAppointment = new Appointment();
        sampleAppointment.setId(100L);
        sampleAppointment.setStatus(AppointmentStatus.PENDING_PAYMENT);
    }

    @Test
    void registerCashPayment_Success() {
        when(appointmentRepository.findById(100L)).thenReturn(Optional.of(sampleAppointment));
        when(paymentRepository.save(any(Payment.class))).thenAnswer(inv -> {
            Payment p = inv.getArgument(0);
            p.setId(1L);
            return p;
        });

        Payment payment = paymentService.registerCashPayment(100L, new BigDecimal("3500.00"), "Seña en Efectivo", "SECRETARIA_LUCIA");

        assertNotNull(payment);
        assertEquals(new BigDecimal("3500.00"), payment.getAmount());
        assertEquals(PaymentMethod.CASH, payment.getPaymentMethod());
        assertEquals(PaymentStatus.APPROVED, payment.getStatus());
        assertEquals(AppointmentStatus.CONFIRMED, sampleAppointment.getStatus());
        verify(appointmentRepository, times(1)).save(sampleAppointment);
        verify(paymentRepository, times(1)).save(any(Payment.class));
    }

    @Test
    void registerCashPayment_InvalidAmount_ThrowsException() {
        assertThrows(IllegalArgumentException.class, () ->
                paymentService.registerCashPayment(100L, BigDecimal.ZERO, "Concepto", "USER"));
        assertThrows(IllegalArgumentException.class, () ->
                paymentService.registerCashPayment(100L, new BigDecimal("-100"), "Concepto", "USER"));
    }

    @Test
    void registerCashPayment_CancelledAppointment_ThrowsIllegalStateException() {
        sampleAppointment.setStatus(AppointmentStatus.CANCELLED);
        when(appointmentRepository.findById(100L)).thenReturn(Optional.of(sampleAppointment));

        assertThrows(IllegalStateException.class, () ->
                paymentService.registerCashPayment(100L, new BigDecimal("1000.00"), "Concepto", "USER"));
    }

    @Test
    void processMercadoPagoWebhook_ApprovesPendingAppointment() {
        when(appointmentRepository.findAll()).thenReturn(List.of(sampleAppointment));
        when(paymentRepository.save(any(Payment.class))).thenAnswer(inv -> inv.getArgument(0));

        Map<String, Object> payload = Map.of("data", Map.of("id", "MP-PAY-999"));
        boolean handled = paymentService.processMercadoPagoWebhook(payload, "payment", "MP-PAY-999");

        assertTrue(handled);
        assertEquals(AppointmentStatus.CONFIRMED, sampleAppointment.getStatus());
        assertEquals("MP-PAY-999", sampleAppointment.getMercadoPagoPaymentId());
        verify(paymentRepository, times(1)).save(any(Payment.class));
    }

    @Test
    void getCollectionsSummary_ReturnsAccurateMetrics() {
        when(paymentRepository.calculateTotalApprovedAmount()).thenReturn(new BigDecimal("150000.00"));
        when(paymentRepository.calculateTodayApprovedAmount(any())).thenReturn(new BigDecimal("25000.00"));

        Payment cashPayment = new Payment(sampleAppointment, new BigDecimal("10000.00"), PaymentMethod.CASH, PaymentStatus.APPROVED, "Seña", "REC-1", "SEC");
        Payment mpPayment = new Payment(sampleAppointment, new BigDecimal("15000.00"), PaymentMethod.MERCADO_PAGO, PaymentStatus.APPROVED, "Seña", "REC-2", "MP");
        when(paymentRepository.findByStatus(PaymentStatus.APPROVED)).thenReturn(List.of(cashPayment, mpPayment));

        sampleAppointment.setStatus(AppointmentStatus.CONFIRMED);
        when(appointmentRepository.findAll()).thenReturn(List.of(sampleAppointment));

        Map<String, Object> summary = paymentService.getCollectionsSummary();

        assertNotNull(summary);
        assertEquals(new BigDecimal("150000.00"), summary.get("totalRevenue"));
        assertEquals(new BigDecimal("25000.00"), summary.get("todayRevenue"));
        assertEquals(new BigDecimal("10000.00"), summary.get("cashRevenue"));
        assertEquals(new BigDecimal("15000.00"), summary.get("mercadoPagoRevenue"));
        assertEquals(1L, summary.get("confirmedAppointmentsCount"));
    }
}
