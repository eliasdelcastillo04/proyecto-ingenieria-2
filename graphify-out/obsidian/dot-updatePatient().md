---
source_file: "backend/src/main/java/com/dermacare/backend/services/PatientService.java"
type: "code"
community: "PatientServiceTest"
location: "L63"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/PatientServiceTest
---

# .updatePatient()

## Connections
- [[dot-findByDni()]] - `calls` [INFERRED]
- [[dot-updatePatient()_1]] - `calls` [INFERRED]
- [[dot-updatePatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_Authenticated_Returns200()]] - `calls` [INFERRED]
- [[dot-updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_NegativeAge_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_NotFound_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_NullData_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_NullId_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_SameDniForCurrentPatient_Success()]] - `calls` [INFERRED]
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - `calls` [INFERRED]
- [[Patient]] - `references` [EXTRACTED]
- [[PatientService]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/PatientServiceTest