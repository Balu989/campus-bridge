package com.quantum.CampusBridgeApplication.controller;

import com.quantum.CampusBridgeApplication.model.Attendance;
import com.quantum.CampusBridgeApplication.service.AttendanceService;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@CrossOrigin(origins = "*")
public class AttendanceController {
    private final AttendanceService service;

    public AttendanceController(AttendanceService service) {
        this.service = service;
    }

    @PostMapping("/mark")
    public Attendance mark(@RequestBody Attendance attendance) {
        return service.markAttendance(attendance);
    }

    @GetMapping
    public List<Attendance> getByCourseAndDate(@RequestParam String course, @RequestParam String date) {
        return service.getAttendanceByCourseAndDate(course, LocalDate.parse(date));
    }
}
