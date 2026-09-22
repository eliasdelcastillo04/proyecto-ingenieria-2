---
type: community
members: 25
---

# RPD-001: Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend

**Members:** 25 nodes

## Members
- [[1. Contexto del Problema y Diagnóstico Inicial]] - document - RPD.md
- [[1.1 Diagnóstico de la Situación Previa]] - document - RPD.md
- [[1.2 Riesgos e Impactos Negativos del Acoplamiento Directo (Controller $to$ Repository)]] - document - RPD.md
- [[2. Decisión Arquitectónica Arquitectura en Capas (Layered Architecture)]] - document - RPD.md
- [[2.1 Desglose de Responsabilidades por Capa]] - document - RPD.md
- [[3. Comparativa Crítica y Justificación Spring Data JPA (Repository Pattern) vs DAO Tradicional (`IClienteDao`  `ClienteDaoImpl`)]] - document - RPD.md
- [[3.1 Tabla Comparativa]] - document - RPD.md
- [[3.2 ¿Por qué Spring Data JPA Preserva y Fortalece los Principios de Arquitectura Limpia]] - document - RPD.md
- [[4. Gestión del Ciclo de Vida Patrón Singleton e Inversión de Control (IoC) con Spring Boot]] - document - RPD.md
- [[4.1 Contenedor IoC y Ciclo de Vida Singleton]] - document - RPD.md
- [[4.2 Anotaciones Estereotipo Utilizadas]] - document - RPD.md
- [[4.3 Inyección de Dependencias por Constructor]] - document - RPD.md
- [[5. Impacto en Testabilidad, Separación de Responsabilidades y Mantenibilidad]] - document - RPD.md
- [[5.1 Testabilidad Aislada (Pirámide de Pruebas Efectiva)]] - document - RPD.md
- [[5.2 Separación de Responsabilidades (Separation of Concerns - SoC)]] - document - RPD.md
- [[5.3 Mantenibilidad y Preparación para Nuevos Requerimientos]] - document - RPD.md
- [[5.4 Manejo Global de Excepciones de Dominio (`GlobalExceptionHandler`)]] - document - RPD.md
- [[5.5 Invariantes de Dominio y Validación Pre-Persistencia]] - document - RPD.md
- [[6. Matriz de Componentes y Trazabilidad de la Implementación]] - document - RPD.md
- [[7. Conclusión]] - document - RPD.md
- [[A. Capa de Presentación (`com.dermacare.backend.controllers`)]] - document - RPD.md
- [[B. Capa de Lógica de Negocio  Servicios (`com.dermacare.backend.services`)]] - document - RPD.md
- [[C. Capa de Persistencia  Acceso a Datos (`com.dermacare.backend.repositories`)]] - document - RPD.md
- [[RPD-001 Adopción e Implementación de Arquitectura en Capas, Patrón Repository con Spring Data JPA y Gestión de Ciclo de Vida Singleton en DermaCare Backend]] - document - RPD.md
- [[RPD]] - document - RPD.md

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/RPD-001_Adopción_e_Implementación_de_Arquitectura_en_Capas_Patrón_Repository_con_Spring_Data_JPA_y_Gestión_de_Ciclo_de_Vida_Singleton_en_DermaCare_Backend
SORT file.name ASC
```
