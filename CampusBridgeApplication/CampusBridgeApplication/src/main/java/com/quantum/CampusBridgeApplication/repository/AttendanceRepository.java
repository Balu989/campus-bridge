package com.quantum.CampusBridgeApplication.repository;

import com.quantum.CampusBridgeApplication.model.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByCourseNameAndDate(String courseName, LocalDate date);
}
