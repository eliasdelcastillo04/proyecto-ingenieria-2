import React from "react";
import { Link } from "react-router-dom";

export default function ConfiguracionCatalogo() {
  return (
    <>
      <main className="flex-1 p-margin-mobile md:p-margin-desktop bg-surface max-w-container-max mx-auto w-full">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
<div>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">Catálogo de Servicios y Tratamientos</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Manage clinical offerings, pricing, and availability.</p>
</div>
<button className="bg-primary text-on-primary font-label-sm text-label-sm py-2.5 px-5 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">add</span>
<span>Añadir Servicio</span>
</button>
</div>

<div className="md:hidden flex flex-col gap-3 mb-6">
<div className="flex items-center bg-surface-container-lowest border border-border-subtle rounded-lg px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md font-body-md w-full placeholder:text-on-surface-variant text-on-surface px-2" placeholder="Consultar Servicios..." type="text"/>
</div>
<button className="flex items-center justify-center gap-2 px-4 py-2 border border-border-subtle rounded-lg text-on-surface font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
                    Filtros
                </button>
</div>

<div className="hidden md:flex items-center gap-2 mb-6 border-b border-border-subtle pb-2">
<button className="px-4 py-2 font-label-sm text-label-sm text-primary font-semibold border-b-2 border-primary -mb-[10px]">All Services</button>
<button className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Dermatology</button>
<button className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Aesthetics</button>
<button className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors">Laser Therapy</button>
<div className="flex-1"></div>
<button className="flex items-center gap-2 px-3 py-1.5 border border-border-subtle rounded text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[16px]">tune</span>
                    Filter
                </button>
</div>

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-border-subtle">
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Service Name</th>
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Category</th>
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider text-right">Price</th>
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Duration</th>
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider">Status</th>
<th className="py-3 px-4 font-label-xs text-label-xs text-on-surface-variant uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-border-subtle">

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-4">
<div className="font-medium text-on-surface">General Dermatology Consultation</div>
<div className="text-on-surface-variant text-[12px] mt-0.5 line-clamp-1">Initial assessment and diagnosis of skin conditions.</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Dermatology</td>
<td className="py-3 px-4 text-right font-medium text-on-surface">$150.00</td>
<td className="py-3 px-4 text-on-surface-variant">30 min</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-status-available text-on-secondary-fixed-variant font-label-xs text-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                                        Active
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors" title="Modificar Servicio">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error-container rounded transition-colors" title="Desactivar Servicio">
<span className="material-symbols-outlined text-[18px]">visibility_off</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-4">
<div className="font-medium text-on-surface">Laser Hair Removal (Full Legs)</div>
<div className="text-on-surface-variant text-[12px] mt-0.5 line-clamp-1">Diode laser treatment for long-term hair reduction.</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Laser Therapy</td>
<td className="py-3 px-4 text-right font-medium text-on-surface">$300.00</td>
<td className="py-3 px-4 text-on-surface-variant">45 min</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-status-available text-on-secondary-fixed-variant font-label-xs text-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                                        Active
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors" title="Modificar Servicio">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error-container rounded transition-colors" title="Desactivar Servicio">
<span className="material-symbols-outlined text-[18px]">visibility_off</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group bg-surface-container-low/30">
<td className="py-3 px-4">
<div className="font-medium text-on-surface-variant">Chemical Peel (Advanced)</div>
<div className="text-on-surface-variant text-[12px] mt-0.5 line-clamp-1">Deep exfoliation for acne scars and hyperpigmentation.</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Aesthetics</td>
<td className="py-3 px-4 text-right font-medium text-on-surface-variant">$250.00</td>
<td className="py-3 px-4 text-on-surface-variant">60 min</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-xs text-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-outline mr-1.5"></span>
                                        Inactive
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors" title="Modificar Servicio">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-primary-container rounded transition-colors" title="Activar Servicio">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors group">
<td className="py-3 px-4">
<div className="font-medium text-on-surface">Botox Injections (Per Area)</div>
<div className="text-on-surface-variant text-[12px] mt-0.5 line-clamp-1">Neuromodulator treatment for dynamic wrinkles.</div>
</td>
<td className="py-3 px-4 text-on-surface-variant">Aesthetics</td>
<td className="py-3 px-4 text-right font-medium text-on-surface">$200.00</td>
<td className="py-3 px-4 text-on-surface-variant">20 min</td>
<td className="py-3 px-4">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-status-available text-on-secondary-fixed-variant font-label-xs text-label-xs">
<span className="w-1.5 h-1.5 rounded-full bg-secondary mr-1.5"></span>
                                        Active
                                    </span>
</td>
<td className="py-3 px-4 text-right">
<div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded transition-colors" title="Modificar Servicio">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error-container rounded transition-colors" title="Desactivar Servicio">
<span className="material-symbols-outlined text-[18px]">visibility_off</span>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="px-4 py-3 border-t border-border-subtle flex items-center justify-between bg-surface-container-lowest">
<div className="font-body-md text-body-md text-on-surface-variant text-sm">
                        Showing <span className="font-medium text-on-surface">1</span> to <span className="font-medium text-on-surface">4</span> of <span className="font-medium text-on-surface">24</span> services
                    </div>
<div className="flex items-center gap-1">
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container-low disabled:opacity-50" disabled="">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button className="p-1 rounded text-on-surface-variant hover:bg-surface-container-low">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
</div>
</main>
    </>
  );
}
