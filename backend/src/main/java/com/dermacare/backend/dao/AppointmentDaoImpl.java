package com.dermacare.backend.dao;

import com.dermacare.backend.entities.Appointment;
import com.dermacare.backend.entities.AppointmentStatus;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class AppointmentDaoImpl implements IAppointmentDao {

    @PersistenceContext
    private EntityManager entityManager;

    public AppointmentDaoImpl() {
    }

    public AppointmentDaoImpl(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    public Optional<Appointment> findById(Long id) {
        if (id == null) {
            return Optional.empty();
        }
        return Optional.ofNullable(entityManager.find(Appointment.class, id));
    }

    @Override
    public List<Appointment> findAll() {
        return entityManager.createQuery("SELECT a FROM Appointment a", Appointment.class).getResultList();
    }

    @Override
    public List<Appointment> findByStatus(AppointmentStatus status) {
        return entityManager.createQuery("SELECT a FROM Appointment a WHERE a.status = :status", Appointment.class)
                .setParameter("status", status)
                .getResultList();
    }

    @Override
    public Appointment save(Appointment appointment) {
        if (appointment.getId() == null) {
            entityManager.persist(appointment);
            return appointment;
        } else {
            return entityManager.merge(appointment);
        }
    }

    @Override
    public void delete(Appointment appointment) {
        if (entityManager.contains(appointment)) {
            entityManager.remove(appointment);
        } else if (appointment.getId() != null) {
            Appointment managed = entityManager.find(Appointment.class, appointment.getId());
            if (managed != null) {
                entityManager.remove(managed);
            }
        }
    }
}
