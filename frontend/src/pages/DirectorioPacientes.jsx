import React from "react";

export default function DirectorioPacientes() {
  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center w-full px-margin-desktop h-16 max-w-container-max mx-auto bg-surface border-b border-border-subtle flat no shadows">

<div className="flex items-center gap-4 lg:hidden">
<button className="text-on-surface-variant hover:text-primary transition-colors duration-200">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
<span className="text-headline-md font-headline-md font-bold text-primary">Dermacare Elite</span>
</div>

<div className="hidden md:flex flex-1 max-w-md ml-4">
<div className="relative w-full">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]" data-icon="search">search</span>
<input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-border-subtle rounded-lg text-body-md font-body-md focus:outline-none focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed transition-colors placeholder:text-on-primary-container" placeholder="Buscar Paciente" type="text" />
</div>
</div>

<div className="flex items-center gap-4 ml-auto">
<div className="flex items-center gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:opacity-70">
<span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
</button>
</div>
<button className="hidden sm:block bg-primary text-on-primary px-4 py-2 rounded-lg text-label-sm font-label-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer active:opacity-70">
                    New Appointment
                </button>
</div>
</header>

<main className="flex-1 overflow-y-auto p-gutter lg:p-margin-desktop bg-background">
<div className="max-w-container-max mx-auto">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface">Patients Directory</h2>
<p className="text-body-md font-body-md text-on-surface-variant mt-1">Manage and view all registered patient records.</p>
</div>
<button className="flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-label-sm text-label-sm font-bold hover:shadow-md transition-all self-start sm:self-auto">
<span className="material-symbols-outlined" data-icon="person_add" style={{fontVariationSettings: "'FILL' 1"}}>person_add</span>
                        Cargar Paciente
                    </button>
</div>

<div className="bg-surface rounded-xl border border-border-subtle shadow-sm overflow-hidden">

<div className="p-4 border-b border-border-subtle bg-surface-container-lowest flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]" data-icon="filter_list">filter_list</span>
<span className="">Filter by:</span>
<select className="bg-transparent border-none text-on-surface font-medium focus:ring-0 cursor-pointer">
<option>All Statuses</option>
<option>Active</option>
<option>Inactive</option>
</select>
</div>
<div className="text-label-sm font-label-sm text-on-surface-variant">
                            Showing 1-10 of 124 patients
                        </div>
</div>

<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-border-subtle">
<th className="p-4 text-label-sm font-label-sm text-on-surface-variant font-semibold">Patient Name</th>
<th className="p-4 text-label-sm font-label-sm text-on-surface-variant font-semibold">Patient ID</th>
<th className="p-4 text-label-sm font-label-sm text-on-surface-variant font-semibold">Last Visit</th>
<th className="p-4 text-label-sm font-label-sm text-on-surface-variant font-semibold">Status</th>
<th className="p-4 text-label-sm font-label-sm text-on-surface-variant font-semibold text-right">Actions</th>
</tr>
</thead>
<tbody className="text-body-md font-body-md divide-y divide-border-subtle">

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-fixed-dim text-on-primary-fixed flex items-center justify-center font-bold text-label-sm">EM</div>
<span className="font-medium text-on-surface">Elena Martinez</span>
</div>
</td>
<td className="p-4 text-on-surface-variant">#PT-8842</td>
<td className="p-4 text-on-surface-variant">Oct 12, 2023</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-status-available text-secondary">Active</span>
</td>
<td className="p-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<img className="w-8 h-8 rounded-full object-cover" data-alt="A detailed headshot photo of an elderly caucasian man in a well-lit studio. He has a warm expression. High-key lighting, minimalist modern medical aesthetic. Light mode UI style context." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB78RaoiyqLvBcctzVmqEFZZZqDhUIzWh2yFKL_EtDW72tXDkfsrzdwrbie3jdf48dZtP5JybGd0XUonzLkrQY3vGVAuZIlMBxPioTIJkx4-mhppnniPIIhotfOTpHLaS3NB_-HHvTZcizKEbqLBLOtaaeFHBxDqWcHScY75bx-QUEMNH502JJZxKs-J34BjNd8vUOd-GlqG7VGSP0Cda6yhscD6Y_wlf4ysKnVn_Oa95bbMglWAFZW6A" />
<span className="font-medium text-on-surface">Robert Chen</span>
</div>
</td>
<td className="p-4 text-on-surface-variant">#PT-7710</td>
<td className="p-4 text-on-surface-variant">Sep 28, 2023</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-status-available text-secondary">Active</span>
</td>
<td className="p-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-lowest transition-colors group">
<td className="p-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center font-bold text-label-sm">SJ</div>
<span className="font-medium text-on-surface">Sarah Jenkins</span>
</div>
</td>
<td className="p-4 text-on-surface-variant">#PT-9012</td>
<td className="p-4 text-on-surface-variant">Aug 05, 2023</td>
<td className="p-4">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-label-sm font-label-sm bg-status-reserved text-on-tertiary-container">Pending Review</span>
</td>
<td className="p-4 text-right">
<button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded hover:bg-surface-container-high opacity-0 group-hover:opacity-100 focus:opacity-100">
<span className="material-symbols-outlined text-[20px]" data-icon="more_vert">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
    </>
  );
}
