import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import MatrizVisualAgenda from '../pages/MatrizVisualAgenda';

describe('MatrizVisualAgenda Component', () => {
  it('renders title, date range, action buttons, and filter dropdowns', () => {
    render(
      <MemoryRouter>
        <MatrizVisualAgenda />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Calendario de Turnos' })).toBeInTheDocument();
    expect(screen.getByText('Octubre 23 - 29, 2023')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Consultar Agenda/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Bloquear Horario/i })).toBeInTheDocument();

    const selects = screen.getAllByRole('combobox');
    expect(selects).toHaveLength(2);

    expect(screen.getByText('Dr. Alanis (Derm.)')).toBeInTheDocument();
    expect(screen.getByText('Dra. Silva (Est.)')).toBeInTheDocument();
    expect(screen.getByText('Todos los trat.')).toBeInTheDocument();
    expect(screen.getByText('Laser CO2')).toBeInTheDocument();
    expect(screen.getByText('Botox')).toBeInTheDocument();
  });

  it('renders day columns and time slot labels in matrix grid', () => {
    render(
      <MemoryRouter>
        <MatrizVisualAgenda />
      </MemoryRouter>
    );

    expect(screen.getAllByText('Lun').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('23').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Mie').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('25').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Jue').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('26').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Vie').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('27').length).toBeGreaterThanOrEqual(1);

    expect(screen.getByText('09:00')).toBeInTheDocument();
    expect(screen.getByText('10:00')).toBeInTheDocument();
    expect(screen.getByText('11:00')).toBeInTheDocument();
    expect(screen.getByText('12:00')).toBeInTheDocument();
    expect(screen.getByText('13:00')).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
    expect(screen.getByText('15:00')).toBeInTheDocument();
    expect(screen.getByText('16:00')).toBeInTheDocument();
  });

  it('renders appointment cards with correct times, names, treatments, and statuses', () => {
    render(
      <MemoryRouter>
        <MatrizVisualAgenda />
      </MemoryRouter>
    );

    // Disponible slot
    expect(screen.getByText('09:00 - 10:00')).toBeInTheDocument();
    expect(screen.getByText('Disponible')).toBeInTheDocument();
    expect(screen.getByText('Click para registrar')).toBeInTheDocument();

    // Señado slot
    expect(screen.getAllByText('10:30 - 11:30').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Señado').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('M. Gomez').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Laser CO2 - Rostro').length).toBeGreaterThanOrEqual(1);

    // Reservado slot
    expect(screen.getAllByText('13:00 - 14:00').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Reservado').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('R. Blanco').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Consulta Inicial').length).toBeGreaterThanOrEqual(1);

    // Bloqueado slot
    expect(screen.getByText('15:00 - 16:00')).toBeInTheDocument();
    expect(screen.getByText('Bloqueado')).toBeInTheDocument();
    expect(screen.getByText('En proceso de pago...')).toBeInTheDocument();
  });

  it('renders right sidebar legend details', () => {
    render(
      <MemoryRouter>
        <MatrizVisualAgenda />
      </MemoryRouter>
    );

    expect(screen.getByText('Detalles del Turno')).toBeInTheDocument();
    expect(screen.getByText(/Seleccione un espacio disponible para agendar un nuevo paciente/i)).toBeInTheDocument();

    expect(screen.getByText('Disponible para agendar')).toBeInTheDocument();
    expect(screen.getByText('Turno Reservado')).toBeInTheDocument();
    expect(screen.getByText('Señado / Depósito')).toBeInTheDocument();
  });
});
