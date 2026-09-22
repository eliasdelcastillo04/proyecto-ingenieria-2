package com.dermacare.backend.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.math.BigDecimal;
import java.util.*;

@Service
public class MercadoPagoService {

    private static final Logger log = LoggerFactory.getLogger(MercadoPagoService.class);
    private static final String MP_PREFERENCES_API = "https://api.mercadopago.com/checkout/preferences";

    @Value("${mercadopago.access-token:#{null}}")
    private String accessToken;

    private final RestTemplate restTemplate;

    public MercadoPagoService() {
        this.restTemplate = new RestTemplate();
    }

    public MercadoPagoService(RestTemplate restTemplate, String accessToken) {
        this.restTemplate = restTemplate;
        this.accessToken = accessToken;
    }

    public static class PreferenceResult {
        private final String preferenceId;
        private final String paymentUrl;

        public PreferenceResult(String preferenceId, String paymentUrl) {
            this.preferenceId = preferenceId;
            this.paymentUrl = paymentUrl;
        }

        public String getPreferenceId() {
            return preferenceId;
        }

        public String getPaymentUrl() {
            return paymentUrl;
        }
    }

    public PreferenceResult createPreference(Long appointmentId, BigDecimal depositAmount, String title, String payerEmail) {
        String token = resolveToken();

        if (token != null && !token.isBlank()) {
            try {
                return callMercadoPagoApi(appointmentId, depositAmount, title, payerEmail, token);
            } catch (Exception e) {
                log.warn("Mercado Pago API call failed, falling back to simulated sandbox preference: {}", e.getMessage());
                return createSimulatedPreference(appointmentId);
            }
        } else {
            log.info("No MERCADO_PAGO_ACCESS_TOKEN configured. Using demo sandbox preference for appointment id={}", appointmentId);
            return createSimulatedPreference(appointmentId);
        }
    }

    private PreferenceResult callMercadoPagoApi(Long appointmentId, BigDecimal depositAmount, String title, String payerEmail, String token) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.setBearerAuth(token);

        Map<String, Object> item = new HashMap<>();
        item.put("title", title != null ? title : "Seña Turno DermaCare #" + appointmentId);
        item.put("quantity", 1);
        item.put("currency_id", "ARS");
        item.put("unit_price", depositAmount);

        Map<String, Object> backUrls = new HashMap<>();
        backUrls.put("success", "http://localhost:5173/turnos?status=success&appointmentId=" + appointmentId);
        backUrls.put("pending", "http://localhost:5173/turnos?status=pending&appointmentId=" + appointmentId);
        backUrls.put("failure", "http://localhost:5173/turnos?status=failure&appointmentId=" + appointmentId);

        Map<String, Object> body = new HashMap<>();
        body.put("items", List.of(item));
        body.put("external_reference", String.valueOf(appointmentId));
        body.put("back_urls", backUrls);
        body.put("auto_return", "approved");

        if (payerEmail != null && !payerEmail.isBlank()) {
            Map<String, Object> payer = new HashMap<>();
            payer.put("email", payerEmail);
            body.put("payer", payer);
        }

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(body, headers);
        ResponseEntity<Map> response = restTemplate.exchange(MP_PREFERENCES_API, HttpMethod.POST, entity, Map.class);

        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            Map respBody = response.getBody();
            String prefId = (String) respBody.get("id");
            String initPoint = (String) respBody.get("init_point");
            if (initPoint == null) {
                initPoint = (String) respBody.get("sandbox_init_point");
            }
            return new PreferenceResult(prefId, initPoint);
        }

        throw new IllegalStateException("Failed to create preference, status: " + response.getStatusCode());
    }

    private PreferenceResult createSimulatedPreference(Long appointmentId) {
        String randomSuffix = UUID.randomUUID().toString().substring(0, 8);
        String prefId = "DEMO-" + appointmentId + "-" + randomSuffix;
        String paymentUrl = "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=" + prefId;
        return new PreferenceResult(prefId, paymentUrl);
    }

    private String resolveToken() {
        if (accessToken != null && !accessToken.isBlank()) {
            return accessToken;
        }
        return System.getenv("MERCADO_PAGO_ACCESS_TOKEN");
    }
}
