import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import PaymentModal from "../components/PaymentModal";

describe("PaymentModal Component", () => {
  const sampleAppointmentData = {
    patientName: "Camila Gomez",
    patientPhone: "+54 9 11 9876-5432",
    treatmentTitle: "Limpieza Facial Profunda",
    depositAmount: "3.000",
    totalAmount: "15.000",
    appointmentDate: "Lunes 23, 10:30 - 11:30",
  };

  const samplePaymentPreference = {
    preferenceId: "PREF-TEST-999",
    paymentUrl: "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=PREF-TEST-999",
    lockedUntil: new Date(Date.now() + 600 * 1000).toISOString(),
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("does not render when isOpen is false", () => {
    const { container } = render(
      <PaymentModal
        isOpen={false}
        onClose={vi.fn()}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders modal with appointment information, QR code and actions when isOpen is true", () => {
    render(
      <PaymentModal
        isOpen={true}
        onClose={vi.fn()}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );

    expect(screen.getByText("Completar Seña de Turno")).toBeInTheDocument();
    expect(screen.getByText("Camila Gomez")).toBeInTheDocument();
    expect(screen.getByText("Limpieza Facial Profunda")).toBeInTheDocument();
    expect(screen.getByText("$3.000")).toBeInTheDocument();
    expect(screen.getByText(/Escaneá el código QR/i)).toBeInTheDocument();
    expect(screen.getByText(/Pagar Ahora con Mercado Pago/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar WhatsApp/i)).toBeInTheDocument();
    expect(screen.getByText(/Copiar Link/i)).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <PaymentModal
        isOpen={true}
        onClose={handleClose}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );

    const closeBtn = screen.getByLabelText("Cerrar modal");
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    const backBtn = screen.getByText("Volver a la agenda");
    fireEvent.click(backBtn);
    expect(handleClose).toHaveBeenCalledTimes(2);
  });

  it("opens Mercado Pago payment URL in a new window when clicking pay button", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <PaymentModal
        isOpen={true}
        onClose={vi.fn()}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );

    const payBtn = screen.getByText(/Pagar Ahora con Mercado Pago/i);
    fireEvent.click(payBtn);

    expect(openSpy).toHaveBeenCalledWith(
      samplePaymentPreference.paymentUrl,
      "_blank",
      "noopener,noreferrer"
    );
  });

  it("opens WhatsApp URL with prefilled message when clicking WhatsApp button", () => {
    const openSpy = vi.spyOn(window, "open").mockImplementation(() => null);

    render(
      <PaymentModal
        isOpen={true}
        onClose={vi.fn()}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );

    const whatsappBtn = screen.getByText(/Enviar WhatsApp/i);
    fireEvent.click(whatsappBtn);

    expect(openSpy).toHaveBeenCalled();
    const calledUrl = openSpy.mock.calls[0][0];
    expect(calledUrl).toContain("https://wa.me/5491198765432");
    expect(calledUrl).toContain(encodeURIComponent("Camila Gomez"));
  });

  it("copies payment URL to clipboard when clicking copy link", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: {
        writeText: writeTextMock,
      },
    });

    render(
      <PaymentModal
        isOpen={true}
        onClose={vi.fn()}
        appointmentData={sampleAppointmentData}
        paymentPreference={samplePaymentPreference}
      />
    );

    const copyBtn = screen.getByText(/Copiar Link/i);
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalledWith(samplePaymentPreference.paymentUrl);
    expect(await screen.findByText("¡Copiado!")).toBeInTheDocument();
  });
});
