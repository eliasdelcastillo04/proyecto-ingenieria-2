package com.dermacare.backend.services;

import com.dermacare.backend.dtos.PaymentPreferenceResponse;
import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.entities.Profile;
import com.dermacare.backend.entities.UserRole;
import com.dermacare.backend.repositories.AppointmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AppointmentPaymentTest {

    @Mock
    private AppointmentRepository appointmentRepository;

    @Mock
    private MercadoPagoService mercadoPagoService;

    @InjectMocks
    private AppointmentService appointmentService;

    private Appointment sampleAppointment;

    @BeforeEach
    void setUp() {
        Profile doctor = new Profile();
        doctor.setId(UUID.randomUUID());
        doctor.setFirstName("Dra. Valentina");
        doctor.setLastName("Gomez");
        doctor.setRole(UserRole.MEDICA_PRESTADORA);

        sampleAppointment = new Appointment();
        sampleAppointment.setId(42L);
        sampleAppointment.setDoctor(doctor);
        sampleAppointment.setTimeRange("[2026-09-25 10:00:00+00, 2026-09-25 11:00:00+00]");
        sampleAppointment.setStatus(AppointmentStatus.AVAILABLE);
    }

    @Test
    void createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference() {
        when(appointmentRepository.findById(42L)).thenReturn(Optional.of(sampleAppointment));
        when(mercadoPagoService.createPreference(eq(42L), any(BigDecimal.class), anyString(), any()))
                .thenReturn(new MercadoPagoService.PreferenceResult("PREF-12345", "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=PREF-12345"));
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        PaymentPreferenceResponse response = appointmentService.createPaymentPreference(
                42L,
                new BigDecimal("3000.00"),
                "Seña Consulta Dermatológica",
                "paciente@test.com"
        );

        assertNotNull(response);
        assertEquals(42L, response.getAppointmentId());
        assertEquals("PREF-12345", response.getPreferenceId());
        assertEquals("https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=PREF-12345", response.getPaymentUrl());
        assertEquals(new BigDecimal("3000.00"), response.getDepositAmount());
        assertNotNull(response.getLockedUntil());
        assertTrue(response.getLockedUntil().isAfter(ZonedDateTime.now().plusMinutes(9)));

        assertEquals(AppointmentStatus.PENDING_PAYMENT, sampleAppointment.getStatus());
        assertEquals("PREF-12345", sampleAppointment.getMercadoPagoPreferenceId());
        assertNotNull(sampleAppointment.getLockedUntil());

        verify(appointmentRepository).save(sampleAppointment);
    }

    @Test
    void createPaymentPreference_ThrowsException_WhenAppointmentNotFound() {
        when(appointmentRepository.findById(999L)).thenReturn(Optional.empty());

        assertThrows(IllegalArgumentException.class, () ->
                appointmentService.createPaymentPreference(999L, new BigDecimal("3000.00"), "Seña", null)
        );
    }

    @Test
    void createPaymentPreference_ThrowsException_WhenAmountIsZeroOrNegative() {
        assertThrows(IllegalArgumentException.class, () ->
                appointmentService.createPaymentPreference(42L, BigDecimal.ZERO, "Seña", null)
        );
        assertThrows(IllegalArgumentException.class, () ->
                appointmentService.createPaymentPreference(42L, new BigDecimal("-500.00"), "Seña", null)
        );
    }

    @Test
    void createPaymentPreference_ThrowsException_WhenAppointmentAlreadyConfirmed() {
        sampleAppointment.setStatus(AppointmentStatus.CONFIRMED);
        when(appointmentRepository.findById(42L)).thenReturn(Optional.of(sampleAppointment));

        assertThrows(IllegalStateException.class, () ->
                appointmentService.createPaymentPreference(42L, new BigDecimal("3000.00"), "Seña", null)
        );
    }
}
