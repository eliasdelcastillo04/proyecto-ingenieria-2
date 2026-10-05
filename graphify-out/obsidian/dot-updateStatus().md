---
source_file: "backend/src/main/java/com/dermacare/backend/services/AppointmentService.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L78"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/orgjunitjupiterapiTest
---

# .updateStatus()

## Connections
- [[dot-cancelAppointment()]] - `calls` [EXTRACTED]
- [[dot-updateStatus()_1]] - `calls` [INFERRED]
- [[dot-updateStatus_Authenticated_ReturnsUpdatedAppointment()]] - `calls` [INFERRED]
- [[dot-updateStatus_CancelledAppointmentToActive_ThrowsIllegalStateException()]] - `calls` [INFERRED]
- [[dot-updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess()]] - `calls` [INFERRED]
- [[dot-updateStatus_CompletedAppointment_ThrowsIllegalStateException()]] - `calls` [INFERRED]
- [[dot-updateStatus_IllegalStateException_Returns409Conflict()]] - `calls` [INFERRED]
- [[dot-updateStatus_NotFound_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updateStatus_NullId_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updateStatus_NullStatus_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-updateStatus_Success_UpdatesAndSaves()]] - `calls` [INFERRED]
- [[Appointment]] - `references` [EXTRACTED]
- [[AppointmentService]] - `method` [EXTRACTED]
- [[AppointmentStatus_1]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/orgjunitjupiterapiTest