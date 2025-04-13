package com.quantum.CampusBridgeApplication.controller;

import com.quantum.CampusBridgeApplication.dto.AuthRequest;
import com.quantum.CampusBridgeApplication.dto.AuthResponse;
import com.quantum.CampusBridgeApplication.model.User;
import com.quantum.CampusBridgeApplication.service.AuthService;
import com.quantum.CampusBridgeApplication.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    // Register user
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user) {
        try {
            // Registering user using AuthService
            AuthResponse response = authService.register(user.getFullName(), user.getEmail(), user.getPassword(), user.getRole().name());
            return ResponseEntity.ok(response);  // Return the response with the token
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Login user
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            // Login using AuthService
            AuthResponse response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
