import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PerfilPaciente from '../pages/PerfilPaciente';

describe('PerfilPaciente Component', () => {
  it('renders back navigation link and patient header details', () => {
    render(
      <MemoryRouter>
        <PerfilPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Back to Patients List')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Lucía Fernández' })).toBeInTheDocument();
    expect(screen.getByText(/42 años \(14 Oct 1981\)/i)).toBeInTheDocument();
    expect(screen.getByText(/ID: PAC-8924-A/i)).toBeInTheDocument();
    expect(screen.getByText('Active Patient')).toBeInTheDocument();
  });

  it('renders action buttons: Modificar, Agendar Cita, and Eliminar Paciente', () => {
    render(
      <MemoryRouter>
        <PerfilPaciente />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /Modificar/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Agendar Cita/i })).toBeInTheDocument();

    const deleteBtn = screen.getByTitle('Eliminar Paciente');
    expect(deleteBtn).toBeInTheDocument();
  });

  it('renders Administrative Information details', () => {
    render(
      <MemoryRouter>
        <PerfilPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Información Administrativa')).toBeInTheDocument();
    expect(screen.getByText('Lucía María Fernández Gómez')).toBeInTheDocument();
    expect(screen.getByText('45678912-X')).toBeInTheDocument();
    expect(screen.getByText(/\+34 600 123 456/i)).toBeInTheDocument();
    expect(screen.getByText('lucia.fernandez@example.com')).toBeInTheDocument();
    expect(screen.getByText('Calle de Serrano 45, Piso 3A, 28001 Madrid, España')).toBeInTheDocument();
    expect(screen.getByText('Directora de Marketing')).toBeInTheDocument();
  });

  it('renders Medical Insurance and Emergency Contact sections', () => {
    render(
      <MemoryRouter>
        <PerfilPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Seguro Médico')).toBeInTheDocument();
    expect(screen.getByText('Sanitas (Póliza Premium)')).toBeInTheDocument();
    expect(screen.getByText('SAN-993-441-2A')).toBeInTheDocument();

    expect(screen.getByText('Contacto de Emergencia')).toBeInTheDocument();
    expect(screen.getByText('Carlos Fernández (Hermano)')).toBeInTheDocument();
    expect(screen.getByText('+34 611 987 654')).toBeInTheDocument();
  });

  it('renders Clinical Summary, visit notes, upcoming appointments, and alert badges', () => {
    render(
      <MemoryRouter>
        <PerfilPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Resumen Clínico')).toBeInTheDocument();
    expect(screen.getByText('Revisión Dermatológica Anual')).toBeInTheDocument();
    expect(screen.getByText('12 Enero 2024 • Dra. Silva')).toBeInTheDocument();
    expect(screen.getByText(/Paciente acude para revisión rutinaria de lunares/i)).toBeInTheDocument();
    expect(screen.getByText('Ver nota completa →')).toBeInTheDocument();

    expect(screen.getByText('Tratamiento Láser (Sesión 1/3)')).toBeInTheDocument();
    expect(screen.getByText(/10:30 AM \(45 min\)/i)).toBeInTheDocument();

    expect(screen.getByText(/Alergia: Penicilina/i)).toBeInTheDocument();
    expect(screen.getByText('Piel Sensible')).toBeInTheDocument();
    expect(screen.getByText('Fototipo II')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Abrir Historia Clínica Completa/i })).toBeInTheDocument();
  });
});
