import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import RecuperacionContrasena from '../pages/RecuperacionContrasena';

describe('RecuperacionContrasena Component', () => {
  it('renders header, title, and instructions', () => {
    render(
      <MemoryRouter>
        <RecuperacionContrasena />
      </MemoryRouter>
    );

    expect(screen.getByText('Recuperar Contraseña')).toBeInTheDocument();
    expect(screen.getByText('Ingresa tu correo electrónico para recibir instrucciones de restablecimiento.')).toBeInTheDocument();
    expect(screen.getByText('medical_services')).toBeInTheDocument();
  });

  it('renders email input with exact attributes', () => {
    render(
      <MemoryRouter>
        <RecuperacionContrasena />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'dr.specialist@dermacare.com');
    expect(emailInput).toBeRequired();
  });

  it('renders submit button and back links', () => {
    render(
      <MemoryRouter>
        <RecuperacionContrasena />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Enviar Instrucciones/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('type', 'submit');

    const backLinks = screen.getAllByText(/Volver al Inicio de Sesión/i);
    expect(backLinks.length).toBeGreaterThanOrEqual(1);
  });

  it('allows user to enter email value', async () => {
    render(
      <MemoryRouter>
        <RecuperacionContrasena />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Correo Electrónico/i);
    await userEvent.type(emailInput, 'doctor@dermacare.com');
    expect(emailInput).toHaveValue('doctor@dermacare.com');
  });

  it('renders hidden success message with correct text', () => {
    const { container } = render(
      <MemoryRouter>
        <RecuperacionContrasena />
      </MemoryRouter>
    );

    const successMessage = container.querySelector('#success-message');
    expect(successMessage).toHaveClass('hidden');
    expect(screen.getByText('Correo Enviado')).toBeInTheDocument();
    expect(screen.getByText(/Hemos enviado las instrucciones a tu correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Intentar de nuevo/i })).toBeInTheDocument();
  });
});
