package com.quantum.CampusBridgeApplication.security;

import com.quantum.CampusBridgeApplication.model.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import jakarta.servlet.http.HttpServletRequest; // ✅ CORRECT for Spring Boot 3+

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    private final String SECRET = "demo-secret-key-for-jwt-coding-platform-campus-bridge"; // must be 32+ chars
    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 5; // 5 hours

    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());

    public String generateToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .claim("fullName", user.getFullName())
                .claim("role", user.getRole())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractAllClaims(String token) throws ExpiredJwtException {
        return Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String extractEmail(String token) {
        return extractAllClaims(token).getSubject();
    }

    public String extractRole(String token) {
        return extractAllClaims(token).get("role", String.class);
    }

    public boolean isTokenValid(String token) {
        try {
            extractAllClaims(token); // throws if invalid/expired
            return true;
        } catch (JwtException e) {
            return false;
        }
    }

    public String extractUsername(String token) {
        return extractEmail(token);
    }

    public String extractUsernameFromHeader(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return extractUsername(header.substring(7));
        }
        return null;
    }
}

