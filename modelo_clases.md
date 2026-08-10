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

    class PatientController {
        <<RestController>>
        -PatientRepository patientRepository
        +getAllPatients() List
        +createPatient(patient) Patient
    }

    class AppointmentController {
        <<RestController>>
        -AppointmentRepository appointmentRepository
        +getAllAppointments() List
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

    %% Controladores
    PatientController --> PatientRepository : usa
    AppointmentController --> AppointmentRepository : usa
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
│   ├── PatientController       GET /api/patients · POST /api/patients
│   └── AppointmentController   GET /api/appointments
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
