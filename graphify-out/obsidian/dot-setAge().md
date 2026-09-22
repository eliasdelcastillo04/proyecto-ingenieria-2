---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Patient.java"
type: "code"
community: "Patient"
location: "L89"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Patient
---

# .setAge()

## Connections
- [[dot-createPatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `calls` [INFERRED]
- [[dot-createPatient_NegativeAge_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-getAllPatients_Authenticated_ReturnsListOfPatients()]] - `calls` [INFERRED]
- [[dot-setUp()]] - `calls` [INFERRED]
- [[dot-updatePatient()_1]] - `calls` [INFERRED]
- [[dot-updatePatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_NegativeAge_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - `calls` [INFERRED]
- [[Patient]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Patient