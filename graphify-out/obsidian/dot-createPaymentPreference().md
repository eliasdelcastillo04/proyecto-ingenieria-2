---
source_file: "backend/src/main/java/com/dermacare/backend/services/AppointmentService.java"
type: "code"
community: "PaymentPreferenceResponse"
location: "L91"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/PaymentPreferenceResponse
---

# .createPaymentPreference()

## Connections
- [[dot-createPaymentPreference()_1]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAmountIsZeroOrNegative()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentAlreadyConfirmed()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentNotFound()]] - `calls` [INFERRED]
- [[dot-createPreference()]] - `calls` [INFERRED]
- [[dot-getPaymentUrl()_1]] - `calls` [INFERRED]
- [[dot-getPreferenceId()_1]] - `calls` [INFERRED]
- [[dot-getStatus()]] - `calls` [INFERRED]
- [[dot-setLockedUntil()_1]] - `calls` [INFERRED]
- [[dot-setMercadoPagoPreferenceId()]] - `calls` [INFERRED]
- [[dot-setStatus()]] - `calls` [INFERRED]
- [[AppointmentService]] - `method` [EXTRACTED]
- [[PaymentPreferenceResponse]] - `calls` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/PaymentPreferenceResponse