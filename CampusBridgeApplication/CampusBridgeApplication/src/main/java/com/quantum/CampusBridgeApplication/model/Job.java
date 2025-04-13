package com.quantum.CampusBridgeApplication.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Job {
    @Id @GeneratedValue
    private Long id;

    private String title;
    private String company;
    private String location;
    private String logo;

    @ElementCollection
    private List<String> skills;
    // Getters, Setters, Constructors

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public List<String> getSkills() {
		return skills;
	}

	public void setSkills(List<String> skills) {
		this.skills = skills;
	}
}
