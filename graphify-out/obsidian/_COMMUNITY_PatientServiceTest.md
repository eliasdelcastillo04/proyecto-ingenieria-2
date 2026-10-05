---
type: community
members: 26
---

# PatientServiceTest

**Members:** 26 nodes

## Members
- [[dot-PatientService()]] - code - backend/src/main/java/com/dermacare/backend/services/PatientService.java
- [[dot-createPatient()]] - code - backend/src/main/java/com/dermacare/backend/services/PatientService.java
- [[dot-createPatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_DuplicateDni_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_NegativeAge_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_NullOrBlankDni_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_NullOrBlankFirstName_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_NullOrBlankLastName_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_NullPatient_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_Success_ReturnsSavedPatient()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-createPatient_TrimsWhitespaceFields()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-existsByDni()]] - code - backend/src/main/java/com/dermacare/backend/repositories/PatientRepository.java
- [[dot-findByDni()]] - code - backend/src/main/java/com/dermacare/backend/repositories/PatientRepository.java
- [[dot-updatePatient()]] - code - backend/src/main/java/com/dermacare/backend/services/PatientService.java
- [[dot-updatePatient_AgeGreaterThan150_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_DuplicateDniBelongingToAnotherPatient_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_NegativeAge_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_NotFound_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_NullData_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_NullId_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_SameDniForCurrentPatient_Success()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[dot-updatePatient_Success_UpdatesFieldsAndSaves()]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[Patient_2]] - code
- [[PatientRepository]] - code - backend/src/main/java/com/dermacare/backend/repositories/PatientRepository.java
- [[PatientServiceTest]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java
- [[PatientServiceTest.java]] - code - backend/src/test/java/com/dermacare/backend/services/PatientServiceTest.java

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/PatientServiceTest
SORT file.name ASC
```

## Connections to other communities
- 18 edges to [[_COMMUNITY_org.junit.jupiter.api.Test]]
- 15 edges to [[_COMMUNITY_PatientService]]
- 6 edges to [[_COMMUNITY_Patient]]
- 6 edges to [[_COMMUNITY_PatientControllerTest]]
- 4 edges to [[_COMMUNITY_PaymentRepository]]
- 3 edges to [[_COMMUNITY_org.springframework.stereotype.Repository]]
- 1 edge to [[_COMMUNITY_AppointmentService]]

## Top bridge nodes
- [[PatientServiceTest]] - degree 31, connects to 4 communities
- [[PatientRepository]] - degree 11, connects to 4 communities
- [[PatientServiceTest.java]] - degree 7, connects to 4 communities
- [[dot-createPatient()]] - degree 15, connects to 3 communities
- [[dot-updatePatient()]] - degree 13, connects to 3 communities