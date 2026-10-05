# Graph Report - TP  (2026-09-29)

## Corpus Check
- 118 files · ~132,951 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 19 file(s) not represented in the graph (top: (none) 6, .css 6, .otf 2)

## Summary
- 1001 nodes · 2133 edges · 55 communities (45 shown, 8 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 157 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7f7e0909`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Patient
- org.junit.jupiter.api.Test
- Profile
- JwtService
- package.json
- org.springframework.http.ResponseEntity
- CalendarBlock
- Consultation
- AppointmentStatus
- RPD-001: Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend
- ServiceEntity
- .getAllAppointments_Authenticated_ReturnsAppointmentsList
- mvnw
- Project: Testing Suite Implementation — Sistema de Gestión Dermatológica
- Modelo de Clases — DermaCare Backend
- BackendApplication
- vercel.json
- com.dermacare:backend
- Payment
- cn
- Appointment
- api.ts
- CryptoKeyRegistry
- AppointmentDaoImpl
- PaymentService
- PaymentRepository
- CollectBalanceModal.tsx
- UserRole
- org.springframework.stereotype.Repository
- PaymentPreferenceResponse
- AgendaView.tsx
- PatientServiceTest
- MedicalRecordView.tsx
- Button.tsx
- PatientControllerTest
- DashboardLayout.tsx
- compilerOptions
- dependencies
- MercadoPagoService
- PatientService
- GlideSelect.tsx
- AppointmentService
- devDependencies
- AnalyticsController.java
- react
- TreatmentPhotos.tsx
- ErrorBoundary.tsx
- compilerOptions
- scripts
- supabaseClient.ts
- puppeteer
- vite.config.ts
- vite-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `Appointment` - 76 edges
2. `Patient` - 67 edges
3. `react` - 45 edges
4. `cn()` - 45 edges
5. `Payment` - 39 edges
6. `PatientServiceTest` - 31 edges
7. `Profile` - 30 edges
8. `AppointmentServiceTest` - 30 edges
9. `Consultation` - 29 edges
10. `lucide-react` - 29 edges

## Surprising Connections (you probably didn't know these)
- `Metric()` --calls--> `cn()`  [EXTRACTED]
  frontend/src/features/agenda/AgendaView.tsx → frontend/src/utils/cn.ts
- `ReadRow()` --calls--> `cn()`  [EXTRACTED]
  frontend/src/features/clinical/AnamnesisForm.tsx → frontend/src/utils/cn.ts
- `AnalyticsController` --references--> `AppointmentService`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/controllers/AnalyticsController.java → backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- `AnalyticsController` --references--> `PaymentService`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/controllers/AnalyticsController.java → backend/src/main/java/com/dermacare/backend/services/PaymentService.java
- `AppointmentController` --references--> `AppointmentService`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/controllers/AppointmentController.java → backend/src/main/java/com/dermacare/backend/services/AppointmentService.java

## Import Cycles
- None detected.

## Communities (55 total, 8 thin omitted)

### Community 0 - "Patient"
Cohesion: 0.05
Nodes (5): Entity, PrePersist, PreUpdate, Table, Patient

### Community 1 - "org.junit.jupiter.api.Test"
Cohesion: 0.13
Nodes (3): AppointmentServiceTest, Appointment, org.junit.jupiter.api.Test

### Community 2 - "Profile"
Cohesion: 0.13
Nodes (4): Entity, PrePersist, Table, Profile

### Community 3 - "JwtService"
Cohesion: 0.07
Nodes (23): AuthController, PostMapping, RequestMapping, RestController, Override, JwtAuthenticationFilter, JwtService, SecurityConfig (+15 more)

### Community 4 - "package.json"
Cohesion: 0.09
Nodes (21): name, private, type, version, autoprefixer, axios, clsx, @hookform/resolvers (+13 more)

### Community 5 - "org.springframework.http.ResponseEntity"
Cohesion: 0.11
Nodes (11): AppointmentController, CashPaymentRequest, GetMapping, PostMapping, RequestMapping, RestController, GlobalExceptionHandler, org.springframework.http.ResponseEntity (+3 more)

### Community 6 - "CalendarBlock"
Cohesion: 0.11
Nodes (4): CalendarBlock, Entity, PrePersist, Table

### Community 7 - "Consultation"
Cohesion: 0.07
Nodes (4): Consultation, Entity, PrePersist, Table

### Community 8 - "AppointmentStatus"
Cohesion: 0.22
Nodes (6): AppointmentStatus, AVAILABLE, CANCELLED, COMPLETED, CONFIRMED, PENDING_PAYMENT

### Community 9 - "RPD-001: Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend"
Cohesion: 0.08
Nodes (24): 1.1 Diagnóstico de la Situación Previa, 1.2 Riesgos e Impactos Negativos del Acoplamiento Directo (Controller $\to$ Repository), 1. Contexto del Problema y Diagnóstico Inicial, 2.1 Desglose de Responsabilidades por Capa, 2. Decisión Arquitectónica: Arquitectura en Capas (Layered Architecture), 3.1 Tabla Comparativa, 3.2 ¿Por qué Spring Data JPA Preserva y Fortalece los Principios de Arquitectura Limpia?, 3. Comparativa Crítica y Justificación: Spring Data JPA (Repository Pattern) vs DAO Tradicional (`IClienteDao` / `ClienteDaoImpl`) (+16 more)

### Community 10 - "ServiceEntity"
Cohesion: 0.08
Nodes (5): Entity, PrePersist, Table, ServiceEntity, com.fasterxml.jackson.annotation.JsonIgnoreProperties

### Community 12 - "mvnw"
Cohesion: 0.38
Nodes (8): mvnw script, clean(), die(), exec_maven(), hash_string(), set_java_home(), trim(), verbose()

### Community 13 - "Project: Testing Suite Implementation — Sistema de Gestión Dermatológica"
Cohesion: 0.20
Nodes (9): Architecture, Backend (`backend/`), Backend ↔ Frontend REST API Contract, Code Layout, Feature Inventory, Frontend (`frontend/`), Interface Contracts, Milestones (+1 more)

### Community 14 - "Modelo de Clases — DermaCare Backend"
Cohesion: 0.40
Nodes (4): Diagrama de Clases, Estructura de paquetes, Modelo de Clases — DermaCare Backend, Relaciones entre entidades

### Community 15 - "BackendApplication"
Cohesion: 0.60
Nodes (3): BackendApplication, org.springframework.boot.autoconfigure.SpringBootApplication, org.springframework.scheduling.annotation.EnableScheduling

### Community 20 - "Payment"
Cohesion: 0.07
Nodes (13): Entity, PrePersist, Table, Payment, PaymentMethod, BANK_TRANSFER, CASH, MERCADO_PAGO (+5 more)

### Community 21 - "cn"
Cohesion: 0.11
Nodes (30): Badge(), BadgeProps, BadgeVariant, variantStyles, Button, Card, CardHeader(), CardProps (+22 more)

### Community 22 - "Appointment"
Cohesion: 0.08
Nodes (6): IAppointmentDao, Appointment, Entity, PrePersist, PreUpdate, Table

### Community 23 - "api.ts"
Cohesion: 0.08
Nodes (39): GeminiChatbotWidget(), ServiceFormModalProps, ars(), BookingWizard(), formatCountdown(), formatDateTime(), Hold, Outcome (+31 more)

### Community 24 - "CryptoKeyRegistry"
Cohesion: 0.21
Nodes (3): CryptoKeyRegistry, Holder, CryptoKeyRegistryTest

### Community 25 - "AppointmentDaoImpl"
Cohesion: 0.33
Nodes (3): AppointmentDaoImpl, Override, jakarta.persistence.EntityManager

### Community 26 - "PaymentService"
Cohesion: 0.27
Nodes (6): PostMapping, RequestMapping, RestController, WebhookController, PaymentService, org.slf4j.Logger

### Community 27 - "PaymentRepository"
Cohesion: 0.21
Nodes (5): PaymentRepository, Appointment, PaymentServiceTest, org.junit.jupiter.api.extension.ExtendWith, org.mockito.junit.jupiter.MockitoExtension

### Community 28 - "CollectBalanceModal.tsx"
Cohesion: 0.47
Nodes (5): ars(), CollectBalanceModal(), CollectBalanceModalProps, METHODS, Appointment

### Community 29 - "UserRole"
Cohesion: 0.40
Nodes (3): UserRole, ADMIN_SECRETARIA, MEDICA_PRESTADORA

### Community 30 - "org.springframework.stereotype.Repository"
Cohesion: 0.36
Nodes (4): CalendarBlockRepository, org.springframework.data.jpa.repository.JpaRepository, org.springframework.data.jpa.repository.Query, org.springframework.stereotype.Repository

### Community 32 - "AgendaView.tsx"
Cohesion: 0.10
Nodes (39): CLINIC, addDays(), AgendaView(), AppointmentDetail(), ApptChip(), ars(), computeRange(), dayKey() (+31 more)

### Community 33 - "PatientServiceTest"
Cohesion: 0.16
Nodes (3): PatientRepository, Patient, PatientServiceTest

### Community 34 - "MedicalRecordView.tsx"
Cohesion: 0.11
Nodes (23): ALERGIAS, AnamnesisForm(), AnamnesisFormProps, FITZ, PATOLOGIAS, ReadRow(), ClinicalNoteModal(), ClinicalNoteModalProps (+15 more)

### Community 35 - "Button.tsx"
Cohesion: 0.33
Nodes (5): ButtonProps, ButtonSize, ButtonVariant, sizeStyles, variantStyles

### Community 36 - "PatientControllerTest"
Cohesion: 0.12
Nodes (9): BackendApplicationTests, AppointmentControllerTest, AuthControllerTest, PatientControllerTest, com.fasterxml.jackson.databind.ObjectMapper, org.junit.jupiter.api.BeforeEach, org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc, org.springframework.boot.test.context.SpringBootTest (+1 more)

### Community 37 - "DashboardLayout.tsx"
Cohesion: 0.19
Nodes (15): BottomNav(), BottomNavProps, ICONS, DashboardLayout(), pathToTab(), roleLanding, tabToPath(), ICONS (+7 more)

### Community 38 - "compilerOptions"
Cohesion: 0.10
Nodes (20): compilerOptions, baseUrl, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+12 more)

### Community 40 - "dependencies"
Cohesion: 0.12
Nodes (17): dependencies, axios, clsx, @hookform/resolvers, lucide-react, motion, ogl, qrcode.react (+9 more)

### Community 41 - "MercadoPagoService"
Cohesion: 0.12
Nodes (7): CreatePaymentPreferenceRequest, PaymentPreferenceResponse, MercadoPagoService, PreferenceResult, AppointmentPaymentTest, org.springframework.web.client.RestTemplate, RestTemplate

### Community 42 - "PatientService"
Cohesion: 0.09
Nodes (8): GetMapping, PostMapping, RequestMapping, RestController, PatientController, PatientService, DeleteMapping, PutMapping

### Community 43 - "GlideSelect.tsx"
Cohesion: 0.05
Nodes (33): Aurora(), AuroraProps, AnimateBy, BlurText(), BlurTextProps, buildKeyframes(), Direction, DEFAULT_OPTIONS (+25 more)

### Community 45 - "AppointmentService"
Cohesion: 0.22
Nodes (7): AppointmentRepository, AppointmentCleanupScheduler, AppointmentService, org.springframework.beans.factory.annotation.Autowired, org.springframework.scheduling.annotation.Scheduled, org.springframework.stereotype.Service, org.springframework.transaction.annotation.Transactional

### Community 46 - "devDependencies"
Cohesion: 0.18
Nodes (11): devDependencies, autoprefixer, postcss, puppeteer, tailwindcss, @types/node, @types/react, @types/react-dom (+3 more)

### Community 47 - "AnalyticsController.java"
Cohesion: 0.29
Nodes (4): AnalyticsController, org.springframework.web.bind.annotation.GetMapping, org.springframework.web.bind.annotation.RequestMapping, org.springframework.web.bind.annotation.RestController

### Community 49 - "react"
Cohesion: 0.16
Nodes (20): App(), PageTransition(), PageTransitionProps, Logo(), BOOKING_MESSAGE, serviceInquiryMessage(), WHATSAPP_NUMBER, whatsappLink() (+12 more)

### Community 50 - "TreatmentPhotos.tsx"
Cohesion: 0.32
Nodes (3): photoStore, TreatmentPhotosProps, ClinicalPhoto

### Community 51 - "ErrorBoundary.tsx"
Cohesion: 0.29
Nodes (3): ErrorBoundary, Props, State

### Community 52 - "compilerOptions"
Cohesion: 0.25
Nodes (7): compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, include

### Community 58 - "scripts"
Cohesion: 0.50
Nodes (4): scripts, build, dev, preview

## Knowledge Gaps
- **188 isolated node(s):** `com.dermacare:backend`, `AVAILABLE`, `PENDING_PAYMENT`, `CONFIRMED`, `CANCELLED` (+183 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 399 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Appointment` connect `Appointment` to `Patient`, `org.junit.jupiter.api.Test`, `Profile`, `PatientControllerTest`, `org.springframework.http.ResponseEntity`, `Consultation`, `AppointmentStatus`, `MercadoPagoService`, `ServiceEntity`, `.getAllAppointments_Authenticated_ReturnsAppointmentsList`, `AppointmentService`, `AnalyticsController.java`, `Payment`, `AppointmentDaoImpl`, `PaymentRepository`, `org.springframework.stereotype.Repository`, `PaymentPreferenceResponse`?**
  _High betweenness centrality (0.129) - this node is a cross-community bridge._
- **Why does `Patient` connect `Patient` to `PatientServiceTest`, `PatientControllerTest`, `PatientService`, `ServiceEntity`, `AppointmentService`, `Appointment`, `org.springframework.stereotype.Repository`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `AgendaView.tsx`, `MedicalRecordView.tsx`, `Button.tsx`, `package.json`, `DashboardLayout.tsx`, `GlideSelect.tsx`, `TreatmentPhotos.tsx`, `ErrorBoundary.tsx`, `cn`, `api.ts`, `CollectBalanceModal.tsx`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `Appointment` (e.g. with `.createAppointment_Authenticated_ReturnsCreatedAppointment()` and `.getAllAppointments_Authenticated_ReturnsAppointmentsList()`) actually correct?**
  _`Appointment` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Patient` (e.g. with `.createPatient_Authenticated_SavesAndReturnsCreatedPatient()` and `.createPatient_InvalidData_Returns400BadRequest()`) actually correct?**
  _`Patient` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `com.dermacare:backend`, `AVAILABLE`, `PENDING_PAYMENT` to the rest of the system?**
  _188 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Patient` be split into smaller, more focused modules?**
  _Cohesion score 0.046511627906976744 - nodes in this community are weakly interconnected._