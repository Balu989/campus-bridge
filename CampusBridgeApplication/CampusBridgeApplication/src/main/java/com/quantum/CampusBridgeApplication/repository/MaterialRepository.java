package com.quantum.CampusBridgeApplication.repository;

import com.quantum.CampusBridgeApplication.model.Material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepository extends JpaRepository<Material, Long> {
}
