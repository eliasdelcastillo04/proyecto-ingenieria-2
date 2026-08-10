import React from "react";
import { Link } from "react-router-dom";

export default function InicioSesion() {
  return (
    <>
    <div className="min-h-screen flex items-center justify-center p-4 bg-surface w-full">
      <main className="w-full max-w-md bg-surface-container-lowest border border-border-subtle rounded-xl premium-shadow p-8 flex flex-col items-center">

<div className="mb-8 flex flex-col items-center">
<div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-sm">
<span className="material-symbols-outlined text-on-primary text-[32px]" style={{fontVariationSettings: "'FILL' 1"}}>health_and_safety</span>
</div>
<h1 className="text-headline-md font-headline-md text-primary tracking-tight">Dermacare Elite</h1>
<p className="text-body-md font-body-md text-on-surface-variant mt-2 text-center">Clinical Portal Access</p>
</div>

<form action="#" className="w-full flex flex-col gap-6" method="POST">
<div className="flex flex-col gap-1.5">
<label className="text-label-sm font-label-sm text-on-surface" htmlFor="email">Email Address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-lg">mail</span>
</div>
<input className="w-full pl-10 pr-3 py-2.5 bg-surface-bright border border-border-subtle rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" id="email" name="email" placeholder="clinician@dermacare.elite" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center">
<label className="text-label-sm font-label-sm text-on-surface" htmlFor="password">Password</label>
<a className="text-label-sm font-label-sm text-primary hover:text-secondary transition-colors duration-200" href="#">Forgot Password?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline text-lg">lock</span>
</div>
<input className="w-full pl-10 pr-10 py-2.5 bg-surface-bright border border-border-subtle rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-colors" id="password" name="password" placeholder="••••••••" required="" type="password"/>
<button className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface transition-colors focus:outline-none" type="button">
<span className="material-symbols-outlined text-lg">visibility_off</span>
</button>
</div>
</div>

<div className="mt-2 flex flex-col gap-4">
<button className="w-full bg-secondary text-on-secondary py-3 px-4 rounded-lg text-body-md font-headline-md font-semibold hover:bg-on-secondary-fixed transition-colors duration-200 shadow-sm flex justify-center items-center gap-2 group" type="submit">
                    Sign In
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-border-subtle"></div>
<span className="flex-shrink-0 mx-4 text-label-sm font-label-sm text-on-surface-variant">Secure Environment</span>
<div className="flex-grow border-t border-border-subtle"></div>
</div>
</div>
</form>
<p className="mt-8 text-label-xs font-label-xs text-on-surface-variant text-center max-w-xs">
            By logging in, you agree to Dermacare Elite's <a className="text-primary hover:underline" href="#">Terms of Service</a> and <a className="text-primary hover:underline" href="#">Privacy Policy</a>.
        </p>
</main>
      </div>
    </>
  );
}
