import React from "react";
import { Link } from "react-router-dom";

export default function HistoriaClinicaCompleta() {
  return (
    <>
      <main className="flex-1 overflow-y-auto p-4 md:p-8 hide-scrollbar bg-background">
<div className="max-w-[container-max] mx-auto space-y-6">

<div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-6">
<div className="w-20 h-20 rounded-full bg-primary-fixed border-4 border-surface-container-lowest overflow-hidden flex-shrink-0 shadow-sm relative">
<span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-secondary rounded-full border-2 border-surface z-10"></span>
<img alt="Maria Garcia" className="w-full h-full object-cover" data-alt="A portrait of a 34 year old hispanic female patient with clear skin, soft natural lighting, neutral background, looking relaxed and confident." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWjtqTL-YRmhTUSzTkfBevKY7b9CwfaFCK0heqxPsx8SuMtfhhV9pWVFZaXRCOfY7O57MekLvLTzJUi-PrjQ5Mnyj0dZQoqkyOCzgtUHqBe755jK9Ii5OMLWkAoH2zE-3rXSbVTbwSVeVlL-frzyFO_FC1W67ZHiBkNrTPaKZEKz-OJbubYgCsRKVVuAXfxRnFdr8PfLpng3zEKnFYWUN4Xf0Ue_1OpJAy1AVJmaC-rSic9Po6BnFAxA"/>
</div>
<div>
<div className="flex items-center gap-3 mb-1">
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Maria Garcia</h2>
<span className="bg-status-confirmed text-primary px-2.5 py-0.5 rounded-full font-label-xs text-label-xs border border-blue-200">Consulting Now</span>
</div>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-on-surface-variant font-body-md text-body-md">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">cake</span> 34 años (15/04/1990)</span>
<span className="text-border-subtle">|</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">badge</span> ID: P-847291</span>
<span className="text-border-subtle">|</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px]">history</span> Última visita: 12 Nov, 2023</span>
</div>
</div>
</div>
<div className="flex gap-3 w-full md:w-auto">
<button className="flex-1 md:flex-none px-4 py-2 bg-surface hover:bg-surface-container border border-border-subtle rounded-lg text-primary font-label-sm text-label-sm transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">print</span> Print
                        </button>
<button className="flex-1 md:flex-none px-4 py-2 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-sm text-label-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
<span className="material-symbols-outlined text-[18px]">save</span> Save Changes
                        </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-1 flex flex-col gap-6">

<div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)]">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[22px]">contact_page</span>
                                Datos Filiatorios
                            </h3>
<div className="space-y-4">
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Teléfono</p>
<p className="font-body-md text-body-md text-on-background flex items-center gap-2">
                                        +34 612 345 678
                                        <button className="text-primary hover:text-primary-container"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
</p>
</div>
<hr className="border-border-subtle"/>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Email</p>
<p className="font-body-md text-body-md text-on-background truncate">m.garcia.90@email.com</p>
</div>
<hr className="border-border-subtle"/>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Dirección</p>
<p className="font-body-md text-body-md text-on-background">Av. Diagonal 453, 3º 2ª<br/>08036, Barcelona, España</p>
</div>
<hr className="border-border-subtle"/>
<div className="bg-surface-container-low p-3 rounded-lg border border-border-subtle">
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-error">emergency</span> Contacto de Emergencia
                                    </p>
<p className="font-body-md text-body-md text-on-background font-medium">Carlos Ruiz (Esposo)</p>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">+34 689 123 456</p>
</div>
</div>
</div>

<div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)]">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[22px]">medical_information</span>
                                Antecedentes Médicos
                            </h3>
<div className="space-y-5">

<div className="bg-error-container/30 border border-error-container rounded-lg p-3">
<p className="font-label-xs text-label-xs text-error uppercase mb-1.5 font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">warning</span> Alergias
                                    </p>
<div className="flex flex-wrap gap-2">
<span className="bg-error-container text-on-error-container px-2 py-1 rounded-md font-label-sm text-label-sm">Penicilina</span>
<span className="bg-error-container text-on-error-container px-2 py-1 rounded-md font-label-sm text-label-sm">Látex (Leve)</span>
</div>
</div>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-2">Condiciones Crónicas</p>
<ul className="list-disc list-inside font-body-md text-body-md text-on-background space-y-1">
<li>Hipotiroidismo (Controlado)</li>
<li>Rosácea (Fase I)</li>
</ul>
</div>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-2">Medicación Actual</p>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-sm border-b border-border-subtle pb-1">
<span className="font-medium text-on-background">Levotiroxina 50mcg</span>
<span className="text-on-surface-variant text-xs">1/día (Mañana)</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-border-subtle pb-1">
<span className="font-medium text-on-background">Metronidazol Gel 0.75%</span>
<span className="text-on-surface-variant text-xs">Uso Tópico (Noche)</span>
</div>
</div>
</div>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-2">Cirugías Previas</p>
<p className="font-body-md text-body-md text-on-surface-variant italic">Ninguna reportada</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-6">

