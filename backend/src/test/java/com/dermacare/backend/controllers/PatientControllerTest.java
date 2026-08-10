package com.dermacare.backend.controllers;

import com.dermacare.backend.entities.Patient;
import com.dermacare.backend.repositories.PatientRepository;
import com.dermacare.backend.security.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class PatientControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

    private String validToken;

    @BeforeEach
    void setUp() {
        patientRepository.deleteAll();
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
    }

    @Test
    void getAllPatients_Authenticated_ReturnsListOfPatients() throws Exception {
        Patient p1 = new Patient();
        p1.setFirstName("Juan");
        p1.setLastName("Perez");
        p1.setDni("11111111");
        p1.setAge(30);
        patientRepository.save(p1);

        Patient p2 = new Patient();
        p2.setFirstName("Maria");
        p2.setLastName("Gomez");
        p2.setDni("22222222");
        p2.setAge(25);
        patientRepository.save(p2);

        mockMvc.perform(get("/api/patients")
                        .header("Authorization", "Bearer " + validToken))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].firstName").value("Juan"))
                .andExpect(jsonPath("$[1].firstName").value("Maria"));
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

        mockMvc.perform(post("/api/patients")
                        .header("Authorization", "Bearer " + validToken)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(p)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", notNullValue()))
                .andExpect(jsonPath("$.firstName").value("Carlos"))
                .andExpect(jsonPath("$.lastName").value("Lopez"))
                .andExpect(jsonPath("$.dni").value("33333333"));

        assertEquals(1, patientRepository.count());
    }
}
