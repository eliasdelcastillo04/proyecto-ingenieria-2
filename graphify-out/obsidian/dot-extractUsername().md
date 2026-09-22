---
source_file: "backend/src/main/java/com/dermacare/backend/security/JwtService.java"
type: "code"
community: "JwtService"
location: "L23"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/JwtService
---

# .extractUsername()

## Connections
- [[dot-doFilterInternal()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_ExistingAuthentication_DoesNotOverride()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_JwtException_CatchesExceptionAndProceeds()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_NullUserIdExtracted_DoesNotSetSecurityContext()]] - `calls` [INFERRED]
- [[dot-doFilterInternal_ValidBearerToken_SetsSecurityContextAndProceeds()]] - `calls` [INFERRED]
- [[dot-extractClaim()]] - `calls` [EXTRACTED]
- [[dot-extractUsername_ValidToken_ReturnsUsername()]] - `calls` [INFERRED]
- [[dot-isTokenValid()]] - `calls` [EXTRACTED]
- [[JwtService]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/JwtService