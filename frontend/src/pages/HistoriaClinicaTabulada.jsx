import React from "react";
import { Link } from "react-router-dom";

export default function HistoriaClinicaTabulada() {
  return (
    <>
      <main className="flex-1 ml-0 md:ml-64 flex flex-col min-h-screen relative">

<header className="bg-surface/80 dark:bg-on-background/80 backdrop-blur-md text-primary dark:text-primary-fixed Headlines: font-headline-md text-headline-md. Body: font-body-md text-body-md. Labels: font-label-sm text-label-sm fixed top-0 right-0 w-full md:w-[calc(100%-16rem)] z-40 border-b border-border-subtle dark:border-outline-variant shadow-sm dark:shadow-none flex justify-between items-center h-16 px-4 md:px-8">

<button className="md:hidden text-on-surface-variant p-2 -ml-2">
<span className="material-symbols-outlined">menu</span>
</button>

<div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-border-subtle focus-within:border-primary focus-within:ring-1 focus-within:ring-primary w-96 transition-all duration-200">
<span className="material-symbols-outlined text-outline mr-2 text-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-full placeholder-slate-muted outline-none h-6" placeholder="Search patients, appointments..." type="text"/>
</div>

<div className="flex items-center gap-4 ml-auto">
<button className="text-on-surface-variant dark:text-slate-muted hover:text-primary dark:hover:text-primary-fixed-dim transition-colors Click: opacity-80 transition-opacity p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-on-surface-variant dark:text-slate-muted hover:text-primary dark:hover:text-primary-fixed-dim transition-colors Click: opacity-80 transition-opacity p-2 rounded-full hover:bg-surface-container-low">
<span className="material-symbols-outlined">help_outline</span>
</button>

<div className="w-8 h-8 rounded-full border border-border-subtle overflow-hidden cursor-pointer ml-2 Click: opacity-80 transition-opacity">
<img alt="Dr. Smith Profile" className="w-full h-full object-cover" data-alt="Professional portrait of Dr. Smith, a clinician in a modern office. Shot in a bright, clean, light-mode environment with soft overhead lighting. The doctor is wearing a subtle white coat over smart-casual attire. The background is a slightly out-of-focus premium clinical setting with off-white walls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4jlHJBDR_YM5pD-l-xazeEJCN3i4WAzDivxfi7fXQcgnzKnX1Lolya83KaeZHKr6PFR6TvkNcfkIUpbKwdriYBY4fbwCqzRmV81RkjXDxtzXv98Vk6RYV94qiurBPFsOtTIAmmaxclWxCaNIXuPpNsQXA5w92unztMJ594t6vNsv18iz6FoUBV6WpucvHpQUnRbuojRHKnn9kpHe_NpHHy8CE70ZGUfUlSezeCOW8sboiHG9AphhjSA"/>
</div>
</div>
</header>

<div className="p-4 md:p-8 mt-16 max-w-container-max mx-auto w-full flex-grow">

<div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">María González</h1>
<div className="flex items-center gap-3 mt-1 text-on-surface-variant font-body-md text-body-md">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">fingerprint</span> ID: 8934521</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> 34 años (12/05/1989)</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="flex items-center gap-1 text-secondary"><span className="material-symbols-outlined text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span> Paciente Activo</span>
</div>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 border border-border-subtle text-primary bg-surface rounded-lg font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">print</span> Imprimir
                    </button>
<button className="px-4 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm">edit</span> Editar Ficha
                    </button>
</div>
</div>

<div className="border-b border-border-subtle mb-6 flex overflow-x-auto hide-scrollbar">
<button className="tab-btn px-6 py-3 font-label-sm text-label-sm font-medium text-primary border-b-2 border-primary whitespace-nowrap transition-colors" data-target="tab-datos" onclick="switchTab('tab-datos')">I. Datos Filiatorios</button>
<button className="tab-btn px-6 py-3 font-label-sm text-label-sm font-medium text-on-surface-variant border-b-2 border-transparent hover:text-primary whitespace-nowrap transition-colors" data-target="tab-antecedentes" onclick="switchTab('tab-antecedentes')">II. Antecedentes</button>
<button className="tab-btn px-6 py-3 font-label-sm text-label-sm font-medium text-on-surface-variant border-b-2 border-transparent hover:text-primary whitespace-nowrap transition-colors" data-target="tab-evaluacion" onclick="switchTab('tab-evaluacion')">III. Evaluación</button>
<button className="tab-btn px-6 py-3 font-label-sm text-label-sm font-medium text-on-surface-variant border-b-2 border-transparent hover:text-primary whitespace-nowrap transition-colors" data-target="tab-plan" onclick="switchTab('tab-plan')">IV. Plan</button>
<button className="tab-btn px-6 py-3 font-label-sm text-label-sm font-medium text-on-surface-variant border-b-2 border-transparent hover:text-primary whitespace-nowrap transition-colors" data-target="tab-evolucion" onclick="switchTab('tab-evolucion')">V. Evolución</button>
</div>

<div className="tab-content active" id="tab-datos">
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person</span> Información Personal
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Nombre Completo</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" readonly="" type="text" value="María González Pérez"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Documento de Identidad (DNI)</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="text" value="34.567.890"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Fecha de Nacimiento</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="date" value="1989-05-12"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Teléfono Móvil</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="tel" value="+34 600 123 456"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Correo Electrónico</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="email" value="maria.g@example.com"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Ocupación</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="text" value="Arquitecta"/>
</div>
<div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-3">
<label className="font-label-sm text-label-sm text-on-surface-variant">Dirección Completa</label>
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none" readonly="" type="text" value="Calle Mayor 45, 3º B, 28013 Madrid"/>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-antecedentes">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm">
<h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">medical_information</span> Patologías Previas
                        </h2>
<div className="grid grid-cols-2 gap-4 mb-4">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-5 w-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-background bg-surface-container-lowest transition-colors cursor-pointer" type="checkbox"/>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Hipertensión (HTA)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-5 w-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-background bg-surface-container-lowest transition-colors cursor-pointer" type="checkbox"/>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Diabetes (DBT)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input checked="" className="peer h-5 w-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-background bg-surface-container-lowest transition-colors cursor-pointer" type="checkbox"/>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Hipotiroidismo</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer h-5 w-5 rounded border-outline text-primary focus:ring-primary focus:ring-offset-background bg-surface-container-lowest transition-colors cursor-pointer" type="checkbox"/>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">Asma</span>
</label>
</div>
<div className="flex flex-col gap-1.5 mt-4">
<label className="font-label-sm text-label-sm text-on-surface-variant">Otros Antecedentes Patológicos</label>
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-slate-muted" placeholder="Especifique..." rows="3"></textarea>
</div>
</div>

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm flex flex-col gap-6">
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-error">warning</span> Alergias
                            </h2>
<div className="flex flex-col gap-1.5">
<div className="flex flex-wrap gap-2 mb-2">
<span className="px-3 py-1 bg-error-container text-on-error-container rounded-full font-label-sm text-label-sm flex items-center gap-1">
                                        Penicilina <button className="hover:text-error transition-colors"><span className="material-symbols-outlined text-[14px]">close</span></button>
</span>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors h-10" placeholder="Añadir alergia..." type="text"/>
<button className="px-3 py-2 bg-surface-container-high border border-border-subtle rounded-lg hover:bg-surface-dim transition-colors text-on-surface flex items-center justify-center h-10">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</div>
</div>
<hr className="border-border-subtle"/>
<div>
<h2 className="font-headline-md text-headline-md text-primary mb-4 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">pill</span> Medicación Habitual
                            </h2>
<div className="flex flex-col gap-1.5">
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-slate-muted" placeholder="Indicar medicación actual..." rows="3"></textarea>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-evaluacion">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm col-span-1">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">square_foot</span> Somatometría
                        </h2>
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Peso (kg)</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg pl-3 pr-10 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-right" step="0.1" type="number" value="65.5"/>
<span className="absolute right-3 top-2.5 text-slate-muted font-body-md">kg</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Talla (cm)</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg pl-3 pr-10 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-right" type="number" value="168"/>
<span className="absolute right-3 top-2.5 text-slate-muted font-body-md">cm</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">IMC (Calculado)</label>
<div className="relative">
<input className="w-full bg-surface-container-low border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md font-medium text-secondary text-right focus:outline-none" readonly="" type="text" value="23.2"/>
<span className="absolute left-3 top-2.5 text-secondary font-label-sm">Normopeso</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm col-span-1 lg:col-span-2">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">face</span> Evaluación Dermatológica
                        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Fototipo de Fitzpatrick</label>
<select className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
<option value="">Seleccionar fototipo...</option>
<option value="I">Fototipo I (Pálida, pecas, siempre se quema)</option>
<option value="II">Fototipo II (Clara, se quema fácilmente)</option>
<option selected="" value="III">Fototipo III (Morena clara, se quema moderadamente)</option>
<option value="IV">Fototipo IV (Morena, se quema mínimamente)</option>
<option value="V">Fototipo V (Oscura, rara vez se quema)</option>
<option value="VI">Fototipo VI (Muy oscura, nunca se quema)</option>
</select>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Tipo de Piel (Baumann)</label>
<select className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none">
<option value="">Seleccionar tipo...</option>
<option value="OSNW">OSNW (Grasa, Sensible, No pigmentada, Arrugada)</option>
<option selected="" value="DRPT">DRPT (Seca, Resistente, Pigmentada, Tensa)</option>
<option value="other">Otro...</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface-variant">Hallazgos Físicos / Diagnóstico Presuntivo</label>
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-slate-muted" placeholder="Describa lesiones, localización, distribución..." rows="4"></textarea>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-plan">
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 shadow-sm">
<h2 className="font-headline-md text-headline-md text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-primary">assignment_turned_in</span> Plan Terapéutico Propuesto
                    </h2>
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none placeholder-slate-muted mb-4" placeholder="Detallar plan de tratamiento, indicaciones domiciliarias, productos sugeridos..." rows="6"></textarea>
<div className="flex justify-end">
<button className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
<span className="material-symbols-outlined text-sm">save</span> Guardar Plan
                        </button>
</div>
</div>
</div>

<div className="tab-content" id="tab-evolucion">
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm overflow-hidden flex flex-col">

<div className="p-4 border-b border-border-subtle flex justify-between items-center bg-surface-bright">
<h2 className="font-headline-md text-headline-md text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-primary">history</span> Historial de Sesiones
                        </h2>
<button className="px-4 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-sm text-label-sm font-medium hover:bg-secondary-fixed transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-sm">add</span> Registrar Sesión
                        </button>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-border-subtle">
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium">Fecha</th>
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium">Sesión #</th>
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium">Procedimiento</th>
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium">Material/Parámetros</th>
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium">Observaciones</th>
<th className="px-4 py-3 font-label-sm text-label-sm text-on-surface-variant font-medium text-center">Acciones</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md text-on-surface divide-y divide-border-subtle">

<tr className="hover:bg-surface-bright transition-colors">
<td className="px-4 py-3 whitespace-nowrap">15/10/2023</td>
<td className="px-4 py-3 text-center">
<span className="px-2 py-1 bg-surface-container-highest rounded font-label-xs">02</span>
</td>
<td className="px-4 py-3 font-medium text-primary">Láser CO2 Fraccionado</td>
<td className="px-4 py-3 text-on-surface-variant">Energía 30mJ, Densidad 5%</td>
<td className="px-4 py-3 max-w-xs truncate" title="Buena tolerancia. Eritema leve post-procedimiento.">Buena tolerancia. Eritema leve...</td>
<td className="px-4 py-3 text-center">
<button className="text-slate-muted hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors">
<td className="px-4 py-3 whitespace-nowrap">20/09/2023</td>
<td className="px-4 py-3 text-center">
<span className="px-2 py-1 bg-surface-container-highest rounded font-label-xs">01</span>
</td>
<td className="px-4 py-3 font-medium text-primary">Peeling Químico</td>
<td className="px-4 py-3 text-on-surface-variant">Ácido Mandélico 30% - 5 min</td>
<td className="px-4 py-3 max-w-xs truncate" title="Paciente refiere ligero ardor. Se neutraliza sin complicaciones.">Paciente refiere ligero ardor...</td>
<td className="px-4 py-3 text-center">
<button className="text-slate-muted hover:text-primary transition-colors p-1"><span className="material-symbols-outlined text-sm">edit</span></button>
</td>
</tr>

</tbody>
</table>
</div>

<div className="p-4 border-t border-border-subtle bg-surface-bright flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Mostrando 2 registros</span>
<div className="flex gap-2">
<button className="p-1 rounded text-slate-muted hover:bg-surface-container-high disabled:opacity-50" disabled=""><span className="material-symbols-outlined">chevron_left</span></button>
<button className="p-1 rounded text-on-surface hover:bg-surface-container-high"><span className="material-symbols-outlined">chevron_right</span></button>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
