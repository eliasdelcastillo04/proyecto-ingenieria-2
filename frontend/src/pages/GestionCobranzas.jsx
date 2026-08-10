import React from "react";
import { Link } from "react-router-dom";

export default function GestionCobranzas() {
  return (
    <>
      <main className="flex-1 flex flex-col md:ml-64 h-screen overflow-hidden bg-background">

<header className="bg-background dark:bg-surface flex justify-between items-center w-full px-margin-desktop h-16 sticky top-0 z-30 border-b border-outline-variant dark:border-outline flat no shadows">

<div className="flex items-center gap-4">
<button className="md:hidden p-2 -ml-2 rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<div className="md:hidden font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
                    Dermacare Elite
                </div>

<div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-1.5 border border-border-subtle focus-within:border-status-confirmed focus-within:ring-1 focus-within:ring-status-confirmed transition-all w-64 lg:w-96">
<span className="material-symbols-outlined text-outline text-xl mr-2" data-icon="search">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full text-on-surface placeholder:text-outline p-0" placeholder="Buscar pacientes, pagos..." type="text"/>
</div>
</div>

<div className="flex items-center gap-3">
<button className="p-2 rounded-full text-on-surface-variant dark:text-outline hover:bg-surface-container-low dark:hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-80 relative">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full border border-background"></span>
</button>
<div className="w-8 h-8 rounded-full overflow-hidden border border-border-subtle ml-2 cursor-pointer active:opacity-80 hover:ring-2 hover:ring-primary-container transition-all">
<img alt="Dr. Smith Profile" className="w-full h-full object-cover" data-alt="A highly detailed close-up portrait of a professional female doctor in a crisp white lab coat, standing in a brightly lit modern medical clinic. The lighting is soft and natural, creating a clean, trustworthy, and clinical light-mode aesthetic. The color palette features whites, subtle greys, and a hint of soft blue. The mood is calm and expert." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbs0dmxs3a5SypNq0cVjSE-h4Xj7ddkci_rBzzs411qKdh95JOb3OJz3HMRXu0YD69G0Ss_-WySP62f73lDVHYZPJlgiovwl6qA2HSnYQ37SI63Hu36U3iJTeMkWwoOBTj1w33QY55CTm1w779KkVZt5JujmPMZOw7dQcHGu4XY4nowRgzP9GE0zBPOrA-7PWmI6rtsx6uSgRX1ufJ7hH59CSKxhxFqXWliB_Xcizn4Pn-3wGjNBR34Q"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">
<div className="max-w-container-max mx-auto space-y-6">

<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2">
<div>
<h1 className="font-headline-lg text-headline-lg md:text-headline-lg font-bold text-primary tracking-tight">Gestión de Cobranzas y Pagos</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Monitoreo de señas, pagos finales y estado de cuenta de pacientes.</p>
</div>
<div className="flex items-center gap-3">
<button className="bg-surface-container-low text-primary font-label-sm text-label-sm font-medium px-4 py-2 rounded-lg border border-border-subtle hover:bg-surface-container transition-colors flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]" data-icon="download">download</span>
                            Exportar
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-4">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Total Recaudado Hoy</span>
<div className="w-8 h-8 rounded-full bg-status-available/20 flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-sm" data-icon="trending_up">trending_up</span>
</div>
</div>
<div>
<div className="font-headline-lg text-headline-lg font-bold text-primary">$452,000</div>
<div className="font-label-xs text-label-xs text-secondary mt-1 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]" data-icon="arrow_upward">arrow_upward</span>
                                +12% vs ayer
                            </div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-status-reserved/10 rounded-bl-full -mr-4 -mt-4"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Pendientes de Seña</span>
<div className="w-8 h-8 rounded-full bg-status-reserved/30 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-container text-sm" data-icon="hourglass_top">hourglass_top</span>
</div>
</div>
<div className="relative z-10">
<div className="font-headline-lg text-headline-lg font-bold text-primary">8</div>
<div className="font-label-xs text-label-xs text-on-surface-variant mt-1">Requieren verificación M.Pago</div>
</div>
</div>
<div className="bg-white rounded-xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-error-container/20 rounded-bl-full -mr-4 -mt-4"></div>
<div className="flex items-center justify-between mb-4 relative z-10">
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Pendientes de Pago Final</span>
<div className="w-8 h-8 rounded-full bg-error-container/50 flex items-center justify-center">
<span className="material-symbols-outlined text-on-error-container text-sm" data-icon="warning">warning</span>
</div>
</div>
<div className="relative z-10">
<div className="font-headline-lg text-headline-lg font-bold text-primary">12</div>
<div className="font-label-xs text-label-xs text-on-error-container mt-1">Tratamientos completados sin saldar</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
