import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import EdicionTurno from '../pages/EdicionTurno';

describe('EdicionTurno Component', () => {
  it('renders modal header, close button, and patient summary card', () => {
    render(
      <MemoryRouter>
        <EdicionTurno />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Gestión de Turno' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Close modal' })).toBeInTheDocument();

    expect(screen.getByText('EM')).toBeInTheDocument();
    expect(screen.getByText('Elena Martinez')).toBeInTheDocument();
    expect(screen.getByText(/ID: 8934201/i)).toBeInTheDocument();
    expect(screen.getByText(/\+34 612 345 678/i)).toBeInTheDocument();
    expect(screen.getByText('elena.m@example.com')).toBeInTheDocument();
  });

  it('renders date, time, and service select inputs with default values', () => {
    render(
      <MemoryRouter>
        <EdicionTurno />
      </MemoryRouter>
    );

    expect(screen.getByText('Modificar Detalles del Turno')).toBeInTheDocument();

    const dateInput = screen.getByLabelText('Fecha');
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveValue('2023-11-15');

    const timeInput = screen.getByLabelText('Hora');
    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute('type', 'time');
    expect(timeInput).toHaveValue('10:30');

    const select = screen.getByLabelText('Servicio Médico');
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(4);
    expect(options[0]).toHaveTextContent('Consulta Dermatología General');
    expect(options[1]).toHaveTextContent('Revisión Lunar / Dermatoscopia');
    expect(options[1]).toBeSelected();
    expect(options[2]).toHaveTextContent('Tratamiento Láser');
    expect(options[3]).toHaveTextContent('Biopsia Cutánea');
  });

  it('renders control appointment toggle checked by default and internal notes textarea', () => {
    render(
      <MemoryRouter>
        <EdicionTurno />
      </MemoryRouter>
    );

    expect(screen.getByText('Programar Turno de Control')).toBeInTheDocument();
    expect(screen.getByText('Genera un recordatorio para seguimiento post-tratamiento.')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();

    const textarea = screen.getByPlaceholderText('Añadir observaciones sobre el cambio de turno...');
    expect(textarea).toBeInTheDocument();
  });

  it('renders action buttons: Cancelar Turno, Volver, and Guardar Cambios', () => {
    render(
      <MemoryRouter>
        <EdicionTurno />
      </MemoryRouter>
    );

    expect(screen.getByRole('button', { name: /Cancelar Turno/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Volver/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Guardar Cambios/i })).toBeInTheDocument();
  });

  it('handles user interaction: editing date, unchecking control appointment, and entering notes', async () => {
    render(
      <MemoryRouter>
        <EdicionTurno />
      </MemoryRouter>
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();

    const textarea = screen.getByPlaceholderText('Añadir observaciones sobre el cambio de turno...');
    await userEvent.type(textarea, 'Paciente solicita cambio por viaje');
    expect(textarea).toHaveValue('Paciente solicita cambio por viaje');
  });
});
