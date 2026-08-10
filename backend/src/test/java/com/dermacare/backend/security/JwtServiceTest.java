package com.dermacare.backend.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import io.jsonwebtoken.io.Decoders;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.util.ReflectionTestUtils;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;

class JwtServiceTest {

    private JwtService jwtService;
    private final String secretKey = "413F4428472B4B6250655368566D5970337336763979244226452948404D6351";
    private final long jwtExpiration = 86400000L; // 24 hours

    @BeforeEach
    void setUp() {
        jwtService = new JwtService();
        ReflectionTestUtils.setField(jwtService, "secretKey", secretKey);
        ReflectionTestUtils.setField(jwtService, "jwtExpiration", jwtExpiration);
    }

    private String createToken(String subject, long expirationMillis) {
        return createToken(subject, expirationMillis, secretKey);
    }

    private String createToken(String subject, long expirationMillis, String key) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("role", "ADMIN_SECRETARIA");
        byte[] keyBytes = Decoders.BASE64.decode(key);
        SecretKey signingKey = Keys.hmacShaKeyFor(keyBytes);

        return Jwts.builder()
                .claims(claims)
                .subject(subject)
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expirationMillis))
                .signWith(signingKey)
                .compact();
    }

    @Test
    void extractUsername_ValidToken_ReturnsUsername() {
        String token = createToken("doctor@dermacare.com", 1000 * 60 * 60);
        String username = jwtService.extractUsername(token);
        assertEquals("doctor@dermacare.com", username);
    }

    @Test
    void extractClaim_ExpirationClaim_ReturnsExpirationDate() {
        long futureMillis = 1000 * 60 * 60;
        String token = createToken("doctor@dermacare.com", futureMillis);
        Date expiration = jwtService.extractClaim(token, claims -> claims.getExpiration());
        assertNotNull(expiration);
        assertTrue(expiration.after(new Date()));
    }

    @Test
    void isTokenValid_ValidTokenAndMatchingUsername_ReturnsTrue() {
        String token = createToken("doctor@dermacare.com", 1000 * 60 * 60);
        boolean isValid = jwtService.isTokenValid(token, "doctor@dermacare.com");
        assertTrue(isValid);
    }

    @Test
    void isTokenValid_ValidTokenAndDifferentUsername_ReturnsFalse() {
        String token = createToken("doctor@dermacare.com", 1000 * 60 * 60);
        boolean isValid = jwtService.isTokenValid(token, "other@dermacare.com");
        assertFalse(isValid);
    }

    @Test
    void isTokenValid_ExpiredToken_ThrowsExpiredJwtException() {
        String token = createToken("doctor@dermacare.com", -10000);
        assertThrows(ExpiredJwtException.class, () -> jwtService.isTokenValid(token, "doctor@dermacare.com"));
    }

    @Test
    void isTokenValid_InvalidSignature_ThrowsSignatureException() {
        String differentKey = "513F4428472B4B6250655368566D5970337336763979244226452948404D6352";
        String token = createToken("doctor@dermacare.com", 1000 * 60 * 60, differentKey);
        assertThrows(Exception.class, () -> jwtService.isTokenValid(token, "doctor@dermacare.com"));
    }

    @Test
    void isTokenValid_MalformedToken_ThrowsMalformedJwtException() {
        assertThrows(MalformedJwtException.class, () -> jwtService.isTokenValid("invalid.token.string", "doctor@dermacare.com"));
    }
}
