package com.dermacare.backend.dao;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;

import java.util.List;
import java.util.Optional;

public interface IAppointmentDao {
    Optional<Appointment> findById(Long id);
    List<Appointment> findAll();
    List<Appointment> findByStatus(AppointmentStatus status);
    Appointment save(Appointment appointment);
    void delete(Appointment appointment);
}
