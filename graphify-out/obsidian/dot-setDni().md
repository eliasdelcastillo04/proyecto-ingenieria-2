---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Patient.java"
type: "code"
community: "Patient"
location: "L86"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Patient
---

# .setDni()

## Connections
- [[dot-createPatient()_1]] - `calls` [INFERRED]
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_NullOrBlankDni_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_TrimsWhitespaceFields()]] - `calls` [INFERRED]
- [[dot-createPatient_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `calls` [INFERRED]
- [[dot-getAllPatients_Authenticated_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-getAllPatients_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-setUp()]] - `calls` [INFERRED]
- [[dot-updatePatient()_1]] - `calls` [INFERRED]
- [[dot-updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_SameDniForCurrentPatient_Success()]] - `calls` [INFERRED]
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - `calls` [INFERRED]
- [[Patient]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Patient