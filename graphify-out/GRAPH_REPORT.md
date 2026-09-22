# Graph Report - TP  (2026-09-22)

## Corpus Check
- 79 files · ~139,412 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 4, .properties 1, .cmd 1)

## Summary
- 594 nodes · 1345 edges · 20 communities (15 shown, 3 thin omitted)
- Extraction: 77% EXTRACTED · 23% INFERRED · 0% AMBIGUOUS · INFERRED: 306 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `d861ec33`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Patient
- org.junit.jupiter.api.Test
- App.jsx
- JwtService
- package.json
- PaymentPreferenceResponse
- PatientControllerTest
- Consultation
- org.springframework.http.ResponseEntity
- RPD-001: Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend
- ServiceEntity
- stryker.config.json
- mvnw
- Project: Testing Suite Implementation — Sistema de Gestión Dermatológica
- Modelo de Clases — DermaCare Backend
- BackendApplication
- vercel.json
- com.dermacare:backend

## God Nodes (most connected - your core abstractions)
1. `Patient` - 75 edges
2. `Appointment` - 58 edges
3. `react` - 35 edges
4. `PatientServiceTest` - 31 edges
5. `Consultation` - 29 edges
6. `AppointmentServiceTest` - 29 edges
7. `react-router-dom` - 28 edges
8. `Profile` - 25 edges
9. `ServiceEntity` - 21 edges
10. `PaymentPreferenceResponse` - 19 edges

## Surprising Connections (you probably didn't know these)
- `AppointmentController` --references--> `AppointmentService`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/controllers/AppointmentController.java → backend/src/main/java/com/dermacare/backend/services/AppointmentService.java
- `Appointment` --references--> `AppointmentStatus`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/entities/Appointment.java → backend/src/main/java/com/dermacare/backend/entities/AppointmentStatus.java
- `Appointment` --references--> `Patient`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/entities/Appointment.java → backend/src/main/java/com/dermacare/backend/entities/Patient.java
- `Appointment` --references--> `ServiceEntity`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/entities/Appointment.java → backend/src/main/java/com/dermacare/backend/entities/ServiceEntity.java
- `Consultation` --references--> `Appointment`  [EXTRACTED]
  backend/src/main/java/com/dermacare/backend/entities/Consultation.java → backend/src/main/java/com/dermacare/backend/entities/Appointment.java

## Import Cycles
- None detected.

## Communities (20 total, 3 thin omitted)

### Community 0 - "Patient"
Cohesion: 0.06
Nodes (16): GetMapping, PostMapping, RequestMapping, RestController, PatientController, Entity, PrePersist, PreUpdate (+8 more)

### Community 1 - "org.junit.jupiter.api.Test"
Cohesion: 0.07
Nodes (12): GetMapping, Appointment, Entity, PrePersist, PreUpdate, Table, Entity, PrePersist (+4 more)

### Community 2 - "App.jsx"
Cohesion: 0.09
Nodes (28): App(), Layout(), PaymentModal(), CatalogoServicios(), ClinicalClarity(), ConfiguracionCatalogo(), DashboardDermacare(), DashboardNegocio() (+20 more)

### Community 3 - "JwtService"
Cohesion: 0.07
Nodes (22): AuthController, RequestMapping, RestController, JwtAuthenticationFilter, JwtService, SecurityConfig, JwtAuthenticationFilterTest, JwtServiceTest (+14 more)

### Community 4 - "package.json"
Cohesion: 0.04
Nodes (45): dependencies, lucide-react, qrcode.react, react, react-dom, react-router-dom, devDependencies, autoprefixer (+37 more)

### Community 5 - "PaymentPreferenceResponse"
Cohesion: 0.08
Nodes (12): PaymentPreferenceResponse, AppointmentRepository, AppointmentService, MercadoPagoService, PreferenceResult, AppointmentPaymentTest, org.slf4j.Logger, org.springframework.data.jpa.repository.JpaRepository (+4 more)

