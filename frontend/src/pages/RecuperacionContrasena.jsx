import React from "react";
import { Link } from "react-router-dom";

export default function RecuperacionContrasena() {
  return (
    <>
      

    <div className="min-h-screen flex items-center justify-center p-4 bg-surface w-full">
<div className="bg-surface-container-lowest border border-border-subtle rounded-xl p-8 md:p-12 w-full max-w-md shadow-sm transition-all duration-300 hover:shadow-[0px_4px_12px_rgba(0,0,0,0.03)]">

<div className="flex flex-col items-center mb-8 text-center">
<div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-4">
<span className="material-symbols-outlined text-primary text-3xl" data-weight="fill">medical_services</span>
</div>
<h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Recuperar Contraseña</h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
                Ingresa tu correo electrónico para recibir instrucciones de restablecimiento.
            </p>
</div>

<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('success-message').classList.remove('hidden'); this.classList.add('hidden');">

<div className="space-y-1">
<label className="block font-label-sm text-label-sm text-on-surface" htmlFor="email">Correo Electrónico</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-outline">mail</span>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-border-subtle rounded-lg bg-surface-bright font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-status-confirmed focus:border-status-confirmed transition-colors placeholder:text-outline-variant" id="email" name="email" placeholder="dr.specialist@dermacare.com" required="" type="email"/>
</div>
</div>

<button className="w-full bg-primary text-on-primary font-label-sm text-label-sm py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2" type="submit">
                Enviar Instrucciones
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
</button>

<div className="text-center mt-6">
<a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">arrow_back</span>
                    Volver al Inicio de Sesión
                </a>
</div>
</form>

<div className="hidden text-center py-6" id="success-message">
<div className="w-16 h-16 rounded-full bg-status-available flex items-center justify-center mx-auto mb-4">
<span className="material-symbols-outlined text-on-secondary-fixed-variant text-3xl">check_circle</span>
</div>
<h2 className="font-headline-md text-headline-md text-primary mb-2">Correo Enviado</h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Hemos enviado las instrucciones a tu correo electrónico. Por favor, revisa tu bandeja de entrada.
            </p>
<button className="w-full bg-surface-container text-on-surface font-label-sm text-label-sm py-3 px-4 rounded-lg hover:bg-surface-variant transition-colors" onclick="document.getElementById('success-message').classList.add('hidden'); document.querySelector('form').classList.remove('hidden');">
                Intentar de nuevo
            </button>
<div className="text-center mt-6">
<a className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined text-sm">arrow_back</span>
                    Volver al Inicio de Sesión
                </a>
</div>
</div>
</div>

</div>
    </>
  );
}
