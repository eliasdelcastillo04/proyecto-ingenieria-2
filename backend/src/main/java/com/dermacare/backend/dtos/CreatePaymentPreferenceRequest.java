package com.dermacare.backend.dtos;

import java.math.BigDecimal;

public class CreatePaymentPreferenceRequest {

    private BigDecimal depositAmount;
    private String title;
    private String payerEmail;

    public CreatePaymentPreferenceRequest() {
    }

    public CreatePaymentPreferenceRequest(BigDecimal depositAmount, String title, String payerEmail) {
        this.depositAmount = depositAmount;
        this.title = title;
        this.payerEmail = payerEmail;
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

    public String getPayerEmail() {
        return payerEmail;
    }

    public void setPayerEmail(String payerEmail) {
        this.payerEmail = payerEmail;
    }
}
