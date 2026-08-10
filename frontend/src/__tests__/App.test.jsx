import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component (Routing Integration)', () => {
  it('redirects from root / to /matriz-visual-agenda and renders Agenda', () => {
    window.history.pushState({}, 'Test Page', '/');
    render(<App />);
    expect(screen.getByText('Calendario de Turnos')).toBeInTheDocument();
    expect(screen.getByText('Octubre 23 - 29, 2023')).toBeInTheDocument();
  });

  it('renders InicioSesion page on /inicio-sesion route without layout sidebar', () => {
    window.history.pushState({}, 'Test Page', '/inicio-sesion');
    render(<App />);
    expect(screen.getByText('Dermacare Elite')).toBeInTheDocument();
    expect(screen.getByText('Clinical Portal Access')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
    expect(screen.queryByText('Clinical Portal')).not.toBeInTheDocument();
  });

  it('renders RecuperacionContrasena page on /recuperacion-contrasena route', () => {
    window.history.pushState({}, 'Test Page', '/recuperacion-contrasena');
    render(<App />);
    expect(screen.getByText('Recuperar Contraseña')).toBeInTheDocument();
    expect(screen.getByText('Ingresa tu correo electrónico para recibir instrucciones de restablecimiento.')).toBeInTheDocument();
  });

  it('renders DirectorioPacientes on /directorio-pacientes route inside Layout', () => {
    window.history.pushState({}, 'Test Page', '/directorio-pacientes');
    render(<App />);
    expect(screen.getByText('Patients Directory')).toBeInTheDocument();
    expect(screen.getByText('Elena Martinez')).toBeInTheDocument();
    expect(screen.getByText('Clinical Portal')).toBeInTheDocument();
  });

  it('renders RegistroPaciente on /registro-paciente route', () => {
    window.history.pushState({}, 'Test Page', '/registro-paciente');
    render(<App />);
    expect(screen.getByText('Registro de Nuevo Paciente')).toBeInTheDocument();
    expect(screen.getByText('I. Datos Filiatorios y Contacto')).toBeInTheDocument();
  });

  it('renders PerfilPaciente on /perfil-paciente route', () => {
    window.history.pushState({}, 'Test Page', '/perfil-paciente');
    render(<App />);
    expect(screen.getByText('Lucía Fernández')).toBeInTheDocument();
    expect(screen.getByText('PAC-8924-A', { exact: false })).toBeInTheDocument();
  });

  it('renders EdicionTurno on /edicion-turno route', () => {
    window.history.pushState({}, 'Test Page', '/edicion-turno');
    render(<App />);
    expect(screen.getByText('Gestión de Turno')).toBeInTheDocument();
    expect(screen.getByText('Elena Martinez')).toBeInTheDocument();
  });
});
