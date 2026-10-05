---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Patient.java"
type: "code"
community: "Patient"
location: "L8"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Patient
---

# Patient

## Connections
- [[dot-createPatient()_1]] - `references` [EXTRACTED]
- [[dot-createPatient()]] - `references` [EXTRACTED]
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_InvalidData_Returns400BadRequest()]] - `calls` [INFERRED]
- [[dot-createPatient_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `calls` [INFERRED]
- [[dot-findByDni()]] - `references` [EXTRACTED]
- [[dot-getAge()]] - `method` [EXTRACTED]
- [[dot-getAllPatients()]] - `references` [EXTRACTED]
- [[dot-getAllPatients()_1]] - `references` [EXTRACTED]
- [[dot-getAllPatients_Authenticated_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-getAllergies()]] - `method` [EXTRACTED]
- [[dot-getContactEmail()]] - `method` [EXTRACTED]
- [[dot-getContactPhone()]] - `method` [EXTRACTED]
- [[dot-getCreatedAt()]] - `method` [EXTRACTED]
- [[dot-getDni()]] - `method` [EXTRACTED]
- [[dot-getFirstName()]] - `method` [EXTRACTED]
- [[dot-getGynecologicalHistory()]] - `method` [EXTRACTED]
- [[dot-getHabitualMedication()]] - `method` [EXTRACTED]
- [[dot-getId()]] - `method` [EXTRACTED]
- [[dot-getLastName()]] - `method` [EXTRACTED]
- [[dot-getPathologicalHistory()]] - `method` [EXTRACTED]
- [[dot-getPatient()]] - `references` [EXTRACTED]
- [[dot-getPatientById()]] - `references` [EXTRACTED]
- [[dot-getPatientById()_1]] - `references` [EXTRACTED]
- [[dot-getPatientById_Authenticated_Found_Returns200()]] - `calls` [INFERRED]
- [[dot-getProfession()]] - `method` [EXTRACTED]
- [[dot-getSpfUse()]] - `method` [EXTRACTED]
- [[dot-getSunExposure()]] - `method` [EXTRACTED]
- [[dot-getSurgicalHistory()]] - `method` [EXTRACTED]
- [[dot-getToxicHabits()]] - `method` [EXTRACTED]
- [[dot-getUpdatedAt()]] - `method` [EXTRACTED]
- [[dot-onCreate()]] - `method` [EXTRACTED]
- [[dot-onUpdate()]] - `method` [EXTRACTED]
- [[dot-setAge()]] - `method` [EXTRACTED]
- [[dot-setAllergies()]] - `method` [EXTRACTED]
- [[dot-setContactEmail()]] - `method` [EXTRACTED]
- [[dot-setContactPhone()]] - `method` [EXTRACTED]
- [[dot-setCreatedAt()]] - `method` [EXTRACTED]
- [[dot-setDni()]] - `method` [EXTRACTED]
- [[dot-setFirstName()]] - `method` [EXTRACTED]
- [[dot-setGynecologicalHistory()]] - `method` [EXTRACTED]
- [[dot-setHabitualMedication()]] - `method` [EXTRACTED]
- [[dot-setId()]] - `method` [EXTRACTED]
- [[dot-setLastName()]] - `method` [EXTRACTED]
- [[dot-setPathologicalHistory()]] - `method` [EXTRACTED]
- [[dot-setPatient()]] - `references` [EXTRACTED]
- [[dot-setProfession()]] - `method` [EXTRACTED]
- [[dot-setSpfUse()]] - `method` [EXTRACTED]
- [[dot-setSunExposure()]] - `method` [EXTRACTED]
- [[dot-setSurgicalHistory()]] - `method` [EXTRACTED]
- [[dot-setToxicHabits()]] - `method` [EXTRACTED]
- [[dot-setUpdatedAt()]] - `method` [EXTRACTED]
- [[dot-updatePatient()_1]] - `references` [EXTRACTED]
- [[dot-updatePatient()]] - `references` [EXTRACTED]
- [[dot-updatePatient_Authenticated_Returns200()]] - `calls` [INFERRED]
- [[Appointment]] - `references` [EXTRACTED]
- [[Entity]] - `references` [EXTRACTED]
- [[Patient.java]] - `contains` [EXTRACTED]
- [[PatientController.java]] - `imports` [EXTRACTED]
- [[PatientControllerTest.java]] - `imports` [EXTRACTED]
- [[PatientRepository]] - `references` [EXTRACTED]
- [[PatientRepository.java]] - `imports` [EXTRACTED]
- [[PatientService.java]] - `imports` [EXTRACTED]
- [[PatientServiceTest]] - `references` [EXTRACTED]
- [[PatientServiceTest.java]] - `imports` [EXTRACTED]
- [[Table]] - `references` [EXTRACTED]
- [[com.fasterxml.jackson.annotation.JsonIgnoreProperties]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Patient