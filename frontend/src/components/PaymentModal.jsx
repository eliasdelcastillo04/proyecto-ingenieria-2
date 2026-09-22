import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function PaymentModal({
  isOpen,
  onClose,
  appointmentData = {},
  paymentPreference = {},
}) {
  const [copied, setCopied] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(600); // 10 minutes default

  const {
    patientName = "Paciente",
    patientPhone = "",
    treatmentTitle = "Consulta Dermatológica",
    depositAmount = "3.000",
    totalAmount = "15.000",
    appointmentDate = "Lunes 23, 10:30 - 11:30",
  } = appointmentData;

  const paymentUrl =
    paymentPreference.paymentUrl ||
    `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${
      paymentPreference.preferenceId || "DEMO-123"
    }`;

  // Countdown timer for 10-minute lock
  useEffect(() => {
    if (!isOpen) return;

    if (paymentPreference.lockedUntil) {
      const targetTime = new Date(paymentPreference.lockedUntil).getTime();
      const initialDiff = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));
      setSecondsRemaining(initialDiff > 0 ? initialDiff : 600);
    } else {
      setSecondsRemaining(600);
    }

    const interval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, paymentPreference]);

  if (!isOpen) return null;

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(paymentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Error al copiar enlace", err);
    }
  };

  const handleWhatsApp = () => {
    const cleanPhone = (patientPhone || "").replace(/\D/g, "");
    const message = encodeURIComponent(
      `Hola ${patientName}, para confirmar tu turno en DermaCare (${treatmentTitle}, Fecha: ${appointmentDate}), puedes abonar la seña requerida de $${depositAmount} a través de este link de pago de Mercado Pago:\n\n${paymentUrl}\n\n*Nota: El turno se encuentra reservado temporalmente por 10 minutos.*`
    );
    const whatsappUrl = cleanPhone
      ? `https://wa.me/${cleanPhone}?text=${message}`
      : `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handlePayNow = () => {
    window.open(paymentUrl, "_blank", "noopener,noreferrer");
  };

  const isExpired = secondsRemaining === 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/20 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-surface border border-border-subtle rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-border-subtle bg-surface-container-lowest flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[24px]">
              payments
            </span>
            <h3
              id="payment-modal-title"
              className="text-headline-sm font-bold text-primary"
            >
              Completar Seña de Turno
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container-low"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Timer status banner */}
          <div
            className={`p-3.5 rounded-xl border flex items-center justify-between ${
              isExpired
                ? "bg-red-500/10 border-red-500/30 text-red-700"
                : "bg-secondary-container/30 border-secondary-container text-on-secondary-fixed-variant"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px]">
                {isExpired ? "error" : "timer"}
              </span>
              <div>
                <p className="text-label-sm font-bold">
                  {isExpired ? "Tiempo de reserva agotado" : "Turno Reservado"}
                </p>
                <p className="text-label-xs opacity-80">
                  {isExpired
                    ? "La reserva se ha liberado. Solicita un nuevo turno."
                    : "Completa el pago antes de que expire el tiempo"}
                </p>
              </div>
            </div>
            <div className="text-headline-sm font-mono font-bold px-3 py-1 bg-surface rounded-lg border border-border-subtle shadow-sm">
              {formatTime(secondsRemaining)}
            </div>
          </div>

          {/* Treatment & Amount summary */}
          <div className="bg-surface-container-low p-4 rounded-xl border border-border-subtle space-y-2">
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Tratamiento:</span>
              <span className="font-semibold text-primary">{treatmentTitle}</span>
            </div>
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Paciente:</span>
              <span className="text-on-surface">{patientName}</span>
            </div>
            <div className="flex justify-between items-center text-body-md">
              <span className="text-on-surface-variant">Total Tratamiento:</span>
              <span className="text-on-surface">${totalAmount}</span>
            </div>
            <div className="h-px bg-border-subtle my-2" />
            <div className="flex justify-between items-center">
              <span className="font-bold text-primary text-body-lg">
                Seña Requerida:
              </span>
              <span className="text-headline-md font-bold text-primary">
                ${depositAmount}
              </span>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="flex flex-col items-center justify-center p-5 bg-surface-container-lowest rounded-xl border border-border-subtle space-y-3">
            <p className="text-label-sm font-medium text-on-surface-variant text-center">
              Escaneá el código QR con tu celular o app de Mercado Pago:
            </p>
            <div className="p-3 bg-white rounded-xl shadow-md border border-slate-200 inline-block">
              <QRCodeSVG
                value={paymentUrl}
                size={180}
                level="M"
                includeMargin={false}
              />
            </div>
            <p className="text-[11px] text-slate-500 text-center max-w-xs">
              Acepta tarjetas de débito, crédito, dinero en cuenta de Mercado Pago y transferencias.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            {/* Direct Pay Button */}
            <button
              onClick={handlePayNow}
              disabled={isExpired}
              className="w-full bg-primary text-on-primary py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all shadow-md disabled:opacity-50 disabled:pointer-events-none"
            >
              <span className="material-symbols-outlined text-[20px]">
                credit_card
              </span>
              Pagar Ahora con Mercado Pago
              <span className="ml-1 px-2 py-0.5 bg-on-primary/20 rounded text-[10px] tracking-wider uppercase font-semibold">
                Checkout Pro
              </span>
            </button>

            {/* Share / Copy Options */}
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="py-2.5 px-3 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl font-bold text-label-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  chat
                </span>
                Enviar WhatsApp
              </button>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="py-2.5 px-3 bg-surface-container-low hover:bg-surface-container text-on-surface border border-border-subtle rounded-xl font-bold text-label-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {copied ? "done" : "content_copy"}
                </span>
                {copied ? "¡Copiado!" : "Copiar Link"}
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-border-subtle bg-surface-container-lowest text-center">
          <button
            onClick={onClose}
            className="text-label-sm text-on-surface-variant hover:text-primary font-medium transition-colors"
          >
            Volver a la agenda
          </button>
        </div>
      </div>
    </div>
  );
}
