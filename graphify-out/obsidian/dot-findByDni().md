---
source_file: "backend/src/main/java/com/dermacare/backend/repositories/PatientRepository.java"
type: "code"
community: "PatientServiceTest"
location: "L14"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/PatientServiceTest
---

# .findByDni()

## Connections
- [[dot-updatePatient()]] - `calls` [INFERRED]
- [[dot-updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updatePatient_SameDniForCurrentPatient_Success()]] - `calls` [INFERRED]
- [[Patient]] - `references` [EXTRACTED]
- [[PatientRepository]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/PatientServiceTest