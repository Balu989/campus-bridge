package com.quantum.CampusBridgeApplication.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @GetMapping("/secure")
    public String securedEndpoint() {
        return "✅ This is a secure endpoint. You are authenticated!";
    }
}
