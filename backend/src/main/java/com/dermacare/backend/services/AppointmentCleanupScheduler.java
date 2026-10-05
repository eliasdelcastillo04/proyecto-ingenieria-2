package com.dermacare.backend.services;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import com.dermacare.backend.repositories.AppointmentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.ZonedDateTime;
import java.util.List;

@Component
public class AppointmentCleanupScheduler {

    private static final Logger log = LoggerFactory.getLogger(AppointmentCleanupScheduler.class);

    private final AppointmentRepository appointmentRepository;

    public AppointmentCleanupScheduler(AppointmentRepository appointmentRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    /**
     * Periodically releases appointments that have been locked in PENDING_PAYMENT
     * status whose hold period (lockedUntil) has expired without confirmation.
     * Runs every 60 seconds.
     */
    @Scheduled(fixedRate = 60000)
    @Transactional
    public void releaseExpiredPendingAppointments() {
        ZonedDateTime now = ZonedDateTime.now();
        List<Appointment> allAppointments = appointmentRepository.findAll();

        int releasedCount = 0;
        for (Appointment appointment : allAppointments) {
            if (appointment.getStatus() == AppointmentStatus.PENDING_PAYMENT
                    && appointment.getLockedUntil() != null
                    && appointment.getLockedUntil().isBefore(now)) {

                appointment.setStatus(AppointmentStatus.AVAILABLE);
                appointment.setLockedUntil(null);
                appointment.setMercadoPagoPreferenceId(null);
                appointmentRepository.save(appointment);
                releasedCount++;
            }
        }

        if (releasedCount > 0) {
            log.info("Released {} expired pending appointment locks back to AVAILABLE status.", releasedCount);
        }
    }
}
