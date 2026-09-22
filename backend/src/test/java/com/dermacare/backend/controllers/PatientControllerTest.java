package com.dermacare.backend.controllers;

import com.dermacare.backend.entities.Patient;
import com.dermacare.backend.security.JwtService;
import com.dermacare.backend.services.PatientService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class PatientControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private PatientService patientService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

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
    void getAllPatients_Unauthenticated_ReturnsForbiddenOrUnauthorized() throws Exception {
        mockMvc.perform(get("/api/patients"))
                .andExpect(status().is4xxClientError());

        verifyNoInteractions(patientService);
    }

    @Test
    void getAllPatients_Authenticated_ReturnsListOfPatients() throws Exception {
        Patient p1 = new Patient();
        p1.setId(1L);
        p1.setFirstName("Juan");
        p1.setLastName("Perez");
        p1.setDni("11111111");
        p1.setAge(30);

        Patient p2 = new Patient();
        p2.setId(2L);
        p2.setFirstName("Maria");
        p2.setLastName("Gomez");
        p2.setDni("22222222");
        p2.setAge(25);

        when(patientService.getAllPatients()).thenReturn(List.of(p1, p2));

        mockMvc.perform(get("/api/patients")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].firstName").value("Juan"))
                .andExpect(jsonPath("$[1].firstName").value("Maria"));

        verify(patientService, times(1)).getAllPatients();
    }

    @Test
    void createPatient_Unauthenticated_ReturnsForbiddenOrUnauthorized() throws Exception {
        Patient p = new Patient();
        p.setFirstName("Carlos");
        p.setLastName("Lopez");
        p.setDni("33333333");

        mockMvc.perform(post("/api/patients")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(p)))
                .andExpect(status().is4xxClientError());

        verifyNoInteractions(patientService);
    }

    @Test
    void createPatient_Authenticated_SavesAndReturnsCreatedPatient() throws Exception {
        Patient p = new Patient();
        p.setFirstName("Carlos");
        p.setLastName("Lopez");
        p.setDni("33333333");
        p.setAge(40);
        p.setContactPhone("123456789");
        p.setContactEmail("carlos@dermacare.com");

        Patient saved = new Patient();
        saved.setId(10L);
        saved.setFirstName("Carlos");
        saved.setLastName("Lopez");
        saved.setDni("33333333");
        saved.setAge(40);
        saved.setContactPhone("123456789");
        saved.setContactEmail("carlos@dermacare.com");

        when(patientService.createPatient(any(Patient.class))).thenReturn(saved);

        mockMvc.perform(post("/api/patients")
                        .header("Authorization", "Bearer " + validToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(p)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.firstName").value("Carlos"))
                .andExpect(jsonPath("$.lastName").value("Lopez"))
                .andExpect(jsonPath("$.dni").value("33333333"));

        verify(patientService, times(1)).createPatient(any(Patient.class));
    }

    @Test
    void getPatientById_Authenticated_Found_Returns200() throws Exception {
        Patient p = new Patient();
        p.setId(1L);
        p.setFirstName("Juan");
        p.setLastName("Perez");

        when(patientService.getPatientById(1L)).thenReturn(java.util.Optional.of(p));

        mockMvc.perform(get("/api/patients/1")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.firstName").value("Juan"));

        verify(patientService, times(1)).getPatientById(1L);
    }

    @Test
    void getPatientById_Authenticated_NotFound_Returns404() throws Exception {
        when(patientService.getPatientById(99L)).thenReturn(java.util.Optional.empty());

        mockMvc.perform(get("/api/patients/99")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isNotFound());

        verify(patientService, times(1)).getPatientById(99L);
    }

    @Test
    void updatePatient_Authenticated_Returns200() throws Exception {
        Patient updated = new Patient();
        updated.setId(1L);
        updated.setFirstName("Juan Modificado");

        when(patientService.updatePatient(eq(1L), any(Patient.class))).thenReturn(updated);

        mockMvc.perform(put("/api/patients/1")
                        .header("Authorization", "Bearer " + validToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updated)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.firstName").value("Juan Modificado"));

        verify(patientService, times(1)).updatePatient(eq(1L), any(Patient.class));
    }

    @Test
    void deletePatient_Authenticated_Returns204() throws Exception {
        doNothing().when(patientService).deletePatient(1L);

        mockMvc.perform(delete("/api/patients/1")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isNoContent());

        verify(patientService, times(1)).deletePatient(1L);
    }

    @Test
    void createPatient_InvalidData_Returns400BadRequest() throws Exception {
        Patient p = new Patient();
        when(patientService.createPatient(any(Patient.class)))
                .thenThrow(new IllegalArgumentException("Patient DNI is required"));

        mockMvc.perform(post("/api/patients")
                        .header("Authorization", "Bearer " + validToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(p)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.status").value(400))
                .andExpect(jsonPath("$.error").value("Bad Request"))
                .andExpect(jsonPath("$.message").value("Patient DNI is required"));
    }
}
