import React from "react";

export default function MatrizVisualAgenda() {
  return (
    <>
      <header className="md:hidden sticky top-0 z-50 flex justify-between items-center w-full px-margin-mobile h-16 bg-surface border-b border-border-subtle">
<div className="text-headline-md font-headline-md font-bold text-primary">Dermacare Elite</div>
<div className="flex items-center gap-4">
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200 cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
</header>


<main className="flex-1 flex flex-col h-full overflow-hidden max-w-container-max mx-auto w-full relative">

<header className="px-margin-desktop py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border-subtle bg-background z-10 sticky top-0">
<div>
<h2 className="text-headline-lg font-headline-lg text-primary">Calendario de Turnos</h2>
<p className="text-body-md font-body-md text-on-surface-variant mt-1">Octubre 23 - 29, 2023</p>
</div>
<div className="flex items-center gap-3"><button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
    <span className="material-symbols-outlined text-[18px]">search</span>
    Consultar Agenda
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-surface border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-highest transition-colors">
    <span className="material-symbols-outlined text-[18px]">block</span>
    Bloquear Horario
</button>
<div className="relative">
<select className="appearance-none bg-surface border border-border-subtle rounded-lg py-2 pl-4 pr-10 text-body-md font-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed">
<option>Dr. Alanis (Derm.)</option>
<option>Dra. Silva (Est.)</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
</div>
<div className="relative">
<select className="appearance-none bg-surface border border-border-subtle rounded-lg py-2 pl-4 pr-10 text-body-md font-body-md text-on-surface focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed">
<option>Todos los trat.</option>
<option>Laser CO2</option>
<option>Botox</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]">expand_more</span>
</div>
<button className="bg-primary text-on-primary p-2 rounded-lg hover:opacity-90 transition-opacity ml-2">
<span className="material-symbols-outlined">add</span>
</button>
</div>
</header>

<div className="flex-1 flex overflow-hidden">

<div className="flex-1 overflow-auto no-scrollbar bg-surface-bright relative" id="calendar-matrix">

<div className="sticky top-0 bg-surface-bright z-20 flex border-b border-border-subtle">
<div className="w-16 shrink-0 border-r border-border-subtle bg-surface-bright"></div> 
<div className="flex-1 grid grid-cols-5 min-w-[800px]">
<div className="p-4 text-center border-r border-border-subtle">
<div className="text-label-sm font-label-sm text-on-surface-variant uppercase">Lun</div>
<div className="text-headline-md font-headline-md text-primary mt-1">23</div>
</div>
<div className="p-4 text-center border-r border-border-subtle bg-surface">
<div className="absolute top-[36px] left-2 right-2 h-24 bg-status-reserved/30 border border-status-reserved rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-1">
        <span className="text-label-sm font-label-sm text-on-tertiary-fixed-variant">10:30 - 11:30</span>
        <span className="text-label-xs font-label-xs bg-status-reserved text-on-tertiary-fixed-variant px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">payments</span> Señado
        </span>
    </div>
    <div className="text-body-md font-body-md font-medium text-on-surface truncate">M. Gomez</div>
    <div className="text-label-sm font-label-sm text-on-surface-variant truncate">Laser CO2 - Rostro</div>
</div>
<div className="absolute top-[384px] left-2 right-2 h-24 bg-status-confirmed/30 border border-status-confirmed rounded-lg p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary/10">
    <div className="flex items-center justify-between mb-1">
        <span className="text-label-sm font-label-sm text-on-primary-fixed-variant">13:00 - 14:00</span>
        <span className="text-label-xs font-label-xs bg-status-confirmed text-on-primary-fixed-variant px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">event_available</span> Reservado
        </span>
    </div>
    <div className="text-body-md font-body-md font-medium text-on-surface truncate">R. Blanco</div>
    <div className="text-label-sm font-label-sm text-on-surface-variant truncate">Consulta Inicial</div>
</div>
</div>
<div className="p-4 text-center border-r border-border-subtle">
<div className="text-label-sm font-label-sm text-on-surface-variant uppercase">Mie</div>
<div className="text-headline-md font-headline-md text-primary mt-1">25</div>
</div>
<div className="p-4 text-center border-r border-border-subtle">
<div className="text-label-sm font-label-sm text-on-surface-variant uppercase">Jue</div>
<div className="text-headline-md font-headline-md text-primary mt-1">26</div>
</div>
<div className="p-4 text-center">
<div className="text-label-sm font-label-sm text-on-surface-variant uppercase">Vie</div>
<div className="text-headline-md font-headline-md text-primary mt-1">27</div>
</div>
</div>
</div>

<div className="flex relative min-h-[800px]">

<div className="w-16 shrink-0 border-r border-border-subtle bg-surface-bright flex flex-col">
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">09:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">10:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">11:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">12:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">13:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">14:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">15:00</span>
</div>
<div className="h-24 relative border-b border-transparent">
<span className="absolute top-0 right-2 -mt-2.5 text-label-xs font-label-xs text-on-surface-variant">16:00</span>
</div>
</div>

<div className="absolute inset-0 left-16 right-0 pointer-events-none">
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
<div className="h-24 border-b border-border-subtle w-full"></div>
</div>

<div className="flex-1 grid grid-cols-5 min-w-[800px] relative z-10">

<div className="border-r border-border-subtle relative p-2">

<div className="absolute top-0 left-2 right-2 h-24 bg-status-available/30 border border-status-available rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow group">
<div className="flex items-center justify-between">
<span className="text-label-sm font-label-sm text-secondary-fixed-variant">09:00 - 10:00</span>
<span className="text-label-xs font-label-xs bg-status-available text-on-secondary-fixed-variant px-2 py-0.5 rounded-pill rounded-full">Disponible</span>
</div>
<div className="mt-2 text-body-md font-body-md text-on-surface opacity-0 group-hover:opacity-100 transition-opacity">
                                     Click para registrar
                                 </div>
</div>
</div>

<div className="border-r border-border-subtle relative p-2 bg-surface/50">

<div className="absolute top-[36px] left-2 right-2 h-24 bg-status-reserved/30 border border-status-reserved rounded-lg p-2 cursor-pointer hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-1">
        <span className="text-label-sm font-label-sm text-on-tertiary-fixed-variant">10:30 - 11:30</span>
        <span className="text-label-xs font-label-xs bg-status-reserved text-on-tertiary-fixed-variant px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">payments</span> Señado
        </span>
    </div>
    <div className="text-body-md font-body-md font-medium text-on-surface truncate">M. Gomez</div>
    <div className="text-label-sm font-label-sm text-on-surface-variant truncate">Laser CO2 - Rostro</div>
</div>

<div className="absolute top-[384px] left-2 right-2 h-24 bg-status-confirmed/30 border border-status-confirmed rounded-lg p-2 cursor-pointer shadow-sm hover:shadow-md transition-shadow ring-1 ring-primary/10">
    <div className="flex items-center justify-between mb-1">
        <span className="text-label-sm font-label-sm text-on-primary-fixed-variant">13:00 - 14:00</span>
        <span className="text-label-xs font-label-xs bg-status-confirmed text-on-primary-fixed-variant px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px]">event_available</span> Reservado
        </span>
    </div>
    <div className="text-body-md font-body-md font-medium text-on-surface truncate">R. Blanco</div>
    <div className="text-label-sm font-label-sm text-on-surface-variant truncate">Consulta Inicial</div>
</div>
</div>

<div className="border-r border-border-subtle relative p-2">

<div className="absolute top-[576px] left-2 right-2 h-24 bg-surface-container border border-outline-variant rounded-lg p-2 cursor-not-allowed opacity-80 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.02)_10px,rgba(0,0,0,0.02)_20px)]">
<div className="flex items-center justify-between mb-1">
<span className="text-label-sm font-label-sm text-on-surface-variant">15:00 - 16:00</span>
<span className="text-label-xs font-label-xs bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded-pill rounded-full flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] animate-spin">sync</span> Bloqueado
                                     </span>
</div>
<div className="text-body-md font-body-md text-on-surface-variant truncate">En proceso de pago...</div>
</div>
</div>

<div className="border-r border-border-subtle relative p-2"></div>

<div className="relative p-2"></div>
</div>
</div>
</div>

<aside className="hidden xl:flex flex-col w-80 bg-surface border-l border-border-subtle shadow-[-4px_0_12px_rgba(0,0,0,0.02)] shrink-0 z-30">
<div className="p-6 h-full flex flex-col items-center justify-center text-center"><div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mb-6 text-primary/20">
    <span className="material-symbols-outlined text-[40px]">calendar_today</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-3">Detalles del Turno</h3>
<p className="text-body-md font-body-md text-on-surface-variant px-4 leading-relaxed">
    Seleccione un espacio disponible para agendar un nuevo paciente o haga clic en una reserva para gestionar los detalles.
</p>
<div className="mt-8 w-full border-t border-border-subtle pt-8 px-4">
    <div className="flex items-center gap-3 text-left mb-4">
        <div className="w-3 h-3 rounded-full bg-status-available"></div>
        <span className="text-label-sm font-label-sm text-on-surface-variant">Disponible para agendar</span>
    </div>
    <div className="flex items-center gap-3 text-left mb-4">
        <div className="w-3 h-3 rounded-full bg-status-confirmed"></div>
        <span className="text-label-sm font-label-sm text-on-surface-variant">Turno Reservado</span>
    </div>
    <div className="flex items-center gap-3 text-left">
        <div className="w-3 h-3 rounded-full bg-status-reserved"></div>
        <span className="text-label-sm font-label-sm text-on-surface-variant">Señado / Depósito</span>
    </div>
</div></div>
</aside>
</div>
</main>
    </>
  );
}
