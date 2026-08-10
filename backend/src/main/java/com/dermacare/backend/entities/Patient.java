package com.dermacare.backend.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "patients")
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(unique = true, nullable = false)
    private String dni;

    private Integer age;
    private String profession;

    @Column(name = "contact_phone")
    private String contactPhone;

    @Column(name = "contact_email")
    private String contactEmail;

    // Antecedentes Médicos
    @Column(name = "pathological_history", columnDefinition = "TEXT")
    private String pathologicalHistory;

    @Column(columnDefinition = "TEXT")
    private String allergies;

    @Column(name = "toxic_habits", columnDefinition = "TEXT")
    private String toxicHabits;

    @Column(name = "sun_exposure", columnDefinition = "TEXT")
    private String sunExposure;

    @Column(name = "spf_use", columnDefinition = "TEXT")
    private String spfUse;

    @Column(name = "surgical_history", columnDefinition = "TEXT")
    private String surgicalHistory;

    @Column(name = "gynecological_history", columnDefinition = "TEXT")
    private String gynecologicalHistory;

    @Column(name = "habitual_medication", columnDefinition = "TEXT")
    private String habitualMedication;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }

    // Getters and Setters (omitted for brevity, assume Lombok or standard getters/setters)
    
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName; }

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName; }

    public String getDni() { return dni; }
    public void setDni(String dni) { this.dni = dni; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public String getProfession() { return profession; }
    public void setProfession(String profession) { this.profession = profession; }

    public String getContactPhone() { return contactPhone; }
    public void setContactPhone(String contactPhone) { this.contactPhone = contactPhone; }

    public String getContactEmail() { return contactEmail; }
    public void setContactEmail(String contactEmail) { this.contactEmail = contactEmail; }

    public String getPathologicalHistory() { return pathologicalHistory; }
    public void setPathologicalHistory(String pathologicalHistory) { this.pathologicalHistory = pathologicalHistory; }

    public String getAllergies() { return allergies; }
    public void setAllergies(String allergies) { this.allergies = allergies; }

    public String getToxicHabits() { return toxicHabits; }
    public void setToxicHabits(String toxicHabits) { this.toxicHabits = toxicHabits; }

    public String getSunExposure() { return sunExposure; }
    public void setSunExposure(String sunExposure) { this.sunExposure = sunExposure; }

    public String getSpfUse() { return spfUse; }
    public void setSpfUse(String spfUse) { this.spfUse = spfUse; }

    public String getSurgicalHistory() { return surgicalHistory; }
    public void setSurgicalHistory(String surgicalHistory) { this.surgicalHistory = surgicalHistory; }

    public String getGynecologicalHistory() { return gynecologicalHistory; }
    public void setGynecologicalHistory(String gynecologicalHistory) { this.gynecologicalHistory = gynecologicalHistory; }

    public String getHabitualMedication() { return habitualMedication; }
    public void setHabitualMedication(String habitualMedication) { this.habitualMedication = habitualMedication; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }

    public LocalDateTime getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(LocalDateTime updatedAt) { this.updatedAt = updatedAt; }
}
