import React from "react";
import { Link } from "react-router-dom";

export default function CatalogoServicios() {
  return (
    <>
      <main className="flex-1 overflow-y-auto bg-background p-margin-mobile md:p-margin-desktop">
<div className="max-w-container-max mx-auto w-full flex flex-col h-full gap-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-on-surface">Service Catalog</h2>
<p className="text-body-md font-body-md text-on-surface-variant mt-1">Manage clinical procedures, pricing, and availability.</p>
</div>
<div className="flex items-center gap-3 w-full md:w-auto">
<div className="relative flex-1 md:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface rounded-lg border border-border-subtle text-body-md font-body-md focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors" placeholder="Search services..." type="text"/>
</div>
<button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg text-label-sm font-label-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow-sm">
<span className="material-symbols-outlined text-[18px]">add</span>
                            Añadir Servicio
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-surface rounded-xl border border-border-subtle p-6 flex flex-col hover:shadow-lg transition-shadow duration-200 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined icon-fill text-[24px]">spa</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-status-available text-on-secondary-fixed-variant border border-status-available">
                                Active
                            </span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Deep Cleansing Facial</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-1 line-clamp-2">Comprehensive pore extraction and hydration treatment.</p>
<div className="flex items-center justify-between pt-4 border-t border-border-subtle mb-4">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-label-sm font-label-sm">60 min</span>
</div>
<div className="text-body-lg font-body-lg font-semibold text-on-surface">$120</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="flex-1 py-1.5 border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-low transition-colors">Edit</button>
<button className="p-1.5 border border-border-subtle rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Deactivate">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl border border-border-subtle p-6 flex flex-col hover:shadow-lg transition-shadow duration-200 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined icon-fill text-[24px]">science</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-status-available text-on-secondary-fixed-variant border border-status-available">
                                Active
                            </span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Chemical Peel (TCA)</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-1 line-clamp-2">Advanced exfoliation for hyperpigmentation and fine lines.</p>
<div className="flex items-center justify-between pt-4 border-t border-border-subtle mb-4">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-label-sm font-label-sm">45 min</span>
</div>
<div className="text-body-lg font-body-lg font-semibold text-on-surface">$180</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="flex-1 py-1.5 border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-low transition-colors">Edit</button>
<button className="p-1.5 border border-border-subtle rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Deactivate">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</div>

<div className="bg-surface-container-low rounded-xl border border-border-subtle p-6 flex flex-col hover:shadow-lg transition-shadow duration-200 group opacity-75">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-surface-variant text-on-surface-variant flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[24px]">local_pharmacy</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-surface-variant text-on-surface-variant border border-border-subtle">
                                Inactive
                            </span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Botulinum Toxin A</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-1 line-clamp-2">Neuromodulator injection for dynamic wrinkle reduction.</p>
<div className="flex items-center justify-between pt-4 border-t border-border-subtle mb-4">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-label-sm font-label-sm">30 min</span>
</div>
<div className="text-body-lg font-body-lg font-semibold text-on-surface">$12/Unit</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="flex-1 py-1.5 border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-high transition-colors">Edit</button>
<button className="p-1.5 border border-border-subtle rounded-lg text-on-surface-variant hover:text-secondary hover:bg-secondary-container transition-colors" title="Activate">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
</button>
</div>
</div>

<div className="bg-surface rounded-xl border border-border-subtle p-6 flex flex-col hover:shadow-lg transition-shadow duration-200 group">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center shrink-0">
<span className="material-symbols-outlined icon-fill text-[24px]">flash_on</span>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-status-available text-on-secondary-fixed-variant border border-status-available">
                                Active
                            </span>
</div>
<h3 className="text-headline-md font-headline-md text-on-surface mb-1">Laser Hair Removal</h3>
<p className="text-body-md font-body-md text-on-surface-variant mb-6 flex-1 line-clamp-2">Diode laser treatment for permanent hair reduction (Small Area).</p>
<div className="flex items-center justify-between pt-4 border-t border-border-subtle mb-4">
<div className="flex items-center gap-1.5 text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">schedule</span>
<span className="text-label-sm font-label-sm">20 min</span>
</div>
<div className="text-body-lg font-body-lg font-semibold text-on-surface">$85</div>
</div>
<div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="flex-1 py-1.5 border border-border-subtle rounded-lg text-label-sm font-label-sm text-on-surface hover:bg-surface-container-low transition-colors">Edit</button>
<button className="p-1.5 border border-border-subtle rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container transition-colors" title="Deactivate">
<span className="material-symbols-outlined text-[18px]">block</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
