---
source_file: "backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java"
type: "code"
community: "Patient"
location: "L20"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/Patient
---

# PatientServiceTest

## Connections
- [[dot-createPatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_DuplicateDni_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_NegativeAge_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_NullOrBlankDni_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_NullOrBlankFirstName_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_NullOrBlankLastName_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_NullPatient_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createPatient_Success_ReturnsSavedPatient()]] - `method` [EXTRACTED]
- [[dot-createPatient_TrimsWhitespaceFields()]] - `method` [EXTRACTED]
- [[dot-deletePatient_NullId_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-deletePatient_Success_DeletesById()]] - `method` [EXTRACTED]
- [[dot-getAllPatients_ReturnsListOfPatients()]] - `method` [EXTRACTED]
- [[dot-getAllPatients_WhenEmpty_ReturnsEmptyList()]] - `method` [EXTRACTED]
- [[dot-getPatientById_NullId_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-getPatientById_WhenExists_ReturnsOptionalPatient()]] - `method` [EXTRACTED]
- [[dot-getPatientById_WhenNotFound_ReturnsEmptyOptional()]] - `method` [EXTRACTED]
- [[dot-setUp()]] - `method` [EXTRACTED]
- [[dot-updatePatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_NegativeAge_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_NotFound_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_NullData_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_NullId_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updatePatient_SameDniForCurrentPatient_Success()]] - `method` [EXTRACTED]
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - `method` [EXTRACTED]
- [[Patient]] - `references` [EXTRACTED]
- [[PatientRepository]] - `references` [EXTRACTED]
- [[PatientService]] - `references` [EXTRACTED]
- [[PatientServiceTest.java]] - `contains` [EXTRACTED]
- [[org.junit.jupiter.api.extension.ExtendWith]] - `references` [EXTRACTED]
- [[org.mockito.junit.jupiter.MockitoExtension]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/Patient