package com.quantum.CampusBridgeApplication.service;

import com.quantum.CampusBridgeApplication.model.Material;
import com.quantum.CampusBridgeApplication.repository.MaterialRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {
    private final MaterialRepository repo;

    public MaterialService(MaterialRepository repo) {
        this.repo = repo;
    }

    public Material saveMaterial(Material material) {
        return repo.save(material);
    }

    public List<Material> getAllMaterials() {
        return repo.findAll();
    }
}
