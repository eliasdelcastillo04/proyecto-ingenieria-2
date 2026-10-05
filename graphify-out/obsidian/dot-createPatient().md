---
source_file: "backend/src/main/java/com/dermacare/backend/services/PatientService.java"
type: "code"
community: "PatientServiceTest"
location: "L34"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/PatientServiceTest
---

# .createPatient()

## Connections
- [[dot-createPatient()_1]] - `calls` [INFERRED]
- [[dot-createPatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_DuplicateDni_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_InvalidData_Returns400BadRequest()]] - `calls` [INFERRED]
- [[dot-createPatient_NegativeAge_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_NullOrBlankDni_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_NullOrBlankFirstName_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_NullOrBlankLastName_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_NullPatient_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_Success_ReturnsSavedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_TrimsWhitespaceFields()]] - `calls` [INFERRED]
- [[dot-existsByDni()]] - `calls` [INFERRED]
- [[Patient]] - `references` [EXTRACTED]
- [[PatientService]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/PatientServiceTest