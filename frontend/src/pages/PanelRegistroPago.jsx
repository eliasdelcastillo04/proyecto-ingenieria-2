import React, { useState } from "react";
import { Link } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

export default function PanelRegistroPago() {
  const treatments = {
    limpieza: {
      title: "Limpieza Facial Profunda",
      duration: "45 min",
      total: 15000,
      deposit: 3000,
    },
    peeling: {
      title: "Peeling Químico",
      duration: "30 min",
      total: 22000,
      deposit: 4400,
    },
    consulta: {
      title: "Consulta Inicial",
      duration: "Evaluación dermatológica",
      total: 10000,
      deposit: 2000,
    },
  };

  const [fullName, setFullName] = useState("Ana Martínez");
  const [dni, setDni] = useState("38492019");
  const [phone, setPhone] = useState("+54 9 11 4829-1029");
  const [email, setEmail] = useState("ana.martinez@email.com");
  const [treatmentKey, setTreatmentKey] = useState("limpieza");

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentPreference, setPaymentPreference] = useState(null);

  const currentTreatment = treatments[treatmentKey];

  const handleConfirmReservation = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/appointments/1/payment-preference", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          depositAmount: currentTreatment.deposit,
          title: `Seña: ${currentTreatment.title}`,
          payerEmail: email,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setPaymentPreference(data);
      } else {
        throw new Error("Error en servidor");
      }
    } catch {
      // Fallback local/demo con URL válida de Mercado Pago
      const demoPrefId =
        "DEMO-1-" + Math.random().toString(36).substring(2, 9).toUpperCase();
      setPaymentPreference({
        appointmentId: 1,
        preferenceId: demoPrefId,
        paymentUrl: `https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=${demoPrefId}`,
        lockedUntil: new Date(Date.now() + 10 * 60 * 1000).toISOString(),
        depositAmount: currentTreatment.deposit,
        title: `Seña: ${currentTreatment.title}`,
      });
    } finally {
      setLoading(false);
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <main className="flex-1 flex flex-col relative h-full">
        <header className="sticky top-0 z-30 flex justify-between items-center w-full px-margin-desktop h-16 max-w-container-max mx-auto bg-surface border-b border-border-subtle shrink-0">
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">
                search
              </span>
              <input
                className="pl-9 pr-4 py-1.5 bg-surface-container-low border border-border-subtle rounded-full text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all"
                placeholder="Search patients..."
                type="text"
              />
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 text-label-sm font-label-sm"
              href="#"
            >
              Agenda
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 text-label-sm font-label-sm"
              href="#"
            >
              Patients
            </a>
            <a
              className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 text-label-sm font-label-sm"
              href="#"
            >
              Settings
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-primary font-label-sm font-bold flex items-center gap-1 hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span className="hidden sm:inline">New Appointment</span>
            </button>
            <div className="h-6 w-px bg-border-subtle mx-2"></div>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="text-on-surface-variant hover:text-primary transition-colors">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>

        <div className="flex-1 p-gutter md:p-margin-desktop overflow-auto filter blur-[2px] opacity-60 pointer-events-none select-none">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-headline-lg font-headline-lg text-primary">
                  Septiembre 2023
                </h2>
                <p className="text-body-md font-body-md text-on-surface-variant">
                  Vista semanal de turnos
                </p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 h-[600px]">
              <div className="border border-border-subtle rounded-lg bg-surface-container-lowest p-4 flex flex-col gap-3">
                <div className="text-center pb-2 border-b border-border-subtle font-label-sm text-on-surface-variant">
                  Lun 23
                </div>
                <div className="bg-status-confirmed/30 rounded p-2 text-label-xs text-primary border border-status-confirmed">
                  09:00 - Consulta
                </div>
                <div className="bg-secondary-container/50 rounded p-2 text-label-xs text-on-secondary-container border border-secondary-container">
                  10:30 - Bloqueado
                </div>
              </div>
              <div className="border border-border-subtle rounded-lg bg-surface-container-lowest p-4 flex flex-col gap-3">
                <div className="text-center pb-2 border-b border-border-subtle font-label-sm text-on-surface-variant">
                  Mar 24
                </div>
              </div>
              <div className="border border-border-subtle rounded-lg bg-surface-container-lowest p-4 flex flex-col gap-3">
                <div className="text-center pb-2 border-b border-border-subtle font-label-sm text-on-surface-variant">
                  Mie 25
                </div>
              </div>
              <div className="border border-border-subtle rounded-lg bg-surface-container-lowest p-4 flex flex-col gap-3">
                <div className="text-center pb-2 border-b border-border-subtle font-label-sm text-on-surface-variant">
                  Jue 26
                </div>
              </div>
              <div className="border border-border-subtle rounded-lg bg-surface-container-lowest p-4 flex flex-col gap-3">
                <div className="text-center pb-2 border-b border-border-subtle font-label-sm text-on-surface-variant">
                  Vie 27
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fixed inset-0 bg-primary/10 backdrop-blur-[1px] z-40 transition-opacity"></div>

        <aside className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-surface shadow-[0px_20px_48px_rgba(0,0,0,0.12)] flex flex-col z-50 transform transition-transform duration-300 translate-x-0 border-l border-border-subtle">
          <div className="px-6 py-5 border-b border-border-subtle bg-surface-container-lowest shrink-0 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="text-headline-md font-headline-md text-primary font-bold">
                Nuevo Turno
              </h2>
              <button
                aria-label="Close panel"
                className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-full hover:bg-surface-container-low"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="inline-flex items-center gap-2 bg-status-confirmed text-primary px-3 py-1.5 rounded-full font-label-sm self-start shadow-sm border border-primary/10">
              <span className="material-symbols-outlined text-[16px]">
                calendar_today
              </span>
              Lunes 23, 10:30 - 11:30
            </div>
          </div>

          <div className="flex-1 overflow-y-auto panel-scroll p-6 space-y-8 bg-surface">
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  person
                </span>
                <h3 className="text-body-lg font-body-lg text-primary font-semibold">
                  Datos del Paciente
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-label-sm font-label-sm text-on-surface-variant"
                    htmlFor="fullName"
                  >
                    Nombre Completo
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2.5 text-body-md text-on-surface focus:border-status-confirmed focus:ring-2 focus:ring-status-confirmed/50 outline-none transition-all placeholder:text-slate-muted"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ej. Ana Martínez"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-label-sm font-label-sm text-on-surface-variant"
                    htmlFor="dni"
                  >
                    ID / DNI
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2.5 text-body-md text-on-surface focus:border-status-confirmed focus:ring-2 focus:ring-status-confirmed/50 outline-none transition-all placeholder:text-slate-muted"
                    id="dni"
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Sin puntos ni espacios"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-label-sm font-label-sm text-on-surface-variant"
                      htmlFor="phone"
                    >
                      Teléfono
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2.5 text-body-md text-on-surface focus:border-status-confirmed focus:ring-2 focus:ring-status-confirmed/50 outline-none transition-all placeholder:text-slate-muted"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+54 9 11..."
                      type="tel"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label
                      className="text-label-sm font-label-sm text-on-surface-variant"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full bg-surface-container-lowest border border-border-subtle rounded-md px-3 py-2.5 text-body-md text-on-surface focus:border-status-confirmed focus:ring-2 focus:ring-status-confirmed/50 outline-none transition-all placeholder:text-slate-muted"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="correo@ejemplo.com"
                      type="email"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  vaccines
                </span>
                <h3 className="text-body-lg font-body-lg text-primary font-semibold">
                  Tratamiento
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label
                  onClick={() => setTreatmentKey("limpieza")}
                  className={`relative flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
                    treatmentKey === "limpieza"
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border-subtle bg-surface-container-lowest hover:bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        treatmentKey === "limpieza"
                          ? "border-primary bg-primary"
                          : "border-outline-variant"
                      }`}
                    >
                      {treatmentKey === "limpieza" && (
                        <div className="w-2 h-2 rounded-full bg-on-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-primary">
                        Limpieza Facial Profunda
                      </p>
                      <p className="text-label-xs text-on-surface-variant mt-0.5">
                        Duración aprox: 45 min
                      </p>
                    </div>
                  </div>
                  <span className="text-label-sm font-bold text-primary">
                    $15.000
                  </span>
                </label>

                <label
                  onClick={() => setTreatmentKey("peeling")}
                  className={`relative flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
                    treatmentKey === "peeling"
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border-subtle bg-surface-container-lowest hover:bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        treatmentKey === "peeling"
                          ? "border-primary bg-primary"
                          : "border-outline-variant"
                      }`}
                    >
                      {treatmentKey === "peeling" && (
                        <div className="w-2 h-2 rounded-full bg-on-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-primary">
                        Peeling Químico
                      </p>
                      <p className="text-label-xs text-on-surface-variant mt-0.5">
                        Duración aprox: 30 min
                      </p>
                    </div>
                  </div>
                  <span className="text-label-sm font-bold text-primary">
                    $22.000
                  </span>
                </label>

                <label
                  onClick={() => setTreatmentKey("consulta")}
                  className={`relative flex items-center justify-between p-4 border rounded-xl cursor-pointer transition-colors ${
                    treatmentKey === "consulta"
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border-subtle bg-surface-container-lowest hover:bg-surface-container-low"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                        treatmentKey === "consulta"
                          ? "border-primary bg-primary"
                          : "border-outline-variant"
                      }`}
                    >
                      {treatmentKey === "consulta" && (
                        <div className="w-2 h-2 rounded-full bg-on-primary" />
                      )}
                    </div>
                    <div>
                      <p className="text-body-md font-medium text-primary">
                        Consulta Inicial
                      </p>
                      <p className="text-label-xs text-on-surface-variant mt-0.5">
                        Evaluación dermatológica
                      </p>
                    </div>
                  </div>
                  <span className="text-label-sm font-bold text-primary">
                    $10.000
                  </span>
                </label>
              </div>
            </section>

            <section className="bg-surface-container-low border border-border-subtle rounded-xl p-5">
              <h3 className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider mb-4">
                Resumen de Pago
              </h3>
              <div className="space-y-3 mb-4 text-body-md font-body-md">
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span>Subtotal ({currentTreatment.title})</span>
                  <span>
                    ${currentTreatment.total.toLocaleString("es-AR")}
                  </span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                  <span>Gastos administrativos</span>
                  <span>Bonificado</span>
                </div>
              </div>
              <div className="h-px w-full bg-border-subtle my-4"></div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-body-md font-medium text-primary">
                  Total del Tratamiento
                </span>
                <span className="text-body-md font-bold text-primary">
                  ${currentTreatment.total.toLocaleString("es-AR")}
                </span>
              </div>

              <div className="flex justify-between items-center bg-secondary-container/30 border border-secondary-container rounded-lg p-3 mt-4">
                <div className="flex flex-col">
                  <span className="text-label-sm font-bold text-on-secondary-fixed-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">
                      payments
                    </span>
                    Seña Requerida
                  </span>
                  <span className="text-label-xs text-on-secondary-fixed-variant mt-0.5 opacity-80">
                    Para confirmar reserva
                  </span>
                </div>
                <span className="text-headline-md font-bold text-on-secondary-fixed-variant">
                  ${currentTreatment.deposit.toLocaleString("es-AR")}
                </span>
              </div>
            </section>
          </div>

          <div className="px-6 py-5 border-t border-border-subtle bg-surface-container-lowest shrink-0 space-y-4">
            <div className="flex items-start gap-2 bg-status-reserved/50 p-3 rounded-lg border border-status-reserved">
              <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-[18px] mt-0.5">
                timer
              </span>
              <p className="text-label-sm text-on-tertiary-fixed-variant leading-tight">
                El turno se reservará por{" "}
                <strong className="font-bold">10 minutos</strong> mientras se
                completa el pago de la seña.
              </p>
            </div>

            <button
              onClick={handleConfirmReservation}
              disabled={loading}
              className="w-full bg-primary text-on-primary py-3.5 rounded-lg font-label-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all shadow-md disabled:opacity-60"
            >
              <span className="material-symbols-outlined text-[20px]">
                {loading ? "hourglass_empty" : "lock"}
              </span>
              {loading ? "Generando link de pago..." : "Confirmar y Pagar Seña"}

              <span className="ml-2 px-2 py-0.5 bg-on-primary/20 rounded text-[10px] tracking-wider uppercase backdrop-blur-sm">
                Mercado Pago
              </span>
            </button>
          </div>
        </aside>
      </main>

      {/* Payment Modal with QR, WhatsApp and MP Link */}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        appointmentData={{
          id: 1,
          patientName: fullName,
          patientPhone: phone,
          treatmentTitle: currentTreatment.title,
          depositAmount: currentTreatment.deposit.toLocaleString("es-AR"),
          totalAmount: currentTreatment.total.toLocaleString("es-AR"),
          appointmentDate: "Lunes 23, 10:30 - 11:30",
        }}
        paymentPreference={paymentPreference || {}}
      />
    </>
  );
}
