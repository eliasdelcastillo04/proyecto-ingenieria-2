---
source_file: "backend/src/main/java/com/dermacare/backend/security/JwtAuthenticationFilter.java"
type: "code"
community: "JwtService"
location: "L26"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/JwtService
---

# .doFilterInternal()

## Connections
- [[dot-doFilterInternal_BearerPrefixWrongCase_ProceedsWithoutAuthentication()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_ExistingAuthentication_DoesNotOverride()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_JwtException_CatchesExceptionAndProceeds()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_NonBearerAuthorizationHeader_ProceedsWithoutAuthentication()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_NullAuthorizationHeader_ProceedsWithoutAuthentication()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_NullUserIdExtracted_DoesNotSetSecurityContext()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_ValidBearerToken_SetsSecurityContextAndProceeds()]] - `calls` [INFERRED]
- [[dot-extractUsername()]] - `calls` [INFERRED]
- [[JwtAuthenticationFilter]] - `method` [EXTRACTED]
- [[Override]] - `references` [EXTRACTED]
- [[jakarta.servlet.FilterChain]] - `references` [EXTRACTED]
- [[jakarta.servlet.http.HttpServletRequest]] - `references` [EXTRACTED]
- [[jakarta.servlet.http.HttpServletResponse]] - `references` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/JwtService