<div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)] flex-1">
<h3 className="font-headline-md text-headline-md text-primary mb-5 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[22px]">stethoscope</span>
                                Evaluación y Examen Físico
                            </h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
<div className="bg-surface-container-low p-3 rounded-lg border border-border-subtle">
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Presión Arterial</p>
<p className="font-headline-md text-headline-md text-on-background">120/80</p>
<p className="text-xs text-secondary font-medium flex items-center mt-1"><span className="material-symbols-outlined text-[14px]">check_circle</span> Normal</p>
</div>
<div className="bg-surface-container-low p-3 rounded-lg border border-border-subtle">
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Fototipo Piel</p>
<p className="font-headline-md text-headline-md text-on-background">III</p>
<p className="text-xs text-on-surface-variant mt-1">Fitzpatrick</p>
</div>
<div className="bg-surface-container-low p-3 rounded-lg border border-border-subtle">
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Peso</p>
<p className="font-headline-md text-headline-md text-on-background">64 <span className="text-sm font-normal text-on-surface-variant">kg</span></p>
</div>
<div className="bg-surface-container-low p-3 rounded-lg border border-border-subtle">
<p className="font-label-xs text-label-xs text-slate-muted uppercase mb-1">Estado General</p>
<p className="font-headline-md text-[18px] text-secondary mt-1 flex items-center gap-1">
                                        Estable
                                    </p>
</div>
</div>
<div className="mb-5">
<label className="block font-label-sm text-label-sm text-primary mb-2">Motivo de Consulta (Main Concern)</label>
<input className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-2.5 text-on-background font-body-md text-body-md focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors" readonly="" type="text" value="Brote agudo de rosácea en mejillas y mentón, acompañado de sensación de ardor."/>
</div>
<div>
<label className="block font-label-sm text-label-sm text-primary mb-2">Notas Clínicas del Examen</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-lg px-4 py-3 text-on-background font-body-md text-body-md focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors resize-none" rows="6">Paciente presenta eritema centrofacial persistente con presencia de telangiectasias finas en alas nasales y región malar bilateral. Se observan escasas pápulas eritematosas, sin pústulas evidentes en este momento. Refiere empeoramiento con cambios de temperatura y estrés. No se observan signos de afectación ocular. Resto del examen cutáneo sin particularidades. Piel con fotodaño leve (Glogau I-II).</textarea>
</div>
</div>

<div className="bg-surface border border-border-subtle rounded-xl p-6 shadow-[0px_4px_12px_rgba(0,0,0,0.02)]">
<h3 className="font-headline-md text-headline-md text-primary mb-5 flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container text-[22px]">prescriptions</span>
                                Plan de Tratamiento
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<p className="font-label-sm text-label-sm text-primary mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">vaccines</span> Procedimientos Recomendados
                                    </p>
<div className="space-y-3">
<label className="flex items-start gap-3 p-3 border border-border-subtle rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
<input checked="" className="mt-1 w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Terapia Láser Vascular (IPL)</p>
<p className="text-xs text-on-surface-variant mt-0.5">Para reducción de telangiectasias y eritema basal.</p>
</div>
</label>
<label className="flex items-start gap-3 p-3 border border-border-subtle rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
<input className="mt-1 w-4 h-4 text-primary bg-surface border-outline-variant rounded focus:ring-primary" type="checkbox"/>
<div>
<p className="font-body-md text-body-md font-medium text-on-background">Peeling Suave para Rosácea</p>
<p className="text-xs text-on-surface-variant mt-0.5">Ácido azelaico 15% (Opcional, según evolución).</p>
</div>
</label>
</div>
</div>

<div className="flex flex-col justify-between">
<div>
<p className="font-label-sm text-label-sm text-primary mb-3 flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">medication</span> Receta (Nueva)
                                        </p>
<div className="bg-surface-container-lowest border border-border-subtle rounded-lg p-3">
<ul className="list-disc list-inside font-body-md text-body-md text-on-background text-sm space-y-2">
<li><strong>Ivermectina crema 1%:</strong> Aplicar una cantidad tamaño guisante por la noche.</li>
<li><strong>Protector Solar Mineral SPF 50+:</strong> Aplicar c/4 hrs estricto.</li>
<li>Suspender temporalmente Metronidazol Gel.</li>
</ul>
</div>
</div>
<div className="mt-4 flex items-center justify-between p-3 bg-status-confirmed/30 border border-status-confirmed rounded-lg">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined">event</span>
</div>
<div>
<p className="font-label-xs text-label-xs text-slate-muted uppercase">Próxima Sesión</p>
<p className="font-body-md text-body-md font-medium text-primary">En 4 semanas (Control IPL)</p>
</div>
</div>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-medium underline">Agendar</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
