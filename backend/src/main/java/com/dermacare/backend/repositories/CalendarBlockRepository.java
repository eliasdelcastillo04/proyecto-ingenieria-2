package com.dermacare.backend.repositories;

import com.dermacare.backend.entities.CalendarBlock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.ZonedDateTime;
import java.util.List;
import java.util.UUID;

@Repository
public interface CalendarBlockRepository extends JpaRepository<CalendarBlock, Long> {
    List<CalendarBlock> findByDoctorId(UUID doctorId);

    @Query("SELECT b FROM CalendarBlock b WHERE b.doctor.id = :doctorId AND b.startTime < :end AND b.endTime > :start")
    List<CalendarBlock> findOverlappingBlocks(@Param("doctorId") UUID doctorId,
                                             @Param("start") ZonedDateTime start,
                                             @Param("end") ZonedDateTime end);
}
