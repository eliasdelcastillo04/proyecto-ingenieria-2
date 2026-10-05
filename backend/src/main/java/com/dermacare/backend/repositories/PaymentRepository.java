package com.dermacare.backend.repositories;

import com.dermacare.backend.entities.Payment;
import com.dermacare.backend.entities.PaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
    List<Payment> findByAppointmentId(Long appointmentId);
    List<Payment> findByStatus(PaymentStatus status);

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM Payment p WHERE p.status = 'APPROVED'")
    BigDecimal calculateTotalApprovedAmount();

    @Query("SELECT COALESCE(SUM(p.amount), 0) FROM Payment p WHERE p.status = 'APPROVED' AND p.transactionDate >= :startOfDay")
    BigDecimal calculateTodayApprovedAmount(@Param("startOfDay") LocalDateTime startOfDay);
}
