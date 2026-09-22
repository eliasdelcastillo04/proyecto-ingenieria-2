---
source_file: "backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java"
type: "code"
community: "JwtService"
location: "L33"
tags:
  - graphify/code
  - graphify/EXTRACTED
  - community/JwtService
---

# .createToken()

## Connections
- [[dot-createToken()]] - `calls` [EXTRACTED]
- [[dot-extractClaim_ExpirationClaim_ReturnsExpirationDate()]] - `calls` [EXTRACTED]
- [[dot-extractUsername_ValidToken_ReturnsUsername()]] - `calls` [EXTRACTED]
- [[dot-isTokenValid_ExpiredToken_ThrowsExpiredJwtException()]] - `calls` [EXTRACTED]
- [[dot-isTokenValid_InvalidSignature_ThrowsSignatureException()]] - `calls` [EXTRACTED]
- [[dot-isTokenValid_ValidTokenAndDifferentUsername_ReturnsFalse()]] - `calls` [EXTRACTED]
- [[dot-isTokenValid_ValidTokenAndMatchingUsername_ReturnsTrue()]] - `calls` [EXTRACTED]
- [[JwtServiceTest]] - `method` [EXTRACTED]

#graphify/code #graphify/EXTRACTED #community/JwtService