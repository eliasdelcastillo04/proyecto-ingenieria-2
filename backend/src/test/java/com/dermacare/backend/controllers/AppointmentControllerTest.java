package com.dermacare.backend.controllers;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.entities.Profile;
import com.dermacare.backend.entities.UserRole;
import com.dermacare.backend.services.AppointmentService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AppointmentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AppointmentService appointmentService;

    private String validToken;

    @BeforeEach
    void setUp() {
        validToken = io.jsonwebtoken.Jwts.builder()
                .subject("admin@dermacare.com")
                .issuedAt(new java.util.Date(System.currentTimeMillis()))
                .expiration(new java.util.Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(io.jsonwebtoken.security.Keys.hmacShaKeyFor(
                        io.jsonwebtoken.io.Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351")))
                .compact();
    }

    @Test
    void getAllAppointments_Unauthenticated_ReturnsForbiddenOrUnauthorized() throws Exception {
        mockMvc.perform(get("/api/appointments"))
                .andExpect(status().is4xxClientError());

        verifyNoInteractions(appointmentService);
    }

    @Test
    void getAllAppointments_Authenticated_ReturnsAppointmentsList() throws Exception {
        Profile doctor = new Profile();
        doctor.setId(UUID.randomUUID());
        doctor.setFirstName("Ana");
        doctor.setLastName("Silva");
        doctor.setRole(UserRole.MEDICA_PRESTADORA);

        Appointment appointment = new Appointment();
        appointment.setId(1L);
        appointment.setDoctor(doctor);
        appointment.setTimeRange("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]");
        appointment.setStatus(AppointmentStatus.AVAILABLE);

        when(appointmentService.getAllAppointments()).thenReturn(List.of(appointment));

        mockMvc.perform(get("/api/appointments")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].status").value("AVAILABLE"))
                .andExpect(jsonPath("$[0].timeRange").value("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]"));

        verify(appointmentService, times(1)).getAllAppointments();
    }

    @Test
    void getAppointmentById_Found_Returns200() throws Exception {
        Appointment appointment = new Appointment();
        appointment.setId(1L);
        appointment.setStatus(AppointmentStatus.AVAILABLE);

        when(appointmentService.getAppointmentById(1L)).thenReturn(java.util.Optional.of(appointment));

        mockMvc.perform(get("/api/appointments/1")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.status").value("AVAILABLE"));

        verify(appointmentService, times(1)).getAppointmentById(1L);
    }

    @Test
    void getAppointmentById_NotFound_Returns404() throws Exception {
        when(appointmentService.getAppointmentById(99L)).thenReturn(java.util.Optional.empty());

        mockMvc.perform(get("/api/appointments/99")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isNotFound());

        verify(appointmentService, times(1)).getAppointmentById(99L);
    }

    @Test
    void createAppointment_Authenticated_ReturnsCreatedAppointment() throws Exception {
        Appointment appointment = new Appointment();
        appointment.setTimeRange("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]");

        Appointment saved = new Appointment();
        saved.setId(5L);
        saved.setTimeRange("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]");
        saved.setStatus(AppointmentStatus.AVAILABLE);

        when(appointmentService.createAppointment(any(Appointment.class))).thenReturn(saved);

        mockMvc.perform(post("/api/appointments")
                        .header("Authorization", "Bearer " + validToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(appointment)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(5))
                .andExpect(jsonPath("$.status").value("AVAILABLE"));

        verify(appointmentService, times(1)).createAppointment(any(Appointment.class));
    }

    @Test
    void updateStatus_Authenticated_ReturnsUpdatedAppointment() throws Exception {
        Appointment updated = new Appointment();
        updated.setId(1L);
        updated.setStatus(AppointmentStatus.CONFIRMED);

        when(appointmentService.updateStatus(eq(1L), eq(AppointmentStatus.CONFIRMED))).thenReturn(updated);

        mockMvc.perform(patch("/api/appointments/1/status")
                        .param("status", "CONFIRMED")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.status").value("CONFIRMED"));

        verify(appointmentService, times(1)).updateStatus(1L, AppointmentStatus.CONFIRMED);
    }

    @Test
    void updateStatus_IllegalStateException_Returns409Conflict() throws Exception {
        when(appointmentService.updateStatus(eq(1L), eq(AppointmentStatus.CANCELLED)))
                .thenThrow(new IllegalStateException("Cannot change status of a completed appointment"));

        mockMvc.perform(patch("/api/appointments/1/status")
                        .param("status", "CANCELLED")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.status").value(409))
                .andExpect(jsonPath("$.error").value("Conflict"))
                .andExpect(jsonPath("$.message").value("Cannot change status of a completed appointment"));
    }

    @Test
    void cancelAppointment_Authenticated_Returns204NoContent() throws Exception {
        doNothing().when(appointmentService).cancelAppointment(1L);

        mockMvc.perform(post("/api/appointments/1/cancel")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isNoContent());

        verify(appointmentService, times(1)).cancelAppointment(1L);
    }
}
