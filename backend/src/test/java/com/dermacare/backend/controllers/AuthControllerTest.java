package com.dermacare.backend.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import javax.crypto.SecretKey;
import java.util.HashMap;
import java.util.Map;

import static org.hamcrest.Matchers.notNullValue;
import static org.junit.jupiter.api.Assertions.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private final String secretKey = "413F4428472B4B6250655368566D5970337336763979244226452948404D6351";

    @Test
    void login_WithValidCredentials_Returns200AndToken() throws Exception {
        Map<String, String> credentials = new HashMap<>();
        credentials.put("username", "admin@dermacare.com");
        credentials.put("password", "secret123");

        mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(credentials)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.token", notNullValue()));
    }

    @Test
    void login_ReturnedToken_CanBeParsedAndContainsCorrectClaims() throws Exception {
        Map<String, String> credentials = new HashMap<>();
        credentials.put("username", "admin@dermacare.com");
        credentials.put("password", "secret123");

        MvcResult result = mockMvc.perform(post("/api/auth/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(credentials)))
                .andExpect(status().isOk())
                .andReturn();

        String responseString = result.getResponse().getContentAsString();
        @SuppressWarnings("unchecked")
        Map<String, String> responseMap = objectMapper.readValue(responseString, Map.class);
        String token = responseMap.get("token");

        assertNotNull(token);
        assertFalse(token.isEmpty());

        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        SecretKey signingKey = Keys.hmacShaKeyFor(keyBytes);

        Claims claims = Jwts.parser()
                .verifyWith(signingKey)
                .build()
                .parseSignedClaims(token)
                .getPayload();

        assertEquals("admin@dermacare.com", claims.getSubject());
        assertEquals("ADMIN_SECRETARIA", claims.get("role"));
        assertNotNull(claims.getExpiration());
        assertTrue(claims.getExpiration().after(new java.util.Date()));
    }
}
