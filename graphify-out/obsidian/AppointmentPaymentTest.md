---
source_file: "backend/src/test/java/com/dermacare/backend/services/AppointmentPaymentTest.java"
type: "code"
community: "PaymentPreferenceResponse"
location: "L26"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/PaymentPreferenceResponse
---

# AppointmentPaymentTest

## Connections
- [[dot-createPaymentPreference_Success_LocksAppointmentFor10MinutesAndSavesPreference()]] - `method` [EXTRACTED]
- [[dot-createPaymentPreference_ThrowsException_WhenAmountIsZeroOrNegative()]] - `method` [EXTRACTED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentAlreadyConfirmed()]] - `method` [EXTRACTED]
- [[dot-createPaymentPreference_ThrowsException_WhenAppointmentNotFound()]] - `method` [EXTRACTED]
- [[dot-setUp()_1]] - `method` [EXTRACTED]
- [[Appointment]] - `references` [EXTRACTED]
- [[AppointmentPaymentTest.java]] - `contains` [EXTRACTED]
- [[AppointmentRepository]] - `references` [EXTRACTED]
- [[AppointmentService]] - `references` [EXTRACTED]
- [[MercadoPagoService]] - `references` [EXTRACTED]
- [[org.junit.jupiter.api.extension.ExtendWith]] - `references` [EXTRACTED]
- [[org.mockito.junit.jupiter.MockitoExtension]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/PaymentPreferenceResponse