---
type: community
members: 56
---

# JwtService

**Members:** 56 nodes

## Members
- [[dot-AuthController()]] - code - backend/src/main/java/com/dermacare/backend/controllers/AuthController.java
- [[dot-JwtAuthenticationFilter()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtAuthenticationFilter.java
- [[dot-SecurityConfig()]] - code - backend/src/main/java/com/dermacare/backend/security/SecurityConfig.java
- [[dot-createToken()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-doFilterInternal()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtAuthenticationFilter.java
- [[dot-doFilterInternal_BearerPrefixWrongCase_ProceedsWithoutAuthentication()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_ExistingAuthentication_DoesNotOverride()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_JwtException_CatchesExceptionAndProceeds()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_NonBearerAuthorizationHeader_ProceedsWithoutAuthentication()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_NullAuthorizationHeader_ProceedsWithoutAuthentication()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_NullUserIdExtracted_DoesNotSetSecurityContext()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-doFilterInternal_ValidBearerToken_SetsSecurityContextAndProceeds()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[dot-extractAllClaims()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-extractClaim()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-extractClaim_ExpirationClaim_ReturnsExpirationDate()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-extractExpiration()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-extractUsername()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-extractUsername_ValidToken_ReturnsUsername()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-getSignInKey()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-isTokenExpired()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-isTokenValid()]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[dot-isTokenValid_ExpiredToken_ThrowsExpiredJwtException()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-isTokenValid_InvalidSignature_ThrowsSignatureException()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-isTokenValid_MalformedToken_ThrowsMalformedJwtException()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-isTokenValid_ValidTokenAndDifferentUsername_ReturnsFalse()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-isTokenValid_ValidTokenAndMatchingUsername_ReturnsTrue()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[dot-securityFilterChain()]] - code - backend/src/main/java/com/dermacare/backend/security/SecurityConfig.java
- [[dot-tearDown()]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[AuthController]] - code - backend/src/main/java/com/dermacare/backend/controllers/AuthController.java
- [[AuthController.java]] - code - backend/src/main/java/com/dermacare/backend/controllers/AuthController.java
- [[JwtAuthenticationFilter]] - code - backend/src/main/java/com/dermacare/backend/security/JwtAuthenticationFilter.java
- [[JwtAuthenticationFilter.java]] - code - backend/src/main/java/com/dermacare/backend/security/JwtAuthenticationFilter.java
- [[JwtAuthenticationFilterTest]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[JwtAuthenticationFilterTest.java]] - code - backend/src/test/java/com/dermacare/backend/security/JwtAuthenticationFilterTest.java
- [[JwtService]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[JwtService.java]] - code - backend/src/main/java/com/dermacare/backend/security/JwtService.java
- [[JwtServiceTest]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[JwtServiceTest.java]] - code - backend/src/test/java/com/dermacare/backend/security/JwtServiceTest.java
- [[Override]] - code
- [[RequestMapping_1]] - code
- [[RestController_1]] - code
- [[SecurityConfig]] - code - backend/src/main/java/com/dermacare/backend/security/SecurityConfig.java
- [[SecurityConfig.java]] - code - backend/src/main/java/com/dermacare/backend/security/SecurityConfig.java
- [[io.jsonwebtoken.Claims]] - code
- [[jakarta.servlet.FilterChain]] - code
- [[jakarta.servlet.http.HttpServletRequest]] - code
- [[jakarta.servlet.http.HttpServletResponse]] - code
- [[javax.crypto.SecretKey]] - code
- [[org.junit.jupiter.api.AfterEach]] - code
- [[org.springframework.context.annotation.Bean]] - code
- [[org.springframework.context.annotation.Configuration]] - code
- [[org.springframework.security.config.annotation.web.builders.HttpSecurity]] - code
- [[org.springframework.security.config.annotation.web.configuration.EnableWebSecurity]] - code
- [[org.springframework.security.web.SecurityFilterChain]] - code
- [[org.springframework.stereotype.Component]] - code
- [[org.springframework.web.filter.OncePerRequestFilter]] - code

## Live Query (requires Dataview plugin)

```dataview
TABLE source_file, type FROM #community/JwtService
SORT file.name ASC
```

## Connections to other communities
- 16 edges to [[_COMMUNITY_org.junit.jupiter.api.Test]]
- 13 edges to [[_COMMUNITY_PatientControllerTest]]
- 2 edges to [[_COMMUNITY_org.springframework.http.ResponseEntity]]
- 2 edges to [[_COMMUNITY_PaymentPreferenceResponse]]

## Top bridge nodes
- [[JwtService]] - degree 19, connects to 2 communities
- [[JwtAuthenticationFilterTest.java]] - degree 9, connects to 2 communities
- [[JwtServiceTest.java]] - degree 4, connects to 2 communities
- [[JwtAuthenticationFilterTest]] - degree 17, connects to 1 community
- [[JwtServiceTest]] - degree 11, connects to 1 community