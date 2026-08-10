package com.dermacare.backend.entities;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "consultations")
public class Consultation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "appointment_id", unique = true, nullable = false)
    private Appointment appointment;

    // Evaluación y Examen Físico
    @Column(name = "reason_for_visit", columnDefinition = "TEXT")
    private String reasonForVisit;

    @Column(name = "fitzpatrick_phototype", length = 50)
    private String fitzpatrickPhototype;

    @Column(name = "facial_exam", columnDefinition = "TEXT")
    private String facialExam;

    @Column(name = "body_exam", columnDefinition = "TEXT")
    private String bodyExam;

    // Seguimiento Diario
    @Column(name = "procedure_performed", columnDefinition = "TEXT")
    private String procedurePerformed;

    @Column(name = "materials_used", columnDefinition = "TEXT")
    private String materialsUsed;

    @Column(name = "complications_observed", columnDefinition = "TEXT")
    private String complicationsObserved;

    @Column(name = "patient_satisfaction_level")
    private Integer patientSatisfactionLevel;

    @Column(columnDefinition = "TEXT")
    private String notes;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Appointment getAppointment() { return appointment; }
    public void setAppointment(Appointment appointment) { this.appointment = appointment; }

    public String getReasonForVisit() { return reasonForVisit; }
    public void setReasonForVisit(String reasonForVisit) { this.reasonForVisit = reasonForVisit; }

    public String getFitzpatrickPhototype() { return fitzpatrickPhototype; }
    public void setFitzpatrickPhototype(String fitzpatrickPhototype) { this.fitzpatrickPhototype = fitzpatrickPhototype; }

    public String getFacialExam() { return facialExam; }
    public void setFacialExam(String facialExam) { this.facialExam = facialExam; }

    public String getBodyExam() { return bodyExam; }
    public void setBodyExam(String bodyExam) { this.bodyExam = bodyExam; }

    public String getProcedurePerformed() { return procedurePerformed; }
    public void setProcedurePerformed(String procedurePerformed) { this.procedurePerformed = procedurePerformed; }

    public String getMaterialsUsed() { return materialsUsed; }
    public void setMaterialsUsed(String materialsUsed) { this.materialsUsed = materialsUsed; }

    public String getComplicationsObserved() { return complicationsObserved; }
    public void setComplicationsObserved(String complicationsObserved) { this.complicationsObserved = complicationsObserved; }

    public Integer getPatientSatisfactionLevel() { return patientSatisfactionLevel; }
    public void setPatientSatisfactionLevel(Integer patientSatisfactionLevel) { this.patientSatisfactionLevel = patientSatisfactionLevel; }

    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
