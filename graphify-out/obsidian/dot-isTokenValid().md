---
source_file: "backend/src/main/java/com/dermacare/backend/security/JwtService.java"
type: "code"
community: "JwtService"
location: "L32"
tags:
  - graphify/code
  - graphify/INFERRED
  - community/JwtService
---

# .isTokenValid()

## Connections
- [[dot-extractUsername()]] - `calls` [EXTRACTED]
- [[dot-isTokenExpired()]] - `calls` [EXTRACTED]
- [[dot-isTokenValid_ExpiredToken_ThrowsExpiredJwtException()]] - `calls` [INFERRED]
- [[dot-isTokenValid_InvalidSignature_ThrowsSignatureException()]] - `calls` [INFERRED]
- [[dot-isTokenValid_MalformedToken_ThrowsMalformedJwtException()]] - `calls` [INFERRED]
- [[dot-isTokenValid_ValidTokenAndDifferentUsername_ReturnsFalse()]] - `calls` [INFERRED]
- [[dot-isTokenValid_ValidTokenAndMatchingUsername_ReturnsTrue()]] - `calls` [INFERRED]
- [[JwtService]] - `method` [EXTRACTED]

#graphify/code #graphify/INFERRED #community/JwtService