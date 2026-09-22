---
source_file: "backend/src/test/java/com/dermacare/backend/services/AppointmentServiceTest.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/orgjunitjupiterapiTest
---

# AppointmentServiceTest

## Connections
- [[dot-cancelAppointment_CompletedAppointment_ThrowsIllegalStateException()]] - `method` [EXTRACTED]
- [[dot-cancelAppointment_Success_SetsCancelled()]] - `method` [EXTRACTED]
- [[dot-createAppointment_InvalidTimeRangeFormat_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createAppointment_NullAppointment_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createAppointment_NullDoctor_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createAppointment_NullOrBlankTimeRange_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-createAppointment_NullStatus_SetsAvailableDefaultAndSaves()]] - `method` [EXTRACTED]
- [[dot-createAppointment_Success_ReturnsSavedAppointment()]] - `method` [EXTRACTED]
- [[dot-createAppointment_ValidParenthesisTimeRange_Success()]] - `method` [EXTRACTED]
- [[dot-getAllAppointments_ReturnsAppointmentsList()]] - `method` [EXTRACTED]
- [[dot-getAllAppointments_WhenEmpty_ReturnsEmptyList()]] - `method` [EXTRACTED]
- [[dot-getAppointmentById_NullId_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-getAppointmentById_WhenExists_ReturnsOptionalWithAppointment()]] - `method` [EXTRACTED]
- [[dot-getAppointmentById_WhenNotFound_ReturnsEmptyOptional()]] - `method` [EXTRACTED]
- [[dot-setUp()_2]] - `method` [EXTRACTED]
- [[dot-updateStatus_CancelledAppointmentToActive_ThrowsIllegalStateException()]] - `method` [EXTRACTED]
- [[dot-updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess()]] - `method` [EXTRACTED]
- [[dot-updateStatus_CompletedAppointment_ThrowsIllegalStateException()]] - `method` [EXTRACTED]
- [[dot-updateStatus_NotFound_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updateStatus_NullId_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updateStatus_NullStatus_ThrowsIllegalArgumentException()]] - `method` [EXTRACTED]
- [[dot-updateStatus_Success_UpdatesAndSaves()]] - `method` [EXTRACTED]
- [[Appointment]] - `references` [EXTRACTED]
- [[AppointmentRepository]] - `references` [EXTRACTED]
- [[AppointmentService]] - `references` [EXTRACTED]
- [[AppointmentServiceTest.java]] - `contains` [EXTRACTED]
- [[Profile]] - `references` [EXTRACTED]
- [[org.junit.jupiter.api.extension.ExtendWith]] - `references` [EXTRACTED]
- [[org.mockito.junit.jupiter.MockitoExtension]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/orgjunitjupiterapiTest