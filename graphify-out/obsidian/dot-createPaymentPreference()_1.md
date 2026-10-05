---
source_file: "backend/src/main/java/com/dermacare/backend/services/AppointmentService.java"
type: "code"
community: "MercadoPagoService"
location: "L103"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/MercadoPagoService
---

# .createPaymentPreference()

## Connections
- [[dot-createPaymentPreference()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAmountIsZeroOrNegative()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentAlreadyConfirmed()]] - `calls` [INFERRED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentNotFound()]] - `calls` [INFERRED]
- [[dot-createPreference()]] - `calls` [INFERRED]
- [[dot-getPaymentUrl()_1]] - `calls` [INFERRED]
- [[dot-getPreferenceId()_1]] - `calls` [INFERRED]
- [[AppointmentService]] - `method` [EXTRACTED]
- [[PaymentPreferenceResponse_2]] - `calls` [EXTRACTED]
- [[PaymentPreferenceResponse_1]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/MercadoPagoService