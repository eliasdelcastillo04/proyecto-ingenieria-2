package com.dermacare.backend.controllers;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.entities.Profile;
import com.dermacare.backend.entities.UserRole;
import com.dermacare.backend.repositories.AppointmentRepository;
import jakarta.persistence.EntityManager;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
class AppointmentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private EntityManager entityManager;

    private String validToken;

    @BeforeEach
    void setUp() {
        appointmentRepository.deleteAll();
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
    }

    @Test
    void getAllAppointments_Authenticated_ReturnsAppointmentsList() throws Exception {
        Profile doctor = new Profile();
        doctor.setId(UUID.randomUUID());
        doctor.setFirstName("Ana");
        doctor.setLastName("Silva");
        doctor.setRole(UserRole.MEDICA_PRESTADORA);
        entityManager.persist(doctor);

        Appointment appointment = new Appointment();
        appointment.setDoctor(doctor);
        appointment.setTimeRange("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]");
        appointment.setStatus(AppointmentStatus.AVAILABLE);
        appointmentRepository.save(appointment);

        mockMvc.perform(get("/api/appointments")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].status").value("AVAILABLE"))
                .andExpect(jsonPath("$[0].timeRange").value("[2026-08-10 10:00:00+00, 2026-08-10 11:00:00+00]"));
    }
}
