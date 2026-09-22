---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Patient.java"
type: "code"
community: "Patient"
location: "L83"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Patient
---

# .setLastName()

## Connections
- [[dot-createPatient()_1]] - `calls` [INFERRED]
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_NullOrBlankLastName_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_TrimsWhitespaceFields()]] - `calls` [INFERRED]
- [[dot-createPatient_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `calls` [INFERRED]
- [[dot-getAllPatients_Authenticated_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-getAllPatients_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-getPatientById_Authenticated_Found_Returns200()]] - `calls` [INFERRED]
- [[dot-setUp()]] - `calls` [INFERRED]
- [[dot-updatePatient()_1]] - `calls` [INFERRED]
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - `calls` [INFERRED]
- [[Patient]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Patient