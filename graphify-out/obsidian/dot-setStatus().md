---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Appointment.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L78"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/orgjunitjupiterapiTest
---

# .setStatus()

## Connections
- [[dot-cancelAppointment_CompletedAppointment_ThrowsIllegalStateException()]] - `calls` [INFERRED]
- [[dot-createAppointment()]] - `calls` [INFERRED]
- [[dot-createAppointment_Authenticated_ReturnsCreatedAppointment()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullStatus_SetsAvailableDefaultAndSaves()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentAlreadyConfirmed()]] - `calls` [INFERRED]
- [[dot-getAllAppointments_Authenticated_ReturnsAppointmentsList()]] - `calls` [INFERRED]
- [[dot-getAllAppointments_ReturnsAppointmentsList()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_Found_Returns200()]] - `calls` [INFERRED]
- [[dot-setUp()_1]] - `calls` [INFERRED]
- [[dot-setUp()_2]] - `calls` [INFERRED]
- [[dot-updateStatus()]] - `calls` [INFERRED]
- [[dot-updateStatus_Authenticated_ReturnsUpdatedAppointment()]] - `calls` [INFERRED]
- [[dot-updateStatus_CancelledAppointmentToActive_ThrowsIllegalStateException()]] - `calls` [INFERRED]
- [[dot-updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess()]] - `calls` [INFERRED]
- [[dot-updateStatus_CompletedAppointment_ThrowsIllegalStateException()]] - `calls` [INFERRED]
- [[Appointment]] - `method` [EXTRACTED]
- [[AppointmentStatus]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/orgjunitjupiterapiTest