package com.dermacare.backend.services;

import com.dermacare.backend.dtos.PaymentPreferenceResponse;
import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.repositories.AppointmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AppointmentService {

    private final AppointmentRepository appointmentRepository;
    private final MercadoPagoService mercadoPagoService;

    public AppointmentService(AppointmentRepository appointmentRepository, MercadoPagoService mercadoPagoService) {
        this.appointmentRepository = appointmentRepository;
        this.mercadoPagoService = mercadoPagoService;
    }

    public AppointmentService(AppointmentRepository appointmentRepository) {
        this(appointmentRepository, new MercadoPagoService());
    }

    @Transactional(readOnly = true)
    public List<Appointment> getAllAppointments() {
        return appointmentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Optional<Appointment> getAppointmentById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("Appointment ID cannot be null");
        }
        return appointmentRepository.findById(id);
    }

    public Appointment createAppointment(Appointment appointment) {
        if (appointment == null) {
            throw new IllegalArgumentException("Appointment cannot be null");
        }
        if (appointment.getDoctor() == null) {
            throw new IllegalArgumentException("Doctor profile is required for appointment");
        }
        if (appointment.getTimeRange() == null || appointment.getTimeRange().trim().isEmpty()) {
            throw new IllegalArgumentException("Time range is required for appointment");
        }
        String trimmedRange = appointment.getTimeRange().trim();
        if (!trimmedRange.matches("^[\\(\\[].+,.+[\\)\\]]$")) {
            throw new IllegalArgumentException("Invalid time range format for appointment: " + trimmedRange);
        }
        appointment.setTimeRange(trimmedRange);

        if (appointment.getStatus() == null) {
            appointment.setStatus(AppointmentStatus.AVAILABLE);
        }
        return appointmentRepository.save(appointment);
    }

    public Appointment updateStatus(Long id, AppointmentStatus newStatus) {
        if (id == null) {
            throw new IllegalArgumentException("Appointment ID cannot be null");
        }
        if (newStatus == null) {
            throw new IllegalArgumentException("New status cannot be null");
        }
        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found with id: " + id));

        if (appointment.getStatus() == AppointmentStatus.COMPLETED) {
            throw new IllegalStateException("Cannot change status of a completed appointment");
        }
        if (appointment.getStatus() == AppointmentStatus.CANCELLED && newStatus != AppointmentStatus.CANCELLED) {
            throw new IllegalStateException("Cannot change status of a cancelled appointment");
        }

        appointment.setStatus(newStatus);
        return appointmentRepository.save(appointment);
    }

    public void cancelAppointment(Long id) {
        updateStatus(id, AppointmentStatus.CANCELLED);
    }

    public PaymentPreferenceResponse createPaymentPreference(Long id, BigDecimal depositAmount, String title, String payerEmail) {
        if (id == null) {
            throw new IllegalArgumentException("Appointment ID cannot be null");
        }
        if (depositAmount == null || depositAmount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Deposit amount must be greater than zero");
        }

        Appointment appointment = appointmentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Appointment not found with id: " + id));

        if (appointment.getStatus() == AppointmentStatus.CONFIRMED || appointment.getStatus() == AppointmentStatus.COMPLETED) {
            throw new IllegalStateException("Cannot create payment preference for an appointment that is already " + appointment.getStatus());
        }

        ZonedDateTime lockExpiration = ZonedDateTime.now().plusMinutes(10);
        appointment.setStatus(AppointmentStatus.PENDING_PAYMENT);
        appointment.setLockedUntil(lockExpiration);

        MercadoPagoService.PreferenceResult pref = mercadoPagoService.createPreference(id, depositAmount, title, payerEmail);
        appointment.setMercadoPagoPreferenceId(pref.getPreferenceId());

        appointmentRepository.save(appointment);

        return new PaymentPreferenceResponse(
                id,
                pref.getPreferenceId(),
                pref.getPaymentUrl(),
                lockExpiration,
                depositAmount,
                title != null ? title : "Seña Turno #" + id
        );
    }
}
