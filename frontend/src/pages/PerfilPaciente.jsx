import React from "react";
import { Link } from "react-router-dom";

export default function PerfilPaciente() {
  return (
    <>
      <main className="flex-1 p-margin-mobile md:p-margin-desktop max-w-container-max mx-auto w-full animate-fade-in">

<div className="mb-6 flex items-center text-outline">
<a className="hover:text-primary transition-colors flex items-center font-label-sm text-label-sm" href="#">
<span className="material-symbols-outlined text-[16px] mr-1">arrow_back</span>
                    Back to Patients List
                </a>
</div>

<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">

<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-surface-container overflow-hidden border-2 border-surface shadow-sm">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of an elegant middle-aged Hispanic woman with dark hair tied back, looking calm and relaxed. She is standing in a brightly lit, minimalist clinic environment with soft natural lighting coming from a nearby window, creating a serene, premium aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz_7Vje68iyR5TJcIbLoBiWMzFm4FyGO9X1gOdKt0UDoZO5QKaWd3RDQJQrfSAAqxkRpIzAYpU6A-G5CjYTn2YUt_0CHnbUamOsmdUmSZDcYxxWyvouXa2Bn-RnYSDx8oto4zSKsCH9uRURpflo6auiekoK7G8df9_Gt8_NhqQZqDFi2wKbdFGjKzooeXK7jzS5I1q886QFc7NjfAxRAGlT0KllD1h82ydCuKQh3wYSCwVmfP6AnTc6A"/>
</div>
<div>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-1">Lucía Fernández</h2>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-on-surface-variant font-body-md text-body-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">cake</span> 42 años (14 Oct 1981)</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">badge</span> ID: PAC-8924-A</span>
<span className="px-2.5 py-0.5 rounded-full bg-status-available text-on-secondary-fixed-variant font-label-xs text-label-xs">Active Patient</span>
</div>
</div>
</div>

<div className="flex flex-wrap gap-3 w-full lg:w-auto">
<button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-primary font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
                        Modificar
                    </button>
<button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm hover:bg-opacity-90 transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.03)]">
<span className="material-symbols-outlined text-[18px]">event_note</span>
                        Agendar Cita
                    </button>
<button className="w-10 h-10 flex items-center justify-center border border-error-container text-error rounded-lg hover:bg-error-container hover:bg-opacity-20 transition-colors ml-auto lg:ml-0" title="Eliminar Paciente">
<span className="material-symbols-outlined text-[20px]">delete</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<section className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-secondary-container rounded-l-xl"></div>
<h3 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">person_book</span>
                            Información Administrativa
                        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

<div>
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Nombre Completo</label>
<div className="font-body-md text-body-md text-on-surface font-medium">Lucía María Fernández Gómez</div>
</div>

<div>
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">DNI / Pasaporte</label>
<div className="font-body-md text-body-md text-on-surface font-medium">45678912-X</div>
</div>

<div>
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Teléfono Principal</label>
<div className="font-body-md text-body-md text-on-surface font-medium flex items-center gap-2">
                                    +34 600 123 456 
                                    <button className="text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined text-[16px]">content_copy</span></button>
</div>
</div>

<div>
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Correo Electrónico</label>
<div className="font-body-md text-body-md text-on-surface font-medium">lucia.fernandez@example.com</div>
</div>

<div className="md:col-span-2">
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Dirección Residencial</label>
<div className="font-body-md text-body-md text-on-surface font-medium">Calle de Serrano 45, Piso 3A, 28001 Madrid, España</div>
</div>

<div>
<label className="block font-label-sm text-label-sm text-outline mb-1 uppercase tracking-wider">Ocupación</label>
<div className="font-body-md text-body-md text-on-surface font-medium">Directora de Marketing</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<section className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">verified</span>
                                Seguro Médico
                            </h3>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Compañía</label>
<div className="font-body-md text-body-md text-on-surface font-medium">Sanitas (Póliza Premium)</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Número de Póliza</label>
<div className="font-body-md text-body-md text-on-surface font-medium">SAN-993-441-2A</div>
</div>
</div>
</section>

<section className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm">
<h3 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline">emergency</span>
                                Contacto de Emergencia
                            </h3>
<div className="space-y-4">
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Nombre (Relación)</label>
<div className="font-body-md text-body-md text-on-surface font-medium">Carlos Fernández (Hermano)</div>
</div>
<div>
<label className="block font-label-sm text-label-sm text-outline mb-1">Teléfono</label>
<div className="font-body-md text-body-md text-on-surface font-medium">+34 611 987 654</div>
</div>
</div>
</section>
</div>
</div>

<div className="space-y-6">

<section className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm flex flex-col h-full">
<div className="p-6 border-b border-border-subtle">
<h3 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-outline">vital_signs</span>
                                Resumen Clínico
                            </h3>
</div>
<div className="p-6 flex-1 space-y-6">

<div>
<h4 className="font-label-sm text-label-sm text-outline mb-3 uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">history</span> Última Visita
                                </h4>
<div className="bg-surface p-4 rounded-lg border border-surface-container-high relative">
<div className="absolute w-1 h-full bg-outline top-0 left-0 rounded-l-lg opacity-50"></div>
<div className="font-body-md text-body-md font-medium text-on-surface mb-1">Revisión Dermatológica Anual</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mb-2">12 Enero 2024 • Dra. Silva</div>
<div className="font-body-md text-body-md text-on-surface-variant bg-surface-container-low p-2 rounded text-sm mt-2">
                                        Paciente acude para revisión rutinaria de lunares. Sin hallazgos preocupantes. Se recomienda hidratación diaria.
                                    </div>
<a className="inline-block mt-3 font-label-sm text-label-sm text-primary hover:underline" href="#">Ver nota completa →</a>
</div>
</div>

<div>
<h4 className="font-label-sm text-label-sm text-outline mb-3 uppercase tracking-wider flex items-center gap-2">
<span className="material-symbols-outlined text-[16px]">upcoming</span> Próximas Citas
                                </h4>
<div className="space-y-3">

<div className="flex gap-3 p-3 rounded-lg border border-status-confirmed bg-status-confirmed/10">
<div className="flex flex-col items-center justify-center bg-surface-container-lowest border border-status-confirmed rounded-md w-12 h-12 flex-shrink-0">
<span className="font-label-xs text-label-xs text-on-surface-variant leading-none mb-1">ABR</span>
<span className="font-headline-md text-headline-md text-primary leading-none">15</span>
</div>
<div>
<div className="font-body-md text-body-md font-medium text-on-surface">Tratamiento Láser (Sesión 1/3)</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px]">schedule</span> 10:30 AM (45 min)
                                            </div>
</div>
</div>
</div>
</div>

<div>
<h4 className="font-label-sm text-label-sm text-outline mb-3 uppercase tracking-wider">Etiquetas / Alertas</h4>
<div className="flex flex-wrap gap-2">
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-xs text-label-xs flex items-center gap-1 border border-error/20">
<span className="material-symbols-outlined text-[14px]">warning</span> Alergia: Penicilina
                                    </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                                        Piel Sensible
                                    </span>
<span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-xs text-label-xs">
                                        Fototipo II
                                    </span>
</div>
</div>
</div>
<div className="p-4 border-t border-border-subtle bg-surface/50 mt-auto">
<button className="w-full py-2 flex items-center justify-center gap-2 text-primary font-label-sm text-label-sm hover:bg-surface-container-low rounded transition-colors">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
                                Abrir Historia Clínica Completa
                            </button>
</div>
</section>
</div>
</div>
</main>
    </>
  );
}
