package com.dermacare.backend.controllers;

import com.dermacare.backend.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping({"/api/auth", "/api/v1/auth"})
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody Map<String, String> credentials) {
        String username = credentials.get("username");
        if (username == null || username.isBlank()) {
            username = "admin";
        }

        String lower = username.toLowerCase();
        String role = "ADMIN";
        String fullName = "Administrador del Sistema";
        Long userId = 1L;

        if (lower.contains("recepcion") || lower.contains("secretaria") || lower.contains("sofia")) {
            role = "SECRETARIA";
            fullName = "Sofía Martínez";
            userId = 3L;
        } else if (lower.contains("valeria") || lower.contains("doctora") || lower.contains("paula") || lower.contains("medica")) {
            role = "DOCTORA";
            fullName = "Dra. Valeria Gómez";
            userId = 2L;
        }

        Map<String, Object> claims = new HashMap<>();
        claims.put("role", "ADMIN_SECRETARIA");
        claims.put("fullName", fullName);
        claims.put("userId", userId);

        long expirationMs = 86400000L; // 24 hours
        String token = io.jsonwebtoken.Jwts.builder()
                .claims(claims)
                .subject(username)
                .issuedAt(new java.util.Date(System.currentTimeMillis()))
                .expiration(new java.util.Date(System.currentTimeMillis() + expirationMs))
                .signWith(io.jsonwebtoken.security.Keys.hmacShaKeyFor(io.jsonwebtoken.io.Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351")))
                .compact();

        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("tokenType", "Bearer");
        response.put("userId", userId);
        response.put("username", username);
        response.put("fullName", fullName);
        response.put("role", role);
        response.put("expiresInMs", expirationMs);
        return ResponseEntity.ok(response);
    }
}
