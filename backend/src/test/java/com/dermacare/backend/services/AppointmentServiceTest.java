package com.dermacare.backend.services;

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

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AppointmentServiceTest {

    @Mock
    private AppointmentRepository appointmentRepository;

    @InjectMocks
    private AppointmentService appointmentService;

    private Profile doctor;
    private Appointment sampleAppointment;

    @BeforeEach
    void setUp() {
        doctor = new Profile();
        doctor.setId(UUID.randomUUID());
        doctor.setFirstName("Dra. Elena");
        doctor.setLastName("Rostova");
        doctor.setRole(UserRole.MEDICA_PRESTADORA);

        sampleAppointment = new Appointment();
        sampleAppointment.setId(10L);
        sampleAppointment.setDoctor(doctor);
        sampleAppointment.setTimeRange("[2026-09-25 09:00:00+00, 2026-09-25 10:00:00+00]");
        sampleAppointment.setStatus(AppointmentStatus.AVAILABLE);
    }

    @Test
    void getAllAppointments_ReturnsAppointmentsList() {
        Appointment a2 = new Appointment();
        a2.setId(20L);
        a2.setDoctor(doctor);
        a2.setTimeRange("[2026-09-25 10:00:00+00, 2026-09-25 11:00:00+00]");
        a2.setStatus(AppointmentStatus.CONFIRMED);

        when(appointmentRepository.findAll()).thenReturn(List.of(sampleAppointment, a2));

        List<Appointment> result = appointmentService.getAllAppointments();

        assertNotNull(result);
        assertEquals(2, result.size());
        assertEquals(AppointmentStatus.AVAILABLE, result.get(0).getStatus());
        assertEquals(AppointmentStatus.CONFIRMED, result.get(1).getStatus());
        verify(appointmentRepository, times(1)).findAll();
    }

    @Test
    void getAllAppointments_WhenEmpty_ReturnsEmptyList() {
        when(appointmentRepository.findAll()).thenReturn(Collections.emptyList());

        List<Appointment> result = appointmentService.getAllAppointments();

        assertNotNull(result);
        assertTrue(result.isEmpty());
        verify(appointmentRepository, times(1)).findAll();
    }

    @Test
    void getAppointmentById_WhenExists_ReturnsOptionalWithAppointment() {
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));

        Optional<Appointment> result = appointmentService.getAppointmentById(10L);

        assertTrue(result.isPresent());
        assertEquals(10L, result.get().getId());
        assertEquals(AppointmentStatus.AVAILABLE, result.get().getStatus());
        verify(appointmentRepository, times(1)).findById(10L);
    }

    @Test
    void getAppointmentById_WhenNotFound_ReturnsEmptyOptional() {
        when(appointmentRepository.findById(999L)).thenReturn(Optional.empty());

        Optional<Appointment> result = appointmentService.getAppointmentById(999L);

        assertFalse(result.isPresent());
        verify(appointmentRepository, times(1)).findById(999L);
    }

    @Test
    void getAppointmentById_NullId_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.getAppointmentById(null));
        assertEquals("Appointment ID cannot be null", ex.getMessage());
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void createAppointment_Success_ReturnsSavedAppointment() {
        when(appointmentRepository.save(any(Appointment.class))).thenReturn(sampleAppointment);

        Appointment created = appointmentService.createAppointment(sampleAppointment);

        assertNotNull(created);
        assertEquals(10L, created.getId());
        assertEquals(AppointmentStatus.AVAILABLE, created.getStatus());
        verify(appointmentRepository, times(1)).save(sampleAppointment);
    }

    @Test
    void createAppointment_NullStatus_SetsAvailableDefaultAndSaves() {
        sampleAppointment.setStatus(null);
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Appointment created = appointmentService.createAppointment(sampleAppointment);

        assertNotNull(created);
        assertEquals(AppointmentStatus.AVAILABLE, created.getStatus());
        verify(appointmentRepository, times(1)).save(sampleAppointment);
    }

    @Test
    void createAppointment_NullAppointment_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.createAppointment(null));
        assertEquals("Appointment cannot be null", ex.getMessage());
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void createAppointment_NullDoctor_ThrowsIllegalArgumentException() {
        sampleAppointment.setDoctor(null);
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.createAppointment(sampleAppointment));
        assertEquals("Doctor profile is required for appointment", ex.getMessage());
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void createAppointment_NullOrBlankTimeRange_ThrowsIllegalArgumentException() {
        sampleAppointment.setTimeRange(null);
        IllegalArgumentException ex1 = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.createAppointment(sampleAppointment));
        assertEquals("Time range is required for appointment", ex1.getMessage());

        sampleAppointment.setTimeRange("   ");
        IllegalArgumentException ex2 = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.createAppointment(sampleAppointment));
        assertEquals("Time range is required for appointment", ex2.getMessage());

        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void updateStatus_Success_UpdatesAndSaves() {
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Appointment updated = appointmentService.updateStatus(10L, AppointmentStatus.CONFIRMED);

        assertNotNull(updated);
        assertEquals(AppointmentStatus.CONFIRMED, updated.getStatus());
        verify(appointmentRepository, times(1)).findById(10L);
        verify(appointmentRepository, times(1)).save(sampleAppointment);
    }

    @Test
    void updateStatus_NullId_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.updateStatus(null, AppointmentStatus.CANCELLED));
        assertEquals("Appointment ID cannot be null", ex.getMessage());
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void updateStatus_NullStatus_ThrowsIllegalArgumentException() {
        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.updateStatus(10L, null));
        assertEquals("New status cannot be null", ex.getMessage());
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void updateStatus_NotFound_ThrowsIllegalArgumentException() {
        when(appointmentRepository.findById(500L)).thenReturn(Optional.empty());

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.updateStatus(500L, AppointmentStatus.CONFIRMED));
        assertEquals("Appointment not found with id: 500", ex.getMessage());
        verify(appointmentRepository, times(1)).findById(500L);
        verify(appointmentRepository, never()).save(any());
    }

    @Test
    void cancelAppointment_Success_SetsCancelled() {
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        appointmentService.cancelAppointment(10L);

        assertEquals(AppointmentStatus.CANCELLED, sampleAppointment.getStatus());
        verify(appointmentRepository, times(1)).findById(10L);
        verify(appointmentRepository, times(1)).save(sampleAppointment);
    }

    @Test
    void createAppointment_InvalidTimeRangeFormat_ThrowsIllegalArgumentException() {
        sampleAppointment.setTimeRange("invalid-format-without-commas");

        IllegalArgumentException ex = assertThrows(IllegalArgumentException.class,
                () -> appointmentService.createAppointment(sampleAppointment));

        assertTrue(ex.getMessage().contains("Invalid time range format for appointment"));
        verifyNoInteractions(appointmentRepository);
    }

    @Test
    void createAppointment_ValidParenthesisTimeRange_Success() {
        sampleAppointment.setTimeRange("[2026-09-25 09:00:00+00, 2026-09-25 10:00:00+00)");
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Appointment created = appointmentService.createAppointment(sampleAppointment);

        assertNotNull(created);
        assertEquals("[2026-09-25 09:00:00+00, 2026-09-25 10:00:00+00)", created.getTimeRange());
    }

    @Test
    void updateStatus_CompletedAppointment_ThrowsIllegalStateException() {
        sampleAppointment.setStatus(AppointmentStatus.COMPLETED);
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));

        IllegalStateException ex = assertThrows(IllegalStateException.class,
                () -> appointmentService.updateStatus(10L, AppointmentStatus.CANCELLED));

        assertEquals("Cannot change status of a completed appointment", ex.getMessage());
        verify(appointmentRepository, never()).save(any());
    }

    @Test
    void updateStatus_CancelledAppointmentToActive_ThrowsIllegalStateException() {
        sampleAppointment.setStatus(AppointmentStatus.CANCELLED);
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));

        IllegalStateException ex = assertThrows(IllegalStateException.class,
                () -> appointmentService.updateStatus(10L, AppointmentStatus.CONFIRMED));

        assertEquals("Cannot change status of a cancelled appointment", ex.getMessage());
        verify(appointmentRepository, never()).save(any());
    }

    @Test
    void updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess() {
        sampleAppointment.setStatus(AppointmentStatus.CANCELLED);
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));
        when(appointmentRepository.save(any(Appointment.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Appointment result = appointmentService.updateStatus(10L, AppointmentStatus.CANCELLED);

        assertEquals(AppointmentStatus.CANCELLED, result.getStatus());
        verify(appointmentRepository, times(1)).save(sampleAppointment);
    }

    @Test
    void cancelAppointment_CompletedAppointment_ThrowsIllegalStateException() {
        sampleAppointment.setStatus(AppointmentStatus.COMPLETED);
        when(appointmentRepository.findById(10L)).thenReturn(Optional.of(sampleAppointment));

        IllegalStateException ex = assertThrows(IllegalStateException.class,
                () -> appointmentService.cancelAppointment(10L));

        assertEquals("Cannot change status of a completed appointment", ex.getMessage());
        verify(appointmentRepository, never()).save(any());
    }
}
