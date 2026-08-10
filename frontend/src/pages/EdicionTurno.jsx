import React from "react";
import { Link } from "react-router-dom";

export default function EdicionTurno() {
  return (
    <>
      

<div className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm opacity-60 pointer-events-none" style={{backgroundImage: "url('https://source.unsplash.com/random')"}}></div>
<div className="absolute inset-0 bg-primary/40 backdrop-blur-md pointer-events-none"></div>

<div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-[0px_20px_48px_rgba(0,0,0,0.08)] border border-border-subtle flex flex-col max-h-[90vh] mx-margin-mobile md:mx-margin-desktop z-10 overflow-hidden">

<div className="flex items-center justify-between p-6 border-b border-border-subtle bg-surface-container-lowest">
<h2 className="font-headline-md text-headline-md text-primary m-0">Gestión de Turno</h2>
<button aria-label="Close modal" className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none rounded-full p-1 hover:bg-surface-container-low">
<span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>close</span>
</button>
</div>

<div className="overflow-y-auto p-6 space-y-8 flex-1 custom-scrollbar">

<div className="bg-surface p-4 rounded-lg border border-border-subtle flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 text-on-primary-container font-headline-md text-headline-md">
                    EM
                </div>
<div className="flex-1">
<h3 className="font-headline-md text-headline-md text-on-surface mb-1 text-base">Elena Martinez</h3>
<div className="flex flex-wrap gap-x-4 gap-y-1">
<span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">badge</span> ID: 8934201
                        </span>
<span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">phone</span> +34 612 345 678
                        </span>
<span className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">mail</span> elena.m@example.com
                        </span>
</div>
</div>
</div>

<section>
<h4 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">Modificar Detalles del Turno</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Fecha</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors appearance-none" type="date" value="2023-11-15"/>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">calendar_today</span>
</div>
</div>

<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Hora</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors appearance-none" type="time" value="10:30"/>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">schedule</span>
</div>
</div>

<div className="md:col-span-2">
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Servicio Médico</label>
<div className="relative">
<select className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors appearance-none">
<option>Consulta Dermatología General</option>
<option selected="">Revisión Lunar / Dermatoscopia</option>
<option>Tratamiento Láser</option>
<option>Biopsia Cutánea</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">expand_more</span>
</div>
</div>
</div>
</section>

<section className="space-y-6">

<div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-border-subtle">
<div>
<p className="font-headline-md text-headline-md text-on-surface text-base mb-0.5">Programar Turno de Control</p>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Genera un recordatorio para seguimiento post-tratamiento.</p>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-surface-variant peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-status-confirmed rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
</label>
</div>

<div>
<label className="block font-label-sm text-label-sm text-on-surface mb-1">Notas Adicionales (Internas)</label>
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors resize-none" placeholder="Añadir observaciones sobre el cambio de turno..." rows="3"></textarea>
</div>
</section>
</div>

<div className="p-6 border-t border-border-subtle bg-surface-container-lowest flex items-center justify-between gap-4">
<button className="font-label-sm text-label-sm text-error bg-error-container/30 hover:bg-error-container/50 px-4 py-2 rounded-lg transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-error flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">cancel</span>
                Cancelar Turno
            </button>
<div className="flex gap-3">
<button className="font-label-sm text-label-sm text-on-surface-variant hover:bg-surface-container-low px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-border-subtle">
                    Volver
                </button>
<button className="font-label-sm text-label-sm text-on-primary bg-primary hover:bg-primary-container px-6 py-2 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1">
                    Guardar Cambios
                </button>
</div>
</div>
</div>

    </>
  );
}
