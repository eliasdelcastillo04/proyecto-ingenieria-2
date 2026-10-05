---
type: community
members: 34
---

# org.junit.jupiter.api.Test

**Members:** 34 nodes

## Members
- [[dot-cancelAppointment()]] - code - backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- [[dot-cancelAppointment_CompletedAppointment_ThrowsIllegalStateException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-cancelAppointment_Success_SetsCancelled()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment()]] - code - backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- [[dot-createAppointment_Authenticated_ReturnsCreatedAppointment()]] - code - backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java
- [[dot-createAppointment_InvalidTimeRangeFormat_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_NullAppointment_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_NullDoctor_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_NullOrBlankTimeRange_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_NullStatus_SetsAvailableDefaultAndSaves()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_Success_ReturnsSavedAppointment()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-createAppointment_ValidParenthesisTimeRange_Success()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-getAllAppointments_ReturnsAppointmentsList()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-getAllAppointments_WhenEmpty_ReturnsEmptyList()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-getAppointmentById()]] - code - backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- [[dot-getAppointmentById_Found_Returns200()]] - code - backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java
- [[dot-getAppointmentById_NotFound_Returns404()]] - code - backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java
- [[dot-getAppointmentById_NullId_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-getAppointmentById_WhenExists_ReturnsOptionalWithAppointment()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-getAppointmentById_WhenNotFound_ReturnsEmptyOptional()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-hasCollision()]] - code - backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- [[dot-updateStatus()]] - code - backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- [[dot-updateStatus_Authenticated_ReturnsUpdatedAppointment()]] - code - backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java
- [[dot-updateStatus_CancelledAppointmentToActive_ThrowsIllegalStateException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_CompletedAppointment_ThrowsIllegalStateException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_IllegalStateException_Returns409Conflict()]] - code - backend/src/test/java/com/dermacare/backend/controllers/AppointmentControllerTest.java
- [[dot-updateStatus_NotFound_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_NullId_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_NullStatus_ThrowsIllegalArgumentException()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[dot-updateStatus_Success_UpdatesAndSaves()]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[Appointment_2]] - code
- [[AppointmentServiceTest]] - code - backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java
- [[org.junit.jupiter.api.Test]] - code

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/orgjunitjupiterapiTest
SORT file.name ASC
```

## Connections to other communities
- 20 edges to [[_COMMUNITY_PatientControllerTest]]
- 18 edges to [[_COMMUNITY_PatientServiceTest]]
- 16 edges to [[_COMMUNITY_JwtService]]
- 10 edges to [[_COMMUNITY_AppointmentService]]
- 10 edges to [[_COMMUNITY_PatientService]]
- 8 edges to [[_COMMUNITY_PaymentRepository]]
- 8 edges to [[_COMMUNITY_Appointment]]
- 5 edges to [[_COMMUNITY_MercadoPagoService]]
- 4 edges to [[_COMMUNITY_org.springframework.http.ResponseEntity]]
- 4 edges to [[_COMMUNITY_CryptoKeyRegistry]]
- 3 edges to [[_COMMUNITY_dot-getAllAppointments_Authenticated_ReturnsAppointmentsList]]
- 1 edge to [[_COMMUNITY_Profile]]
- 1 edge to [[_COMMUNITY_AppointmentStatus]]
- 1 edge to [[_COMMUNITY_Payment]]
- 1 edge to [[_COMMUNITY_PaymentService]]
- 1 edge to [[_COMMUNITY_PaymentPreferenceResponse]]

## Top bridge nodes
- [[org.junit.jupiter.api.Test]] - degree 102, connects to 11 communities
- [[AppointmentServiceTest]] - degree 30, connects to 6 communities
- [[dot-updateStatus()]] - degree 14, connects to 4 communities
- [[dot-createAppointment()]] - degree 12, connects to 3 communities
- [[dot-getAppointmentById()]] - degree 9, connects to 3 communities