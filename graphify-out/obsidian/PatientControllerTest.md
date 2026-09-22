---
source_file: "backend/src/test/java/com/dermacare/backend/controllers/PatientControllerTest.java"
type: "code"
community: "PatientControllerTest"
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PatientControllerTest
---

# PatientControllerTest

## Connections
- [[dot-createPatient_Authenticated_SavesAndReturnsCreatedPatient()]] - `method` [EXTRACTED]
- [[dot-createPatient_InvalidData_Returns400BadRequest()]] - `method` [EXTRACTED]
- [[dot-createPatient_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `method` [EXTRACTED]
- [[dot-deletePatient_Authenticated_Returns204()]] - `method` [EXTRACTED]
- [[dot-getAllPatients_Authenticated_ReturnsListOfPatients()]] - `method` [EXTRACTED]
- [[dot-getAllPatients_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `method` [EXTRACTED]
- [[dot-getPatientById_Authenticated_Found_Returns200()]] - `method` [EXTRACTED]
- [[dot-getPatientById_Authenticated_NotFound_Returns404()]] - `method` [EXTRACTED]
- [[dot-setUp()_4]] - `method` [EXTRACTED]
- [[dot-updatePatient_Authenticated_Returns200()]] - `method` [EXTRACTED]
- [[JwtService]] - `references` [EXTRACTED]
- [[PatientControllerTest.java]] - `contains` [EXTRACTED]
- [[PatientService]] - `references` [EXTRACTED]
- [[com.fasterxml.jackson.databind.ObjectMapper]] - `references` [EXTRACTED]
- [[org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc]] - `references` [EXTRACTED]
- [[org.springframework.boot.test.context.SpringBootTest]] - `references` [EXTRACTED]
- [[org.springframework.test.web.servlet.MockMvc]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/PatientControllerTest