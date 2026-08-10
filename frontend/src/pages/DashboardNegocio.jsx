import React from "react";
import { Link } from "react-router-dom";

export default function DashboardNegocio() {
  return (
    <>
      <main className="flex-1 overflow-y-auto p-margin-mobile md:p-margin-desktop bg-background">
<div className="max-w-container-max mx-auto space-y-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div>
<h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg-mobile md:font-headline-lg text-primary mb-1">Business Intelligence</h2>
<p className="text-body-md font-body-md text-on-surface-variant">Director's Overview · Q3 Performance</p>
</div>
<div className="flex gap-3">
<select className="bg-surface border border-border-subtle rounded-lg px-3 py-2 text-label-sm font-label-sm text-on-surface focus:border-status-confirmed focus:ring-1 focus:ring-status-confirmed outline-none">
<option>Last 30 Days</option>
<option>This Quarter</option>
<option>Year to Date</option>
</select>
<button className="flex items-center gap-2 border border-border-subtle bg-surface px-4 py-2 rounded-lg text-label-sm font-label-sm text-primary hover:bg-surface-container-low transition-colors">
<span className="material-symbols-outlined text-[18px]">download</span>
                            Export
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-surface rounded-xl border border-border-subtle p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-label-sm font-label-sm text-on-surface-variant">Total Revenue</h3>
<span className="material-symbols-outlined text-secondary-container">payments</span>
</div>
<div className="text-headline-lg font-headline-lg text-primary mb-2">$124,500</div>
<div className="flex items-center gap-1 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+12.5% from last month</span>
</div>
</div>

<div className="bg-surface rounded-xl border border-border-subtle p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-label-sm font-label-sm text-on-surface-variant">Appointments Completed</h3>
<span className="material-symbols-outlined text-primary-fixed-dim">event_available</span>
</div>
<div className="text-headline-lg font-headline-lg text-primary mb-2">842</div>
<div className="flex items-center gap-1 text-label-sm font-label-sm text-secondary">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
<span>+4.2% from last month</span>
</div>
</div>

<div className="bg-surface rounded-xl border border-border-subtle p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-shadow">
<div className="flex justify-between items-start mb-4">
<h3 className="text-label-sm font-label-sm text-on-surface-variant">Patient Satisfaction</h3>
<span className="material-symbols-outlined text-status-reserved text-yellow-600">sentiment_satisfied</span>
</div>
<div className="text-headline-lg font-headline-lg text-primary mb-2">4.9/5.0</div>
<div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">horizontal_rule</span>
<span>No change</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-surface rounded-xl border border-border-subtle p-6 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-shadow col-span-1 lg:col-span-2">
<div className="flex justify-between items-center mb-6">
<h3 className="text-headline-md font-headline-md text-primary">Revenue Trend</h3>
</div>
<div className="h-64 flex items-end gap-2 pt-4 relative">

<div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-label-xs font-label-xs text-outline pr-4">
<span>$50k</span>
<span>$25k</span>
<span>$0</span>
</div>

<div className="ml-8 flex-1 h-full flex items-end gap-4 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="border-t border-border-subtle w-full"></div>
<div className="border-t border-border-subtle w-full"></div>
<div className="border-t border-border-subtle w-full"></div>
</div>

<div className="w-full flex items-end justify-between px-2 z-10 h-[90%]">
<div className="w-1/12 bg-secondary-container rounded-t-sm h-[40%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-primary rounded-t-sm h-[55%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-secondary-container rounded-t-sm h-[45%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-primary rounded-t-sm h-[70%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-secondary-container rounded-t-sm h-[60%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-primary rounded-t-sm h-[85%] hover:opacity-80 transition-opacity"></div>
<div className="w-1/12 bg-secondary-container rounded-t-sm h-[100%] hover:opacity-80 transition-opacity relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-label-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">$48k</div>
</div>
</div>
</div>
</div>

<div className="ml-8 mt-2 flex justify-between px-2 text-label-xs font-label-xs text-outline">
<span>Jan</span>
<span>Feb</span>
<span>Mar</span>
<span>Apr</span>
<span>May</span>
<span>Jun</span>
<span>Jul</span>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
