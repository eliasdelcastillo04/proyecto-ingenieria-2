package com.dermacare.backend.controllers;

import com.dermacare.backend.security.JwtService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final JwtService jwtService;

    public AuthController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> credentials) {
        // In a real scenario, this would authenticate against Supabase or the DB.
        // For now, we simulate authentication and return a JWT token.
        String username = credentials.get("username");
        
        // Generate a token for the user (in Supabase, Supabase generates this).
        // For testing purposes, we generate one here.
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", "ADMIN_SECRETARIA"); // Example claim
        
        String token = io.jsonwebtoken.Jwts.builder()
                .claims(claims)
                .subject(username)
                .issuedAt(new java.util.Date(System.currentTimeMillis()))
                .expiration(new java.util.Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(io.jsonwebtoken.security.Keys.hmacShaKeyFor(io.jsonwebtoken.io.Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351")))
                .compact();

        Map<String, String> response = new HashMap<>();
        response.put("token", token);
        return ResponseEntity.ok(response);
    }
}
