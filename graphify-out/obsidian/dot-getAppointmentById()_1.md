---
source_file: "backend/src/main/java/com/dermacare/backend/services/AppointmentService.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L36"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/orgjunitjupiterapiTest
---

# .getAppointmentById()

## Connections
- [[dot-getAppointmentById()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_Found_Returns200()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_NotFound_Returns404()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_NullId_ThrowsIllegalArgumentException()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_WhenExists_ReturnsOptionalWithAppointment()]] - `calls` [INFERRED]
- [[dot-getAppointmentById_WhenNotFound_ReturnsEmptyOptional()]] - `calls` [INFERRED]
- [[Appointment]] - `references` [EXTRACTED]
- [[AppointmentService]] - `method` [EXTRACTED]
- [[org.springframework.transaction.annotation.Transactional]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/orgjunitjupiterapiTest