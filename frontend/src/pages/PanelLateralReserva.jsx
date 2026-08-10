import React from "react";
import { Link } from "react-router-dom";

export default function PanelLateralReserva() {
  return (
    <>
      <main className="flex-1 overflow-y-auto px-6 py-6 space-y-8 custom-scrollbar">

<section className="space-y-4">
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">I. Datos del Paciente</h3>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</span>
<input className="w-full pl-10 pr-3 py-2.5 bg-surface-container-lowest border border-border-subtle rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md text-on-surface placeholder:text-outline" placeholder="Buscar paciente existente..." type="text"/>
</div>
<div className="flex items-center gap-4 py-2">
<hr className="flex-1 border-border-subtle"/>
<span className="font-label-xs text-label-xs text-outline uppercase">o Registro Rápido</span>
<hr className="flex-1 border-border-subtle"/>
</div>
<div className="space-y-3">
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Nombre Completo</label>
<input className="w-full px-3 py-2.5 bg-surface-container-lowest border border-border-subtle rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md text-on-surface" type="text"/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Teléfono</label>
<input className="w-full px-3 py-2.5 bg-surface-container-lowest border border-border-subtle rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md text-on-surface" type="tel"/>
</div>
</div>
</section>

<section className="space-y-4 pt-2">
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">II. Detalles del Turno</h3>
<div className="grid grid-cols-2 gap-4">
<div className="p-3 border border-border-subtle rounded-DEFAULT bg-surface-container-low flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="calendar_month">calendar_month</span>
<div>
<div className="font-label-xs text-label-xs text-on-surface-variant">Fecha</div>
<div className="font-body-md text-body-md text-on-surface font-medium">14 Nov 2023</div>
</div>
</div>
<div className="p-3 border border-border-subtle rounded-DEFAULT bg-status-confirmed flex items-center gap-3">
<span className="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
<div>
<div className="font-label-xs text-label-xs text-primary-container">Horario</div>
<div className="font-body-md text-body-md text-primary font-medium">10:30 AM</div>
</div>
</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Servicio</label>
<div className="relative">
<select className="w-full pl-3 pr-10 py-2.5 bg-surface-container-lowest border border-border-subtle rounded-DEFAULT focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-body-md text-body-md text-on-surface appearance-none">
<option disabled="" selected="" value="">Seleccionar especialidad...</option>
<option value="dermatologia">Dermatología Clínica</option>
<option value="estetica">Medicina Estética</option>
<option value="laser">Depilación Láser</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none" data-icon="expand_more">expand_more</span>
</div>
</div>
</section>

<section className="space-y-4 pt-2">
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">III. Pago y Seña</h3>
<div className="border border-border-subtle rounded-DEFAULT bg-surface overflow-hidden">
<div className="p-4 space-y-3">
<div className="flex justify-between items-center font-body-md text-body-md text-on-surface">
<span>Costo del Servicio (Est.)</span>
<span>$45.000</span>
</div>
<div className="flex justify-between items-center font-body-md text-body-md text-on-surface-variant">
<span>Descuento Prepaga</span>
<span>-$0</span>
</div>
<hr className="border-border-subtle"/>
<div className="flex justify-between items-center font-headline-md text-headline-md text-primary pt-1">
<span>Seña Obligatoria</span>
<span>$10.000</span>
</div>
</div>
<div className="bg-surface-container-low p-4 border-t border-border-subtle">
<button className="w-full bg-secondary hover:bg-on-secondary-container text-on-secondary py-3 px-4 rounded-DEFAULT font-label-sm text-label-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined" data-icon="payments" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>payments</span>
                            Pagar Seña con Mercado Pago
                        </button>
<p className="text-center mt-3 font-label-xs text-label-xs text-outline">
                            El turno quedará reservado tras confirmar el pago de la seña.
                        </p>
</div>
</div>
</section>
</main>
    </>
  );
}
