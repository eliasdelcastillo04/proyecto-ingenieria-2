import React from "react";
import { Link } from "react-router-dom";

export default function HistoriaClinicaRegistro() {
  return (
    <>
      <main className="flex-1 w-full max-w-[1280px] mx-auto md:ml-64 mt-16 md:mt-24 p-margin-mobile md:p-margin-desktop flex flex-col lg:flex-row gap-8 relative">

<aside className="w-full lg:w-1/4 flex-shrink-0">
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-6 sticky top-28 shadow-sm">
<div className="flex flex-col items-center text-center mb-6">
<img alt="Patient Photo" className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-surface-container-highest" data-alt="A portrait of a young adult female patient with clear skin, natural lighting, looking slightly off-camera with a neutral, calm expression. She has dark hair pulled back neatly. The background is a soft, minimalist medical setting with neutral beige and white tones, conveying a sense of premium clinical care." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9urY6PL-G3qN9G_QO2d8bFy6RU9gEkW4Am26ZbxhL4l86VbpGSOTr9QxCYI7w1WCO-2WOTYto_lluZ-BeMaHt-gIId3izm3L22ypSdSLohBWnk8RBa8qDpajxPAcaf-UCa5YHInQTHV6rEaiJHsjgYxl5GFpRc3oihKJ0QEK2RKti3BUqiHKdXATa2unmbFvRz9nbAKcH1EibT7FycSR5D_UGJb9DFp_gnYhQRUfH1rk-t6EjNHp1wg"/>
<h2 className="font-headline-md text-headline-md text-primary">María García</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">ID: P-9824</p>
<div className="mt-3 bg-status-confirmed text-primary px-3 py-1 rounded-full font-label-sm text-label-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span>
                        Active Patient
                    </div>
</div>
<div className="space-y-4 font-body-md text-body-md text-on-surface-variant border-t border-border-subtle pt-4">
<div className="flex justify-between">
<span className="text-slate-muted">Age</span>
<span className="font-medium text-primary">32</span>
</div>
<div className="flex justify-between">
<span className="text-slate-muted">Blood Type</span>
<span className="font-medium text-primary">O+</span>
</div>
<div className="flex justify-between">
<span className="text-slate-muted">Last Visit</span>
<span className="font-medium text-primary">12 Oct 2023</span>
</div>
</div>
</div>

<nav className="hidden lg:block mt-8 sticky top-[24rem]">
<h3 className="font-label-sm text-label-sm text-slate-muted uppercase tracking-wider mb-4 px-2">Sections</h3>
<ul className="space-y-1 border-l-2 border-border-subtle pl-4" id="section-nav">
<li><a className="nav-link active block py-2 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors -ml-[18px] pl-4 border-l-2 border-transparent" href="#datos">Datos Filiatorios</a></li>
<li><a className="nav-link block py-2 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors -ml-[18px] pl-4 border-l-2 border-transparent" href="#antecedentes">Antecedentes</a></li>
<li><a className="nav-link block py-2 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors -ml-[18px] pl-4 border-l-2 border-transparent" href="#evaluacion">Evaluación</a></li>
<li><a className="nav-link block py-2 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors -ml-[18px] pl-4 border-l-2 border-transparent" href="#plan">Plan</a></li>
<li><a className="nav-link block py-2 font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors -ml-[18px] pl-4 border-l-2 border-transparent" href="#evolucion">Evolución</a></li>
</ul>
</nav>
</aside>

<div className="flex-1 space-y-8 pb-32">

<section className="scroll-mt-28" id="datos">
<details className="group bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm open:shadow-md transition-shadow duration-200" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">badge</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Datos Filiatorios</h2>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-open:-rotate-180 transition-transform duration-300">expand_more</span>
</summary>
<div className="p-6 pt-0 border-t border-border-subtle mt-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">

<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-slate-muted mb-1">Full Name</label>
<input className="bg-transparent border-0 border-b border-border-subtle focus:ring-0 focus:border-status-confirmed py-2 px-0 font-body-md text-body-md text-primary transition-colors" type="text" value="María Antonieta García Lopez"/>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-slate-muted mb-1">Date of Birth</label>
<input className="bg-transparent border-0 border-b border-border-subtle focus:ring-0 focus:border-status-confirmed py-2 px-0 font-body-md text-body-md text-primary transition-colors" type="date" value="1991-05-14"/>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-slate-muted mb-1">Email</label>
<input className="bg-transparent border-0 border-b border-border-subtle focus:ring-0 focus:border-status-confirmed py-2 px-0 font-body-md text-body-md text-primary transition-colors" type="email" value="m.garcia@example.com"/>
</div>
<div className="flex flex-col">
<label className="font-label-sm text-label-sm text-slate-muted mb-1">Phone</label>
<input className="bg-transparent border-0 border-b border-border-subtle focus:ring-0 focus:border-status-confirmed py-2 px-0 font-body-md text-body-md text-primary transition-colors" type="tel" value="+34 612 345 678"/>
</div>
<div className="flex flex-col md:col-span-2">
<label className="font-label-sm text-label-sm text-slate-muted mb-1">Address</label>
<input className="bg-transparent border-0 border-b border-border-subtle focus:ring-0 focus:border-status-confirmed py-2 px-0 font-body-md text-body-md text-primary transition-colors" type="text" value="Calle Mayor 12, 3B, Madrid, 28013"/>
</div>
</div>
</div>
</details>
</section>

<section className="scroll-mt-28" id="antecedentes">
<details className="group bg-surface-container-lowest border border-border-subtle rounded-xl shadow-sm open:shadow-md transition-shadow duration-200" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined">medical_information</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary">Antecedentes</h2>
</div>
<span className="material-symbols-outlined text-on-surface-variant group-open:-rotate-180 transition-transform duration-300">expand_more</span>
</summary>
<div className="p-6 pt-0 border-t border-border-subtle mt-2">
<div className="mt-6 mb-4">
<h3 className="font-label-sm text-label-sm text-primary font-bold mb-3 uppercase tracking-wide">Pathological History</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 custom-scrollbar">
<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-border-subtle">
<input checked="" className="mt-1 text-primary focus:ring-primary border-outline-variant rounded" type="checkbox"/>
<div>
<span className="font-body-md text-body-md font-medium text-primary block">Atopic Dermatitis</span>
<span className="font-label-sm text-label-sm text-slate-muted">Diagnosed 2015</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-border-subtle">
<input className="mt-1 text-primary focus:ring-primary border-outline-variant rounded" type="checkbox"/>
<div>
<span className="font-body-md text-body-md font-medium text-primary block">Psoriasis</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-border-subtle">
<input className="mt-1 text-primary focus:ring-primary border-outline-variant rounded" type="checkbox"/>
<div>
<span className="font-body-md text-body-md font-medium text-primary block">Rosacea</span>
</div>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer border border-transparent hover:border-border-subtle">
<input checked="" className="mt-1 text-primary focus:ring-primary border-outline-variant rounded" type="checkbox"/>
<div>
<span className="font-body-md text-body-md font-medium text-primary block">Allergies (Med)</span>
<span className="font-label-sm text-label-sm text-slate-muted">Penicillin</span>
</div>
</label>
</div>
</div>
<div className="mt-6">
<label className="font-label-sm text-label-sm text-primary font-bold mb-2 block uppercase tracking-wide">Current Medications / Notes</label>
<textarea className="w-full bg-surface-container-lowest border border-border-subtle rounded-lg p-4 font-body-md text-body-md text-primary focus:ring-0 focus:border-status-confirmed transition-colors min-h-[100px] resize-y" placeholder="Enter notes here...">Loratadine 10mg PRN for flare-ups. Uses Cerave moisturizer daily.</textarea>
</div>
</div>
</details>
</section>
</div>
</main>
    </>
  );
}
