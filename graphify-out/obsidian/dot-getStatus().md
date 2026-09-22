---
source_file: "backend/src/main/java/com/dermacare/backend/entities/Appointment.java"
type: "code"
community: "org.junit.jupiter.api.Test"
location: "L77"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/orgjunitjupiterapiTest
---

# .getStatus()

## Connections
- [[dot-cancelAppointment_Success_SetsCancelled()]] - `calls` [INFERRED]
- [[dot-createAppointment()]] - `calls` [INFERRED]
- [[dot-createAppointment_NullStatus_SetsAvailableDefaultAndSaves()]] - `calls` [INFERRED]
- [[dot-createAppointment_Success_ReturnsSavedAppointment()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference()]] - `calls` [INFERRED]
- [[dot-updateStatus()]] - `calls` [INFERRED]
- [[dot-updateStatus_CancelledAppointmentToCancelled_IdempotentSuccess()]] - `calls` [INFERRED]
- [[dot-updateStatus_Success_UpdatesAndSaves()]] - `calls` [INFERRED]
- [[Appointment]] - `method` [EXTRACTED]
- [[AppointmentStatus]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/orgjunitjupiterapiTest