import React from "react";
import { Link } from "react-router-dom";

export default function FormularioEvolucion() {
  return (
    <>
      

<div className="absolute inset-0 z-0 opacity-40 blur-sm pointer-events-none p-margin-desktop grid grid-cols-12 gap-gutter max-w-container-max mx-auto">
<div className="col-span-12">
<h1 className="font-headline-lg text-headline-lg text-primary mb-6">Historia Clínica - Paciente</h1>
<div className="bg-surface border border-border-subtle rounded-lg p-6 mb-6">
<div className="h-4 bg-surface-variant rounded w-1/4 mb-4"></div>
<div className="h-4 bg-surface-variant rounded w-full mb-2"></div>
<div className="h-4 bg-surface-variant rounded w-5/6"></div>
</div>
<div className="grid grid-cols-2 gap-gutter">
<div className="bg-surface border border-border-subtle rounded-lg p-6 h-64"></div>
<div className="bg-surface border border-border-subtle rounded-lg p-6 h-64"></div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 flex items-center justify-center p-margin-mobile md:p-margin-desktop">

<div aria-labelledby="modal-title" aria-modal="true" className="bg-surface rounded-xl shadow-[0px_20px_48px_rgba(0,0,0,0.08)] border border-border-subtle w-full max-w-3xl max-h-[921px] flex flex-col z-50 overflow-hidden" role="dialog">

<div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle bg-surface-bright">
<div>
<h2 className="font-headline-md text-headline-md text-primary" id="modal-title">Registrar Evolución Clínica</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1">Paciente: Ana Martínez | Fecha: 24 Oct 2023</p>
</div>
<button aria-label="Close modal" className="text-outline hover:text-on-surface-variant transition-colors p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-8 bg-surface">

<section>
<h3 className="font-body-lg text-body-lg text-primary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline" data-icon="medical_services">medical_services</span>
                        Detalles del Procedimiento
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="tipo_procedimiento">Tipo de Procedimiento</label>
<select className="w-full bg-surface border-border-subtle rounded text-on-surface focus:ring-1 focus:ring-primary focus:border-primary py-2 px-3" id="tipo_procedimiento">
<option>Láser Fraccionado CO2</option>
<option>Peeling Químico</option>
<option>Aplicación Toxina Botulínica</option>
<option>Control Rutina</option>
</select>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-on-surface-variant mb-1" htmlFor="zona_tratada">Zona Tratada</label>
<input className="w-full bg-surface border-border-subtle rounded text-on-surface focus:ring-1 focus:ring-primary focus:border-primary py-2 px-3" id="zona_tratada" type="text" value="Rostro completo, énfasis en región periorbital"/>
</div>
</div>
</section>

<section>
<h3 className="font-body-lg text-body-lg text-primary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline" data-icon="vaccines">vaccines</span>
                        Materiales Utilizados
                    </h3>
<div className="bg-surface-container-low p-4 rounded border border-border-subtle">
<div className="flex flex-wrap gap-2 mb-3">
<span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full">
                                Anestesia Tópica 5%
                                <button className="hover:opacity-80"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
<span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full">
                                Suero Fisiológico 10ml
                                <button className="hover:opacity-80"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
<span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-full">
                                Gasa Estéril 10x10
                                <button className="hover:opacity-80"><span className="material-symbols-outlined text-[14px]" data-icon="close">close</span></button>
</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-surface border-border-subtle rounded text-on-surface focus:ring-1 focus:ring-primary focus:border-primary py-1.5 px-3 font-body-md text-body-md" placeholder="Añadir material..." type="text"/>
<button className="px-4 py-1.5 bg-surface-variant text-on-surface-variant font-label-sm text-label-sm rounded border border-border-subtle hover:bg-surface-container-high transition-colors">Añadir</button>
</div>
</div>
</section>

<section>
<h3 className="font-body-lg text-body-lg text-primary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline" data-icon="edit_note">edit_note</span>
                        Observaciones Médicas
                    </h3>
<textarea className="w-full bg-surface border-border-subtle rounded text-on-surface focus:ring-1 focus:ring-primary focus:border-primary py-3 px-4 resize-none font-body-md text-body-md" placeholder="Describa el desarrollo del procedimiento, respuesta del paciente, complicaciones (si las hubo) y recomendaciones post-operatorias..." rows="5"></textarea>
</section>

<section>
<h3 className="font-body-lg text-body-lg text-primary font-medium mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-outline" data-icon="draw">draw</span>
                        Firmas
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border-2 border-dashed border-border-subtle rounded-lg p-6 flex flex-col items-center justify-center text-center bg-surface-container-low min-h-[120px] cursor-pointer hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-outline mb-2" data-icon="signature">signature</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Firma del Profesional</span>
<span className="font-label-xs text-label-xs text-outline mt-1">Dr. Smith</span>
</div>
<div className="border-2 border-dashed border-border-subtle rounded-lg p-6 flex flex-col items-center justify-center text-center bg-surface-container-low min-h-[120px] opacity-60">
<span className="font-label-sm text-label-sm text-on-surface-variant">Firma del Paciente (Opcional)</span>
</div>
</div>
</section>
</div>

<div className="px-6 py-4 border-t border-border-subtle bg-surface-bright flex justify-end gap-4">
<button className="px-6 py-2 rounded font-label-sm text-label-sm border border-border-subtle text-on-surface hover:bg-surface-container-low transition-colors">
                    Cancelar
                </button>
<button className="px-6 py-2 rounded font-label-sm text-label-sm bg-primary text-on-primary hover:bg-primary-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="save">save</span>
                    Guardar Evolución
                </button>
</div>
</div>
</div>

    </>
  );
}
