# Modelo de Clases — DermaCare Backend

Sistema de Gestión Dermatológica · Spring Boot 4.1.0 · Java 17

---

## Diagrama de Clases

```mermaid
classDiagram
    direction TB

    class UserRole {
        <<enumeration>>
        ADMIN_SECRETARIA
        MEDICA_PRESTADORA
    }

    class AppointmentStatus {
        <<enumeration>>
        AVAILABLE
        PENDING_PAYMENT
        CONFIRMED
        CANCELLED
        COMPLETED
    }

    class Profile {
        <<Entity>>
        +UUID id
        +UserRole role
        +String firstName
        +String lastName
        +LocalDateTime createdAt
        +getId() UUID
        +getRole() UserRole
        +getFirstName() String
        +getLastName() String
    }

    class Patient {
        <<Entity>>
        +Long id
        +String firstName
        +String lastName
        +String dni
        +Integer age
        +String profession
        +String contactPhone
        +String contactEmail
        +String pathologicalHistory
        +String allergies
        +String toxicHabits
        +String sunExposure
        +String spfUse
        +String surgicalHistory
        +String gynecologicalHistory
        +String habitualMedication
        +LocalDateTime createdAt
        +LocalDateTime updatedAt
        +getId() Long
        +getDni() String
    }

    class ServiceEntity {
        <<Entity>>
        +Long id
        +String name
        +String description
        +Integer durationMinutes
        +BigDecimal price
        +Boolean isActive
        +LocalDateTime createdAt
        +getId() Long
        +getName() String
        +getPrice() BigDecimal
    }

    class Appointment {
        <<Entity>>
        +Long id
        +Profile doctor
        +Patient patient
        +ServiceEntity service
        +String timeRange
        +AppointmentStatus status
        +ZonedDateTime lockedUntil
        +String mercadoPagoPreferenceId
        +String mercadoPagoPaymentId
        +LocalDateTime createdAt
        +LocalDateTime updatedAt
        +getId() Long
        +getStatus() AppointmentStatus
    }

    class Consultation {
        <<Entity>>
        +Long id
        +Appointment appointment
        +String reasonForVisit
        +String fitzpatrickPhototype
        +String facialExam
        +String bodyExam
        +String procedurePerformed
        +String materialsUsed
        +String complicationsObserved
        +Integer patientSatisfactionLevel
        +String notes
        +LocalDateTime createdAt
        +getId() Long
    }

    class PatientRepository {
        <<interface>>
        +findAll() List
        +findById(id) Optional
        +findByDni(dni) Optional
        +existsByDni(dni) boolean
        +save(patient) Patient
        +delete(patient) void
    }

    class AppointmentRepository {
        <<interface>>
        +findAll() List
        +findById(id) Optional
        +save(appointment) Appointment
        +delete(appointment) void
    }

    class JwtService {
        <<Service>>
        -String secretKey
        -long jwtExpiration
        +extractUsername(token) String
        +extractClaim(token, resolver) Object
        +isTokenValid(token, username) boolean
        -isTokenExpired(token) boolean
        -extractAllClaims(token) Claims
        -getSignInKey() SecretKey
    }

    class JwtAuthenticationFilter {
        <<Component>>
        -JwtService jwtService
        +doFilterInternal(req, res, chain) void
    }

    class SecurityConfig {
        <<Configuration>>
        -JwtAuthenticationFilter jwtAuthFilter
        +securityFilterChain(http) SecurityFilterChain
    }

    class AuthController {
        <<RestController>>
        -JwtService jwtService
        +login(credentials) ResponseEntity
    }

    class PatientService {
        <<Service>>
        -PatientRepository patientRepository
        +getAllPatients() List
        +getPatientById(id) Optional
        +createPatient(patient) Patient
        +updatePatient(id, updatedData) Patient
        +deletePatient(id) void
    }

    class AppointmentService {
        <<Service>>
        -AppointmentRepository appointmentRepository
        +getAllAppointments() List
        +getAppointmentById(id) Optional
        +createAppointment(appointment) Appointment
        +updateStatus(id, newStatus) Appointment
        +cancelAppointment(id) void
    }

    class PatientController {
        <<RestController>>
        -PatientService patientService
        +getAllPatients() List
        +getPatientById(id) ResponseEntity
        +createPatient(patient) Patient
        +updatePatient(id, patient) ResponseEntity
        +deletePatient(id) ResponseEntity
    }

    class AppointmentController {
        <<RestController>>
        -AppointmentService appointmentService
        +getAllAppointments() List
        +getAppointmentById(id) ResponseEntity
        +createAppointment(appointment) Appointment
        +updateStatus(id, status) ResponseEntity
        +cancelAppointment(id) ResponseEntity
    }

    class GlobalExceptionHandler {
        <<RestControllerAdvice>>
        +handleIllegalArgument(ex) ResponseEntity
        +handleIllegalState(ex) ResponseEntity
    }

    %% Relaciones entre entidades
    Appointment --> Profile : doctor
    Appointment --> Patient : patient
    Appointment --> ServiceEntity : service
    Consultation --> Appointment : appointment
    Profile --> UserRole : role
    Appointment --> AppointmentStatus : status

    %% Repositorios
    PatientRepository --> Patient : gestiona
    AppointmentRepository --> Appointment : gestiona

    %% Servicios
    PatientService --> PatientRepository : usa
    AppointmentService --> AppointmentRepository : usa

    %% Controladores
    PatientController --> PatientService : usa
    AppointmentController --> AppointmentService : usa
    AuthController --> JwtService : usa

    %% Seguridad
    JwtAuthenticationFilter --> JwtService : usa
    SecurityConfig --> JwtAuthenticationFilter : registra
```

---

## Relaciones entre entidades

| Desde | Tipo | Hasta | Columna FK | Nulable |
|-------|------|-------|------------|---------|
| `Appointment` | `@ManyToOne` | `Profile` | `doctor_id` | No |
| `Appointment` | `@ManyToOne` | `Patient` | `patient_id` | Sí |
| `Appointment` | `@ManyToOne` | `ServiceEntity` | `service_id` | Sí |
| `Consultation` | `@OneToOne` | `Appointment` | `appointment_id` | No |

---

## Estructura de paquetes

```
com.dermacare.backend
├── controllers/
│   ├── AuthController          POST /api/auth/login
│   ├── PatientController       GET /api/patients · POST /api/patients · GET/PUT/DELETE /api/patients/{id}
│   ├── AppointmentController   GET /api/appointments · GET/POST /api/appointments/{id} · PATCH status · POST cancel
│   └── GlobalExceptionHandler  @RestControllerAdvice (400 Bad Request / 409 Conflict)
├── services/
│   ├── PatientService          lógica de negocio y validación de pacientes
│   └── AppointmentService      lógica de negocio y estados de turnos
├── entities/
│   ├── Patient                 tabla: patients
│   ├── Appointment             tabla: appointments
│   ├── Consultation            tabla: consultations
│   ├── Profile                 tabla: profiles
│   ├── ServiceEntity           tabla: services
│   ├── AppointmentStatus       enum
│   └── UserRole                enum
├── repositories/
│   ├── PatientRepository       JpaRepository<Patient, Long>
│   └── AppointmentRepository   JpaRepository<Appointment, Long>
└── security/
    ├── JwtService              manejo de tokens JWT
    ├── JwtAuthenticationFilter filtro HTTP (OncePerRequestFilter)
    └── SecurityConfig          cadena de seguridad Spring
```

> **Deuda técnica:** `Consultation` y `ServiceEntity` tienen entidad JPA pero no tienen controlador ni repositorio propio todavía.
