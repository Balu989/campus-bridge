package com.quantum.CampusBridgeApplication.service;

import com.quantum.CampusBridgeApplication.model.Attendance;
import com.quantum.CampusBridgeApplication.repository.AttendanceRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class AttendanceService {
    private final AttendanceRepository repo;

    public AttendanceService(AttendanceRepository repo) {
        this.repo = repo;
    }

    public Attendance markAttendance(Attendance attendance) {
        return repo.save(attendance);
    }

    public List<Attendance> getAttendanceByCourseAndDate(String course, LocalDate date) {
        return repo.findByCourseNameAndDate(course, date);
    }
}
