package com.dermacare.backend.dtos;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

public class PaymentPreferenceResponse {

    private Long appointmentId;
    private String preferenceId;
    private String paymentUrl;
    private ZonedDateTime lockedUntil;
    private BigDecimal depositAmount;
    private String title;

    public PaymentPreferenceResponse() {
    }

    public PaymentPreferenceResponse(Long appointmentId, String preferenceId, String paymentUrl, ZonedDateTime lockedUntil, BigDecimal depositAmount, String title) {
        this.appointmentId = appointmentId;
        this.preferenceId = preferenceId;
        this.paymentUrl = paymentUrl;
        this.lockedUntil = lockedUntil;
        this.depositAmount = depositAmount;
        this.title = title;
    }

    public Long getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(Long appointmentId) {
        this.appointmentId = appointmentId;
    }

    public String getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(String preferenceId) {
        this.preferenceId = preferenceId;
    }

    public String getPaymentUrl() {
        return paymentUrl;
    }

    public void setPaymentUrl(String paymentUrl) {
        this.paymentUrl = paymentUrl;
    }

    public ZonedDateTime getLockedUntil() {
        return lockedUntil;
    }

    public void setLockedUntil(ZonedDateTime lockedUntil) {
        this.lockedUntil = lockedUntil;
    }

    public BigDecimal getDepositAmount() {
        return depositAmount;
    }

    public void setDepositAmount(BigDecimal depositAmount) {
        this.depositAmount = depositAmount;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
