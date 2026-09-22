---
source_file: "backend/src/test/java/com/dermacare/backend/services/AppointmentPaymentTest.java"
type: "code"
community: "PaymentPreferenceResponse"
location: "L55"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/PaymentPreferenceResponse
---

# .createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference()

## Connections
- [[dot-createPaymentPreference()]] - `calls` [INFERRED]
- [[dot-createPreference()]] - `calls` [INFERRED]
- [[dot-getAppointmentId()]] - `calls` [INFERRED]
- [[dot-getDepositAmount()]] - `calls` [INFERRED]
- [[dot-getLockedUntil()]] - `calls` [INFERRED]
- [[dot-getLockedUntil()_1]] - `calls` [INFERRED]
- [[dot-getMercadoPagoPreferenceId()]] - `calls` [INFERRED]
- [[dot-getPaymentUrl()]] - `calls` [INFERRED]
- [[dot-getPreferenceId()]] - `calls` [INFERRED]
- [[dot-getStatus()]] - `calls` [INFERRED]
- [[AppointmentPaymentTest]] - `method` [EXTRACTED]
- [[org.junit.jupiter.api.Test]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/PaymentPreferenceResponse