---
source_file: "backend/src/main/java/com/dermacare/backend/services/AppointmentService.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L41"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/orgjunitjupiterapiTest
---

# .createAppointment()

## Connections
- [[dot-createAppointment()_1]] - `calls` [INFERRED]
- [[dot-createAppointment_Authenticated_ReturnsCreatedAppointment()]] - `calls` [INFERRED]
- [[dot-createAppointment_InvalidTimeRangeFormat_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullAppointment_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullDoctor_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullOrBlankTimeRange_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullStatus_SetsAvailableDefaultAndSaves()]] - `calls` [INFERRED]
- [[dot-createAppointment_Success_ReturnsSavedAppointment()]] - `calls` [INFERRED]
- [[dot-createAppointment_ValidParenthesisTimeRange_Success()]] - `calls` [INFERRED]
- [[dot-hasCollision()]] - `calls` [EXTRACTED]
- [[Appointment]] - `references` [EXTRACTED]
- [[AppointmentService]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/orgjunitjupiterapiTest