### Community 6 - "PatientControllerTest"
Cohesion: 0.08
Nodes (20): AppointmentStatus, AVAILABLE, CANCELLED, COMPLETED, CONFIRMED, PENDING_PAYMENT, UserRole, ADMIN_SECRETARIA (+12 more)

### Community 7 - "Consultation"
Cohesion: 0.07
Nodes (4): Consultation, Entity, PrePersist, Table

### Community 8 - "org.springframework.http.ResponseEntity"
Cohesion: 0.10
Nodes (11): AppointmentController, PostMapping, RequestMapping, RestController, PostMapping, GlobalExceptionHandler, CreatePaymentPreferenceRequest, org.springframework.http.ResponseEntity (+3 more)

### Community 9 - "RPD-001: Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend"
Cohesion: 0.08
Nodes (24): 1.1 Diagnóstico de la Situación Previa, 1.2 Riesgos e Impactos Negativos del Acoplamiento Directo (Controller $\to$ Repository), 1. Contexto del Problema y Diagnóstico Inicial, 2.1 Desglose de Responsabilidades por Capa, 2. Decisión Arquitectónica: Arquitectura en Capas (Layered Architecture), 3.1 Tabla Comparativa, 3.2 ¿Por qué Spring Data JPA Preserva y Fortalece los Principios de Arquitectura Limpia?, 3. Comparativa Crítica y Justificación: Spring Data JPA (Repository Pattern) vs DAO Tradicional (`IClienteDao` / `ClienteDaoImpl`) (+16 more)

### Community 10 - "ServiceEntity"
Cohesion: 0.09
Nodes (4): Entity, PrePersist, Table, ServiceEntity

### Community 11 - "stryker.config.json"
Cohesion: 0.12
Nodes (16): cleanTempDir, concurrency, coverageAnalysis, mutate, reporters, $schema, tempDirName, testRunner (+8 more)

### Community 12 - "mvnw"
Cohesion: 0.38
Nodes (8): mvnw script, clean(), die(), exec_maven(), hash_string(), set_java_home(), trim(), verbose()

### Community 13 - "Project: Testing Suite Implementation — Sistema de Gestión Dermatológica"
Cohesion: 0.20
Nodes (9): Architecture, Backend (`backend/`), Backend ↔ Frontend REST API Contract, Code Layout, Feature Inventory, Frontend (`frontend/`), Interface Contracts, Milestones (+1 more)

### Community 14 - "Modelo de Clases — DermaCare Backend"
Cohesion: 0.40
Nodes (4): Diagrama de Clases, Estructura de paquetes, Modelo de Clases — DermaCare Backend, Relaciones entre entidades

## Knowledge Gaps
- **87 isolated node(s):** `com.dermacare:backend`, `AVAILABLE`, `PENDING_PAYMENT`, `CONFIRMED`, `CANCELLED` (+82 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 194 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Appointment` connect `org.junit.jupiter.api.Test` to `Patient`, `PaymentPreferenceResponse`, `PatientControllerTest`, `Consultation`, `org.springframework.http.ResponseEntity`, `ServiceEntity`?**
  _High betweenness centrality (0.191) - this node is a cross-community bridge._
- **Why does `Patient` connect `Patient` to `org.junit.jupiter.api.Test`, `PaymentPreferenceResponse`, `PatientControllerTest`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **Why does `Consultation` connect `Consultation` to `org.junit.jupiter.api.Test`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Are the 6 inferred relationships involving `Patient` (e.g. with `.createPatient_Authenticated_SavesAndReturnsCreatedPatient()` and `.createPatient_InvalidData_Returns400BadRequest()`) actually correct?**
  _`Patient` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 4 inferred relationships involving `Appointment` (e.g. with `.createAppointment_Authenticated_ReturnsCreatedAppointment()` and `.getAllAppointments_Authenticated_ReturnsAppointmentsList()`) actually correct?**
  _`Appointment` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `com.dermacare:backend`, `AVAILABLE`, `PENDING_PAYMENT` to the rest of the system?**
  _87 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Patient` be split into smaller, more focused modules?**
  _Cohesion score 0.05629974762182101 - nodes in this community are weakly interconnected._