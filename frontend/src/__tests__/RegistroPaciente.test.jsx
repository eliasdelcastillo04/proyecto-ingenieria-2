import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RegistroPaciente from '../pages/RegistroPaciente';

describe('RegistroPaciente Component', () => {
  it('renders page headers and section titles correctly', () => {
    render(
      <MemoryRouter>
        <RegistroPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Registro de Nuevo Paciente')).toBeInTheDocument();
    expect(screen.getByText('Ingrese los datos clínicos y filiatorios para crear un nuevo expediente.')).toBeInTheDocument();
    expect(screen.getByText(/I\. Datos Filiatorios y Contacto/i)).toBeInTheDocument();
    expect(screen.getByText(/II\. Antecedentes Médicos/i)).toBeInTheDocument();
    expect(screen.getByText(/III\. Tratamientos Estéticos Previos/i)).toBeInTheDocument();
  });

  it('renders section I form controls with exact IDs, types, and placeholders', () => {
    const { container } = render(
      <MemoryRouter>
        <RegistroPaciente />
      </MemoryRouter>
    );

    const fullNameInput = container.querySelector('#fullName');
    expect(fullNameInput).toBeInTheDocument();
    expect(fullNameInput).toHaveAttribute('type', 'text');
    expect(fullNameInput).toHaveAttribute('placeholder', 'Ej. Ana García Pérez');

    const dniInput = container.querySelector('#dni');
    expect(dniInput).toBeInTheDocument();
    expect(dniInput).toHaveAttribute('type', 'text');
    expect(dniInput).toHaveAttribute('placeholder', 'Sin puntos ni espacios');

    const ageInput = container.querySelector('#age');
    expect(ageInput).toBeInTheDocument();
    expect(ageInput).toHaveAttribute('type', 'number');
    expect(ageInput).toHaveAttribute('placeholder', 'Años');

    const professionInput = container.querySelector('#profession');
    expect(professionInput).toBeInTheDocument();
    expect(professionInput).toHaveAttribute('type', 'text');
    expect(professionInput).toHaveAttribute('placeholder', 'Ocupación actual');

    const phoneInput = container.querySelector('#phone');
    expect(phoneInput).toBeInTheDocument();
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(phoneInput).toHaveAttribute('placeholder', '+34 600 000 000');

    const emailInput = container.querySelector('#email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'correo@ejemplo.com');

    const addressInput = container.querySelector('#address');
    expect(addressInput).toBeInTheDocument();
    expect(addressInput).toHaveAttribute('type', 'text');
    expect(addressInput).toHaveAttribute('placeholder', 'Calle, Número, Ciudad');
  });

  it('renders section II checkboxes and default SPF checked state', () => {
    render(
      <MemoryRouter>
        <RegistroPaciente />
      </MemoryRouter>
    );

    expect(screen.getByText('Hipertensión Arterial (HTA)')).toBeInTheDocument();
    expect(screen.getByText('Diabetes Mellitus (DBT)')).toBeInTheDocument();
    expect(screen.getByText('Hipotiroidismo')).toBeInTheDocument();
    expect(screen.getByText('Enf. Autoinmunes')).toBeInTheDocument();

    expect(screen.getByText('Anestesia Local')).toBeInTheDocument();
    expect(screen.getByText('Huevo / Derivados')).toBeInTheDocument();
    expect(screen.getByText('Pescado / Mariscos')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Otras alergias...')).toBeInTheDocument();

    expect(screen.getByText('Tabaquismo')).toBeInTheDocument();
    expect(screen.getByText('Consumo de Alcohol')).toBeInTheDocument();

    const spfText = screen.getByText('Uso de Fotoprotector (SPF)');
    const spfCheckbox = spfText.previousElementSibling || spfText.parentElement.querySelector('input[type="checkbox"]');
    expect(spfCheckbox).toBeInTheDocument();
    expect(spfCheckbox).toBeChecked();
  });

  it('renders section III textarea and action buttons', () => {
    const { container } = render(
      <MemoryRouter>
        <RegistroPaciente />
      </MemoryRouter>
    );

    const textarea = container.querySelector('#prevTreatments');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('placeholder', 'Detalles de tratamientos previos...');

    const cancelBtn = screen.getByRole('button', { name: /Cancelar/i });
    expect(cancelBtn).toBeInTheDocument();
    expect(cancelBtn).toHaveAttribute('type', 'button');

    const submitBtn = screen.getByRole('button', { name: /Guardar y Registrar/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('type', 'submit');
  });

  it('handles user interaction: typing into inputs and toggling checkboxes', async () => {
    const { container } = render(
      <MemoryRouter>
        <RegistroPaciente />
      </MemoryRouter>
    );

    const fullNameInput = container.querySelector('#fullName');
    await userEvent.type(fullNameInput, 'Carlos Mendoza');
    expect(fullNameInput).toHaveValue('Carlos Mendoza');

    const htaText = screen.getByText('Hipertensión Arterial (HTA)');
    const htaCheckbox = htaText.parentElement.querySelector('input[type="checkbox"]');
    expect(htaCheckbox).not.toBeChecked();

    await userEvent.click(htaCheckbox);
    expect(htaCheckbox).toBeChecked();
  });
});
