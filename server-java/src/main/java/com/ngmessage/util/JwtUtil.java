package com.ngmessage.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Component
public class JwtUtil {

    private final SecretKey key;
    private final String rawSecret;
    private final long expirationMs;

    public JwtUtil(
            @Value("${app.jwt.secret:AJH|80J*KLKS902JLAJD01_92}") String secret,
            @Value("${app.jwt.expiration-ms:86400000}") long expirationMs) {
        
        this.rawSecret = secret;
        // Ensure secret key is at least 256 bits (32 bytes) for HMAC-SHA256
        byte[] keyBytes = secret.getBytes(StandardCharsets.UTF_8);
        if (keyBytes.length < 32) {
            byte[] padded = new byte[32];
            System.arraycopy(keyBytes, 0, padded, 0, keyBytes.length);
            keyBytes = padded;
        }
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.expirationMs = expirationMs;
    }

    public String getSecretKey() {
        return rawSecret;
    }

    public String generateToken(String username, String role) {
        return generateToken(1, username, username, role);
    }


    public String generateToken(Integer id, String username, String name, String type) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(username)
                .claim("id", id)
                .claim("username", username)
                .claim("name", name)
                .claim("type", type != null ? type : "ADMIN")
                .claim("role", type != null ? type : "ADMIN")
                .issuedAt(now)
                .expiration(expiryDate)
                .signWith(key)
                .compact();
    }

    public Claims validateAndGetClaims(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public String getUsernameFromToken(String token) {
        return validateAndGetClaims(token).getSubject();
    }
}
