package com.quantum.CampusBridgeApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.quantum.CampusBridgeApplication.model.User;
import com.quantum.CampusBridgeApplication.repository.UserRepository;
import com.quantum.CampusBridgeApplication.security.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/me")
    public ResponseEntity<?> getMyProfile(HttpServletRequest request) {
        String email = jwtUtil.extractUsernameFromHeader(request);
        User user = userRepo.findByEmail(email).orElseThrow();
        return ResponseEntity.ok(user);
    }

    @PutMapping
    public ResponseEntity<?> updateProfile(
            HttpServletRequest request,
            @RequestParam(value = "bio", required = false) String bio,
            @RequestParam(value = "resume", required = false) MultipartFile resume) {

        String email = jwtUtil.extractUsernameFromHeader(request);
        User user = userRepo.findByEmail(email).orElseThrow();

        if (bio != null) user.setBio(bio);
        if (resume != null) {
            user.setResumeName(resume.getOriginalFilename());
            // You can also save the file content to file system/cloud if needed
        }

        return ResponseEntity.ok(userRepo.save(user));
    }
}
