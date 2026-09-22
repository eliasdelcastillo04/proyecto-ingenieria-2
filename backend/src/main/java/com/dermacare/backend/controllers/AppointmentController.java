package com.dermacare.backend.controllers;

import com.dermacare.backend.dtos.CreatePaymentPreferenceRequest;
import com.dermacare.backend.dtos.PaymentPreferenceResponse;
import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.services.AppointmentService;
import com.dermacare.backend.entities.AppointmentStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    @GetMapping
    public List<Appointment> getAllAppointments() {
        return appointmentService.getAllAppointments();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable Long id) {
        return appointmentService.getAppointmentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentService.createAppointment(appointment);
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<Appointment> updateStatus(@PathVariable Long id, @RequestParam AppointmentStatus status) {
        return ResponseEntity.ok(appointmentService.updateStatus(id, status));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<Void> cancelAppointment(@PathVariable Long id) {
        appointmentService.cancelAppointment(id);
        return ResponseEntity.noContent().build();
    }

    @PostMapping("/{id}/payment-preference")
    public ResponseEntity<PaymentPreferenceResponse> createPaymentPreference(
            @PathVariable Long id,
            @RequestBody(required = false) CreatePaymentPreferenceRequest request) {
        BigDecimal deposit = (request != null && request.getDepositAmount() != null)
                ? request.getDepositAmount()
                : new BigDecimal("3000.00");
        String title = request != null ? request.getTitle() : "Seña Turno DermaCare #" + id;
        String payerEmail = request != null ? request.getPayerEmail() : null;

        PaymentPreferenceResponse response = appointmentService.createPaymentPreference(id, deposit, title, payerEmail);
        return ResponseEntity.ok(response);
    }
}
