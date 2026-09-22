---
source_file: "backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java"
type: "code"
community: "JwtService"
location: "L24"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/JwtService
---

# JwtAuthenticationFilterTest

## Connections
- [[dot-doFilterInternal_BearerPrefixWrongCase_ProceedsWithoutAuthentication()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_ExistingAuthentication_DoesNotOverride()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_JwtException_CatchesExceptionAndProceeds()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_NonBearerAuthorizationHeader_ProceedsWithoutAuthentication()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_NullAuthorizationHeader_ProceedsWithoutAuthentication()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_NullUserIdExtracted_DoesNotSetSecurityContext()]] - `method` [EXTRACTED]
- [[dot-doFilterInternal_ValidBearerToken_SetsSecurityContextAndProceeds()]] - `method` [EXTRACTED]
- [[dot-setUp()_5]] - `method` [EXTRACTED]
- [[dot-tearDown()]] - `method` [EXTRACTED]
- [[JwtAuthenticationFilter]] - `references` [EXTRACTED]
- [[JwtAuthenticationFilterTest.java]] - `contains` [EXTRACTED]
- [[JwtService]] - `references` [EXTRACTED]
- [[jakarta.servlet.FilterChain]] - `references` [EXTRACTED]
- [[jakarta.servlet.http.HttpServletRequest]] - `references` [EXTRACTED]
- [[jakarta.servlet.http.HttpServletResponse]] - `references` [EXTRACTED]
- [[org.junit.jupiter.api.extension.ExtendWith]] - `references` [EXTRACTED]
- [[org.mockito.junit.jupiter.MockitoExtension]] - `references` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/JwtService