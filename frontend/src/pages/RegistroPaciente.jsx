import React from "react";
import { Link } from "react-router-dom";

export default function RegistroPaciente() {
  return (
    <>
      <main className="flex-1 overflow-y-auto bg-background p-margin-mobile md:p-margin-desktop">
<div className="max-w-4xl mx-auto space-y-8 pb-24 lg:pb-8">
<header className="flex items-center justify-between border-b border-border-subtle pb-6">
<div>
<h1 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary tracking-tight">Registro de Nuevo Paciente</h1>
<p className="text-body-md font-body-md text-on-surface-variant mt-1">Ingrese los datos clínicos y filiatorios para crear un nuevo expediente.</p>
</div>
</header>
<form className="space-y-8">

<section className="bg-surface rounded-xl border border-border-subtle shadow-sm p-6 space-y-6 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
<h3 className="text-headline-md font-headline-md text-primary flex items-center gap-2 border-b border-border-subtle pb-4">
<span className="material-symbols-outlined text-secondary" data-icon="badge">badge</span>
                            I. Datos Filiatorios y Contacto
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
<div className="space-y-1 lg:col-span-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="fullName">Nombre Completo</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="fullName" placeholder="Ej. Ana García Pérez" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="dni">DNI / Documento</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="dni" placeholder="Sin puntos ni espacios" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="age">Edad</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="age" placeholder="Años" type="number"/>
</div>
<div className="space-y-1 lg:col-span-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="profession">Profesión / Ocupación</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="profession" placeholder="Ocupación actual" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="phone">Teléfono Móvil</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="phone" placeholder="+34 600 000 000" type="tel"/>
</div>
<div className="space-y-1 lg:col-span-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="email">Correo Electrónico</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="email" placeholder="correo@ejemplo.com" type="email"/>
</div>
<div className="space-y-1 lg:col-span-3">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="address">Dirección de Residencia</label>
<input className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors" id="address" placeholder="Calle, Número, Ciudad" type="text"/>
</div>
</div>
</section>

<section className="bg-surface rounded-xl border border-border-subtle shadow-sm p-6 space-y-6">
<h3 className="text-headline-md font-headline-md text-primary flex items-center gap-2 border-b border-border-subtle pb-4">
<span className="material-symbols-outlined text-secondary" data-icon="medical_information">medical_information</span>
                            II. Antecedentes Médicos
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface-container-low rounded-lg p-5 border border-border-subtle">
<h4 className="text-label-sm font-label-sm text-primary mb-4 font-semibold uppercase tracking-wider">Patológicos</h4>
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Hipertensión Arterial (HTA)</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Diabetes Mellitus (DBT)</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Hipotiroidismo</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Enf. Autoinmunes</span>
</label>
</div>
</div>

<div className="bg-error-container/20 rounded-lg p-5 border border-error/20">
<h4 className="text-label-sm font-label-sm text-error mb-4 font-semibold uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]" data-icon="warning">warning</span> Alergias
                                </h4>
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-error/40 text-error focus:ring-error bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-error transition-colors">Anestesia Local</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-error/40 text-error focus:ring-error bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-error transition-colors">Huevo / Derivados</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-error/40 text-error focus:ring-error bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-error transition-colors">Pescado / Mariscos</span>
</label>
<div className="mt-3 pt-3 border-t border-error/20">
<input className="w-full bg-surface-container-lowest border-error/30 rounded text-label-sm font-label-sm placeholder:text-error/50 focus:ring-error focus:border-error py-1 px-2" placeholder="Otras alergias..." type="text"/>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-lg p-5 border border-border-subtle">
<h4 className="text-label-sm font-label-sm text-primary mb-4 font-semibold uppercase tracking-wider">Tóxicos y Hábitos</h4>
<div className="space-y-3">
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Tabaquismo</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Consumo de Alcohol</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<input checked="" className="mt-1 rounded border-outline-variant text-secondary focus:ring-secondary bg-surface-container-lowest" type="checkbox"/>
<span className="text-body-md font-body-md text-on-surface group-hover:text-primary transition-colors">Uso de Fotoprotector (SPF)</span>
</label>
</div>
</div>
</div>
</section>

<section className="bg-surface rounded-xl border border-border-subtle shadow-sm p-6 space-y-6">
<h3 className="text-headline-md font-headline-md text-primary flex items-center gap-2 border-b border-border-subtle pb-4">
<span className="material-symbols-outlined text-secondary" data-icon="face_retouching_natural">face_retouching_natural</span>
                            III. Tratamientos Estéticos Previos
                        </h3>
<div className="space-y-2">
<label className="block text-label-sm font-label-sm text-on-surface-variant" htmlFor="prevTreatments">Describa tratamientos realizados (Toxina Botulínica, Ácido Hialurónico, Láser, etc.) e historial de complicaciones si las hubiera.</label>
<textarea className="w-full bg-surface-container-lowest border-border-subtle rounded-lg text-body-md font-body-md focus:ring-secondary focus:border-secondary transition-colors resize-y" id="prevTreatments" placeholder="Detalles de tratamientos previos..." rows="4"></textarea>
</div>
</section>

<div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-border-subtle sticky bottom-0 bg-background/80 backdrop-blur-md py-4 z-20">
<button className="w-full sm:w-auto px-6 py-2.5 border border-border-subtle rounded-lg text-body-md font-body-md text-on-surface-variant hover:bg-surface-container-low transition-colors font-medium" type="button">
                            Cancelar
                        </button>
<button className="w-full sm:w-auto px-6 py-2.5 bg-primary text-on-primary rounded-lg text-body-md font-body-md font-semibold hover:bg-primary/90 transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
                            Guardar y Registrar
                        </button>
</div>
</form>
</div>
</main>
    </>
  );
}
