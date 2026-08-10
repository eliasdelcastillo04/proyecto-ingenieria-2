import React from "react";
import { Link } from "react-router-dom";

export default function DashboardDermacare() {
  return (
    <>
      <main className="flex-grow p-gutter md:p-margin-desktop bg-background max-w-container-max mx-auto w-full">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Rendimiento General</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Visión global de indicadores clave de la clínica.</p>
</div>
<div className="flex flex-wrap items-center gap-4">
<div className="relative">
<select className="appearance-none bg-surface-container-lowest border border-border-subtle text-on-surface py-2 pl-4 pr-10 rounded-lg focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed font-body-md text-body-md cursor-pointer transition-colors shadow-sm">
<option>Últimos 30 días</option>
<option>Últimos 6 meses</option>
<option>Año hasta la fecha</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</div>
<button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-body-md text-body-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-sm">download</span>
                        Exportar Informe
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

<div className="glass-card flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-secondary-container">person_add</span>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pacientes Nuevos (Mes)</h3>
<div className="flex items-end gap-3">
<span className="font-headline-lg text-headline-lg text-primary">142</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center bg-status-available px-2 py-0.5 rounded-full mb-1">
<span className="material-symbols-outlined text-xs mr-1">trending_up</span> 12%
                        </span>
</div>
</div>

<div className="glass-card flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-primary">event_available</span>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tasa de Ocupación</h3>
<div className="flex items-end gap-3">
<span className="font-headline-lg text-headline-lg text-primary">87%</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center bg-status-available px-2 py-0.5 rounded-full mb-1">
<span className="material-symbols-outlined text-xs mr-1">trending_up</span> 3%
                        </span>
</div>
</div>

<div className="glass-card flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-primary">payments</span>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ingresos Totales</h3>
<div className="flex items-end gap-3">
<span className="font-headline-lg text-headline-lg text-primary">$124.5k</span>
<span className="font-label-sm text-label-sm text-secondary flex items-center bg-status-available px-2 py-0.5 rounded-full mb-1">
<span className="material-symbols-outlined text-xs mr-1">trending_up</span> 8%
                        </span>
</div>
</div>

<div className="glass-card flex flex-col gap-2 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-4xl text-primary">auto_awesome</span>
</div>
<h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Tratamiento Principal</h3>
<div className="flex items-end gap-3">
<span className="font-headline-md text-headline-md text-primary">Láser Fraccionado</span>
</div>
<p className="font-label-xs text-label-xs text-on-surface-variant mt-1">45 citas este mes</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="glass-card lg:col-span-2">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Evolución de Consultas</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="chart-container">
<canvas id="consultasChart"></canvas>
</div>
</div>

<div className="glass-card">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Demografía</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="chart-container flex items-center justify-center">
<canvas id="demografiaChart"></canvas>
</div>
</div>

<div className="glass-card lg:col-span-3">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline-md text-headline-md text-primary">Facturación por Categoría</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-sm">more_horiz</span>
</button>
</div>
<div className="chart-container" style={{height: "350px"}}>
<canvas id="facturacionChart"></canvas>
</div>
</div>
</div>
</main>
    </>
  );
}
