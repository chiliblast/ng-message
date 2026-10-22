package com.ngmessage.ant.service;

import com.ngmessage.ant.config.ServerConfig;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

public class JwtService {

    private final SecretKey key;
    private final String rawSecret;
    private final long expirationMs;

    public JwtService(ServerConfig config) {
        this.rawSecret = config.getJwtSecret();
        this.expirationMs = config.getJwtExpirationMs();

        byte[] keyBytes = rawSecret.getBytes(StandardCharsets.UTF_8);
        if (keyBytes.length < 32) {
            byte[] padded = new byte[32];
            System.arraycopy(keyBytes, 0, padded, 0, keyBytes.length);
            keyBytes = padded;
        }
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    public String generateToken(String username, String role) {
        return generateToken(1, username, username, role);
    }

    public String generateToken(Integer id, String username, String name, String type) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + expirationMs);

        return Jwts.builder()
                .subject(username)
                .claim("id", id != null ? id : 1)
                .claim("username", username)
                .claim("name", name != null ? name : username)
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

    public String getRawSecret() {
        return rawSecret;
    }
}
