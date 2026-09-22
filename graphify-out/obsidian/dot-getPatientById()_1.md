---
source_file: "backend/src/main/java/com/dermacare/backend/services/PatientService.java"
type: "code"
community: "Patient"
location: "L26"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/Patient
---

# .getPatientById()

## Connections
- [[dot-getPatientById()]] - `calls` [INFERRED]
- [[dot-getPatientById_Authenticated_Found_Returns200()]] - `calls` [INFERRED]
- [[dot-getPatientById_Authenticated_NotFound_Returns404()]] - `calls` [INFERRED]
- [[dot-getPatientById_NullId_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-getPatientById_WhenExists_ReturnsOptionalPatient()]] - `calls` [INFERRED]
- [[dot-getPatientById_WhenNotFound_ReturnsEmptyOptional()]] - `calls` [INFERRED]
- [[Patient]] - `references` [EXTRACTED]
- [[PatientService]] - `method` [EXTRACTED]
- [[org.springframework.transaction.annotation.Transactional]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/Patient