import React from "react";
import { Link } from "react-router-dom";

export default function HistoriaClinicaPanel() {
  return (
    <>
      <main className="ml-64 pt-16 flex w-full h-full bg-surface-container-low">

<aside className="w-[30%] min-w-[320px] max-w-[400px] bg-surface-container-lowest border-r border-border-subtle p-6 flex flex-col overflow-y-auto h-full">

<div className="flex flex-col items-center text-center mb-8">
<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-border-subtle mb-4 shadow-sm">
<img alt="Patient Photo" className="w-full h-full object-cover" data-alt="A clear, high-resolution portrait photograph of a 34-year-old female patient with a Fitzpatrick Type III skin tone. The lighting is bright, even, and clinical, typical of a professional medical examination room. The background is a stark, neutral clinical white." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYKx-_EAon__2lcjgZWU_d3Ew7xkl6Q0XV0E_aLbtpNzUSTqj1vFBxOP0vuGq7VTQlXhsGGD3CPnqMC-p6azkymD8aSzHjPuaL9bGHNSKrNjy1KYOHczNrCFBY48VypxXPgp6jTJ3VYHQVcVNLZVXS1P7UsM_AFpwqbkmO3JJX_Anb5DF1A2K31sTcywYBhyzfbv8CWIW_g3kQOVATvHEfIPvN4nNmKt08PYzpKt71Ey053VDhCkwcew"/>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface mb-1">Elena Rodriguez</h2>
<div className="flex items-center gap-2 text-slate-muted font-label-sm text-label-sm">
<span>ID: #88392-B</span>
<span>•</span>
<span>34 yrs</span>
<span>•</span>
<span>Female</span>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-surface-container-lowest border border-border-subtle p-4 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-3 border-b border-border-subtle pb-2">
<span className="material-symbols-outlined text-primary" data-icon="dermatology">dermatology</span>
<h3 className="font-label-sm text-label-sm font-semibold text-on-surface">Skin Profile</h3>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-label-xs text-slate-muted uppercase tracking-wider mb-1">Fitzpatrick</p>
<p className="font-body-md text-body-md font-medium">Type III</p>
</div>
<div>
<p className="text-label-xs text-slate-muted uppercase tracking-wider mb-1">Skin Type</p>
<p className="font-body-md text-body-md font-medium">Combination</p>
</div>
<div className="col-span-2">
<p className="text-label-xs text-slate-muted uppercase tracking-wider mb-1">Known Allergies</p>
<span className="inline-block bg-error-container text-on-error-container px-2 py-1 rounded-full font-label-xs text-label-xs">Niacinamide</span>
</div>
</div>
</div>
<div className="bg-surface-container-lowest border border-border-subtle p-4 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
<div className="flex items-center gap-2 mb-3 border-b border-border-subtle pb-2">
<span className="material-symbols-outlined text-primary" data-icon="medical_information">medical_information</span>
<h3 className="font-label-sm text-label-sm font-semibold text-on-surface">Current Diagnosis</h3>
</div>
<p className="font-body-md text-body-md text-on-surface mb-2 font-medium">Adult Cystic Acne (Moderate)</p>
<p className="text-body-md font-body-md text-on-surface-variant text-sm">Primarily localized to the jawline and lower cheeks. Hormonal flare-ups noted.</p>
</div>
<div className="bg-surface-container-lowest border border-border-subtle p-4 rounded-lg shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
<div className="flex items-center gap-2 mb-3 border-b border-border-subtle pb-2">
<span className="material-symbols-outlined text-primary" data-icon="prescriptions">prescriptions</span>
<h3 className="font-label-sm text-label-sm font-semibold text-on-surface">Active Treatment Plan</h3>
</div>
<ul className="space-y-3 font-body-md text-body-md text-sm">
<li className="flex gap-3">
<span className="material-symbols-outlined text-status-confirmed" data-icon="check_circle">check_circle</span>
<div>
<p className="font-medium text-on-surface">Spironolactone 50mg</p>
<p className="text-slate-muted text-xs">Oral, 1x daily (AM)</p>
</div>
</li>
<li className="flex gap-3">
<span className="material-symbols-outlined text-status-confirmed" data-icon="check_circle">check_circle</span>
<div>
<p className="font-medium text-on-surface">Tretinoin 0.025% Cream</p>
<p className="text-slate-muted text-xs">Topical, Every other night</p>
</div>
</li>
</ul>
</div>
</div>
</aside>

<div className="flex-1 p-8 overflow-y-auto h-full pb-24">
<div className="flex justify-between items-center mb-6">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary">Hoja de Seguimiento Diario</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Daily Patient Progress Tracking</p>
</div>
<button className="bg-surface-container-lowest border border-border-subtle text-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-low transition-colors flex items-center gap-2 shadow-sm">
<span className="material-symbols-outlined" data-icon="add">add</span>
                    New Entry
                </button>
</div>

<div className="bg-surface-container-lowest border border-border-subtle rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] overflow-hidden mb-8">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-border-subtle font-label-sm text-label-sm text-slate-muted">
<th className="p-4 font-semibold w-24">Date</th>
<th className="p-4 font-semibold w-32">Lesion Count</th>
<th className="p-4 font-semibold">Erythema/Inflammation</th>
<th className="p-4 font-semibold">Patient Notes (Side Effects)</th>
<th className="p-4 font-semibold text-center w-40">Satisfaction Level</th>
<th className="p-4 font-semibold text-center w-16">Actions</th>
</tr>
</thead>
<tbody className="font-body-md text-body-md divide-y divide-border-subtle">

<tr className="hover:bg-surface-bright transition-colors">
<td className="p-4 align-top">
<span className="font-medium">Oct 12</span><br/>
<span className="text-xs text-slate-muted">09:30 AM</span>
</td>
<td className="p-4 align-top">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-error-container text-on-error-container flex items-center justify-center text-xs font-bold">12</span>
<span className="text-xs text-slate-muted">Active</span>
</div>
</td>
<td className="p-4 align-top">
                                    Moderate localized redness around jawline. No widespread irritation.
                                </td>
<td className="p-4 align-top">
                                    Mild dryness experienced in the morning. Using heavier moisturizer.
                                </td>
<td className="p-4 align-top text-center">
<div className="inline-flex items-center justify-center p-2 rounded-full bg-surface-container border border-border-subtle" title="Neutral">
<span className="material-symbols-outlined text-slate-muted" data-icon="sentiment_neutral">sentiment_neutral</span>
</div>
</td>
<td className="p-4 align-top text-center">
<button className="text-slate-muted hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors bg-surface/50">
<td className="p-4 align-top">
<span className="font-medium">Oct 05</span><br/>
<span className="text-xs text-slate-muted">10:15 AM</span>
</td>
<td className="p-4 align-top">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-status-reserved text-on-tertiary-fixed-variant flex items-center justify-center text-xs font-bold">15</span>
<span className="text-xs text-slate-muted">Active</span>
</div>
</td>
<td className="p-4 align-top">
                                    Significant inflammation noted on lower cheeks. Purging phase suspected.
                                </td>
<td className="p-4 align-top">
                                    Reported slight peeling and sensitivity to sunlight. Advised on SPF reapplication.
                                </td>
<td className="p-4 align-top text-center">
<div className="inline-flex items-center justify-center p-2 rounded-full bg-error-container/30 border border-error/20" title="Insatisfecho">
<span className="material-symbols-outlined text-error" data-icon="sentiment_dissatisfied">sentiment_dissatisfied</span>
</div>
</td>
<td className="p-4 align-top text-center">
<button className="text-slate-muted hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>

<tr className="hover:bg-surface-bright transition-colors">
<td className="p-4 align-top">
<span className="font-medium">Sep 28</span><br/>
<span className="text-xs text-slate-muted">11:00 AM</span>
</td>
<td className="p-4 align-top">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded bg-error-container text-on-error-container flex items-center justify-center text-xs font-bold">18</span>
<span className="text-xs text-slate-muted">Active</span>
</div>
</td>
<td className="p-4 align-top">
                                    Baseline evaluation. High inflammation, deep cystic nodes present.
                                </td>
<td className="p-4 align-top">
                                    Initial consultation. Patient expresses frustration with recurring breakouts.
                                </td>
<td className="p-4 align-top text-center">
<div className="inline-flex items-center justify-center p-2 rounded-full bg-error-container/30 border border-error/20" title="Insatisfecho">
<span className="material-symbols-outlined text-error" data-icon="sentiment_dissatisfied">sentiment_dissatisfied</span>
</div>
</td>
<td className="p-4 align-top text-center">
<button className="text-slate-muted hover:text-primary"><span className="material-symbols-outlined" data-icon="more_vert">more_vert</span></button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface-container-lowest border border-border-subtle p-6 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">
<div className="flex justify-between items-center mb-4">
<h3 className="font-headline-md text-headline-md text-primary text-lg">Visual History</h3>
<button className="text-primary text-sm font-medium hover:underline">View All</button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden border border-border-subtle relative group cursor-pointer">
<img alt="Clinical Photo Oct 12" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Close up clinical photograph of patient's right cheek showing moderate acne lesions. Bright, stark clinical lighting. Minimalist medical record style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdLVHolpg03tUD45rWO-mOkFp2eIJzul1GHXktZwhqKmVAkQ4o5We5sJ8HR2_EHB_upcqLFnraTCIY_kwilDMEpLW16OikBIH_hALcg2JSNYmrk99-Y3ak7IKO8W4dKldJEvOiCy7iEx9ZS0abKlyqXFj64Z-19rjK1_t66iXcydQWwnKSUFabBKhlIWr0a1FY60rXowpajxIYee5fEGL6r3n4L-4_4GXM9HF4efU3KXNqhuqPDVF7Hg"/>
<div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur px-2 py-1 text-xs font-medium text-center border-t border-border-subtle">Oct 12</div>
</div>
<div className="aspect-square bg-surface-container-low rounded-lg overflow-hidden border border-border-subtle relative group cursor-pointer">
<img alt="Clinical Photo Sep 28" className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity" data-alt="Close up clinical photograph of patient's right cheek showing severe cystic acne lesions before treatment. Bright, stark clinical lighting. Minimalist medical record style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjolThVJ18ARRRtPoYME8thf9183qHdldh6zkZP-CFxraGzlwlRWbjI8lnP3MmPdMTkG6y0MDM1zPgK-XpW2V8IqkhnP-8lgthKI1CgwBpxy9CTZXAzZcYEKdE6HtjXGUMTvmok6JtiBPm9oVMFBBo-rSBpYMg-cwTbDpQYTWjvtmFoKr92jqxiWrQGh084RpfEcxLdrx-wD9mn5LxAl19HlkrhdyHIrNH3mAhoSlh593g8D2UQhUrMA"/>
<div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur px-2 py-1 text-xs font-medium text-center border-t border-border-subtle">Sep 28</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest border border-border-subtle p-6 rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.03)] flex flex-col">
<h3 className="font-headline-md text-headline-md text-primary text-lg mb-4">Quick Note</h3>
<div className="flex-1 flex flex-col gap-3">
<label className="block">
<span className="block text-label-xs uppercase tracking-wider text-slate-muted mb-1">Subjective Observation</span>
<textarea className="w-full border border-border-subtle rounded-md p-2 font-body-md text-body-md focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed outline-none resize-none h-20" placeholder="Patient reports..."></textarea>
</label>
<div className="flex justify-end mt-auto pt-2">
<button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                                Save Note
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
