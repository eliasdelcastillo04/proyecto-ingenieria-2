package com.dermacare.backend.controllers;

import com.dermacare.backend.services.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/webhooks")
public class WebhookController {

    private static final Logger log = LoggerFactory.getLogger(WebhookController.class);

    private final PaymentService paymentService;

    public WebhookController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    /**
     * Receives asynchronous notifications from Mercado Pago (Webhooks / IPN).
     * Endpoint: POST /api/webhooks/mercadopago?type=payment&data.id=123456
     */
    @PostMapping("/mercadopago")
    public ResponseEntity<Map<String, Object>> handleMercadoPagoWebhook(
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "topic", required = false) String topic,
            @RequestParam(value = "data.id", required = false) String dataId,
            @RequestParam(value = "id", required = false) String id,
            @RequestBody(required = false) Map<String, Object> payload) {

        String eventType = type != null ? type : topic;
        String resolvedId = dataId != null ? dataId : id;

        log.info("Received Mercado Pago Webhook: eventType={}, id={}", eventType, resolvedId);

        paymentService.processMercadoPagoWebhook(payload, eventType, resolvedId);

        return ResponseEntity.ok(Map.of("status", "received", "timestamp", System.currentTimeMillis()));
    }
}
