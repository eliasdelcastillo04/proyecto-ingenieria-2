package com.dermacare.backend.services;

import com.dermacare.backend.entities.Patient;
import com.dermacare.backend.repositories.PatientRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    @Transactional(readOnly = true)
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Patient> getPatientById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Patient ID cannot be null");
        }
        return patientRepository.findById(id);
    }

    public Patient createPatient(Patient patient) {
        if (patient == null) {
            throw new IllegalArgumentException("Patient cannot be null");
        }
        if (patient.getFirstName() == null || patient.getFirstName().trim().isEmpty()) {
            throw new IllegalArgumentException("Patient first name is required");
        }
        if (patient.getLastName() == null || patient.getLastName().trim().isEmpty()) {
            throw new IllegalArgumentException("Patient last name is required");
        }
        if (patient.getDni() == null || patient.getDni().trim().isEmpty()) {
            throw new IllegalArgumentException("Patient DNI is required");
        }
        if (patient.getAge() != null && (patient.getAge() < 0 || patient.getAge() > 150)) {
            throw new IllegalArgumentException("Patient age must be between 0 and 150");
        }

        String cleanDni = patient.getDni().trim();
        if (patientRepository.existsByDni(cleanDni)) {
            throw new IllegalArgumentException("Patient with DNI already exists: " + cleanDni);
        }

        patient.setFirstName(patient.getFirstName().trim());
        patient.setLastName(patient.getLastName().trim());
        patient.setDni(cleanDni);

        return patientRepository.save(patient);
    }

    public Patient updatePatient(Long id, Patient updatedData) {
        if (id == null) {
            throw new IllegalArgumentException("Patient ID cannot be null");
        }
        if (updatedData == null) {
            throw new IllegalArgumentException("Updated patient data cannot be null");
        }
        Patient existing = patientRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Patient not found with id: " + id));

        if (updatedData.getFirstName() != null && !updatedData.getFirstName().trim().isEmpty()) {
            existing.setFirstName(updatedData.getFirstName().trim());
        }
        if (updatedData.getLastName() != null && !updatedData.getLastName().trim().isEmpty()) {
            existing.setLastName(updatedData.getLastName().trim());
        }
        if (updatedData.getDni() != null && !updatedData.getDni().trim().isEmpty()) {
            String cleanDni = updatedData.getDni().trim();
            Optional<Patient> existingWithDni = patientRepository.findByDni(cleanDni);
            if (existingWithDni.isPresent() && !existingWithDni.get().getId().equals(id)) {
                throw new IllegalArgumentException("Patient with DNI already exists: " + cleanDni);
            }
            existing.setDni(cleanDni);
        }
        if (updatedData.getAge() != null) {
            if (updatedData.getAge() < 0 || updatedData.getAge() > 150) {
                throw new IllegalArgumentException("Patient age must be between 0 and 150");
            }
            existing.setAge(updatedData.getAge());
        }
        if (updatedData.getProfession() != null) {
            existing.setProfession(updatedData.getProfession());
        }
        if (updatedData.getContactPhone() != null) {
            existing.setContactPhone(updatedData.getContactPhone());
        }
        if (updatedData.getContactEmail() != null) {
            existing.setContactEmail(updatedData.getContactEmail());
        }
        if (updatedData.getPathologicalHistory() != null) {
            existing.setPathologicalHistory(updatedData.getPathologicalHistory());
        }
        if (updatedData.getAllergies() != null) {
            existing.setAllergies(updatedData.getAllergies());
        }
        if (updatedData.getToxicHabits() != null) {
            existing.setToxicHabits(updatedData.getToxicHabits());
        }
        if (updatedData.getSunExposure() != null) {
            existing.setSunExposure(updatedData.getSunExposure());
        }
        if (updatedData.getSpfUse() != null) {
            existing.setSpfUse(updatedData.getSpfUse());
        }
        if (updatedData.getSurgicalHistory() != null) {
            existing.setSurgicalHistory(updatedData.getSurgicalHistory());
        }
        if (updatedData.getGynecologicalHistory() != null) {
            existing.setGynecologicalHistory(updatedData.getGynecologicalHistory());
        }
        if (updatedData.getHabitualMedication() != null) {
            existing.setHabitualMedication(updatedData.getHabitualMedication());
        }
        return patientRepository.save(existing);
    }

    public void deletePatient(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Patient ID cannot be null");
        }
        patientRepository.deleteById(id);
    }
}
