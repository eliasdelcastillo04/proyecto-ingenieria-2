---
source_file: "backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java"
type: "code"
community: "PatientControllerTest"
location: "L30"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PatientControllerTest
---

# AppointmentControllerTest

## Connections
- [[dot-cancelAppointment_Authenticated_Returns204NoContent()]] - `method` [EXTRACTED]
- [[dot-createAppointment_Authenticated_ReturnsCreatedAppointment()]] - `method` [EXTRACTED]
- [[dot-getAllAppointments_Authenticated_ReturnsAppointmentsList()]] - `method` [EXTRACTED]
- [[dot-getAllAppointments_Unauthenticated_ReturnsForbiddenOrUnauthorized()]] - `method` [EXTRACTED]
- [[dot-getAppointmentById_Found_Returns200()]] - `method` [EXTRACTED]
- [[dot-getAppointmentById_NotFound_Returns404()]] - `method` [EXTRACTED]
- [[dot-setUp()_3]] - `method` [EXTRACTED]
- [[dot-updateStatus_Authenticated_ReturnsUpdatedAppointment()]] - `method` [EXTRACTED]
- [[dot-updateStatus_IllegalStateException_Returns409Conflict()]] - `method` [EXTRACTED]
- [[AppointmentControllerTest.java]] - `contains` [EXTRACTED]
- [[AppointmentService]] - `references` [EXTRACTED]
- [[com.fasterxml.jackson.databind.ObjectMapper]] - `references` [EXTRACTED]
- [[org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc]] - `references` [EXTRACTED]
- [[org.springframework.boot.test.context.SpringBootTest]] - `references` [EXTRACTED]
- [[org.springframework.test.web.servlet.MockMvc]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/PatientControllerTest