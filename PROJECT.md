# Project: Testing Suite Implementation — Sistema de Gestión Dermatológica

## Architecture
- **Backend**: Spring Boot 4.1.0, Java 17, Spring Data JPA, Spring Security, JJWT 0.12.3. Test runner: JUnit 5, Mockito, MockMvc, H2 DB. Mutation testing runner: PITest (`pitest-maven` plugin 1.15.3 with `pitest-junit5-plugin` 1.2.1).
- **Frontend**: React 18, Vite 5, Tailwind CSS, React Router DOM 6. Test runner: Vitest, React Testing Library, jsdom. Mutation testing runner: StrykerJS (`@stryker-mutator/core`, `@stryker-mutator/vitest-runner`).

## Feature Inventory
Every feature required by the project is assigned to a milestone below:
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Backend Test Infra & Config | Setup `pom.xml` with H2 DB, JUnit 5, Surefire 3.1.2, PITest plugin 1.15.3 | M1 | survey |
| 2 | Backend Unit & Integration Tests | Unit and Integration tests for `JwtService`, `JwtAuthenticationFilter`, `AuthController`, `PatientController`, `AppointmentController` | M1 | survey |
| 3 | Backend Mutation Testing (>=70%) | Execute PITest, analyze mutation report, refine unit tests until >=70% mutation score is achieved | M1 | survey |
| 4 | Frontend Test Infra & Config | Setup `package.json` devDependencies (Vitest, RTL, jsdom, Stryker), `vite.config.js`, `stryker.config.json` | M2 | survey |
| 5 | Frontend Unit & Integration Tests | Unit & integration component tests for `Layout`, `App`, Auth (`InicioSesion`, `RecuperacionContrasena`), Patient (`RegistroPaciente`, `PerfilPaciente`, `DirectorioPacientes`), Appointments (`MatrizVisualAgenda`, `EdicionTurno`) | M2 | survey |
| 6 | Frontend Mutation Testing (>=70%) | Execute StrykerJS, analyze report, refine tests until >=70% mutation score is achieved | M2 | survey |
| 7 | Dual-Track E2E & Forensic Audit | Run full test suites & mutation commands for both stacks, conduct forensic audit verification | M3 | survey |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | Backend Test Suite & Mutation Testing | Configure PITest & H2, implement unit/integration tests for Auth/Patient/Appointment, achieve >=70% PITest score | none | IN_PROGRESS |
| 2 | Frontend Test Suite & Mutation Testing | Configure Vitest & StrykerJS, implement unit/integration tests for key React components & routes, achieve >=70% Stryker score | none | IN_PROGRESS |
| 3 | Dual-Track E2E Verification & Forensic Audit | Verify all backend & frontend tests pass, run full mutation reports, perform forensic audit | M1, M2 | PLANNED |

## Interface Contracts
### Backend ↔ Frontend REST API Contract
- `POST /api/auth/login`: `{ email, password }` -> returns `{ token }` (JWT with `role` claim)
- `GET /api/patients`: `Authorization: Bearer <token>` -> returns list of `Patient` objects
- `POST /api/patients`: `Authorization: Bearer <token>` -> accepts `Patient` JSON body, returns created `Patient`
- `GET /api/appointments`: `Authorization: Bearer <token>` -> returns list of `Appointment` objects

## Code Layout
### Backend (`backend/`)
- `src/main/java/com/dermacare/backend/`: Application source code (`controllers/`, `entities/`, `repositories/`, `security/`, `services/`)
- `src/test/java/com/dermacare/backend/`: Test classes (`security/JwtServiceTest.java`, `security/JwtAuthenticationFilterTest.java`, `controllers/AuthControllerTest.java`, `controllers/PatientControllerTest.java`, `controllers/AppointmentControllerTest.java`)
- `pom.xml`: Maven build configuration

### Frontend (`frontend/`)
- `src/components/`, `src/pages/`: React components and pages
- `src/__tests__/` or `src/**/*.test.jsx`: Vitest component & page unit/integration tests
- `package.json`, `vite.config.js`, `stryker.config.json`: Build & test configurations
