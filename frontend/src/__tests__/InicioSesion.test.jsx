import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import InicioSesion from '../pages/InicioSesion';

describe('InicioSesion Component', () => {
  it('renders header, title, and subtitle correctly', () => {
    render(
      <MemoryRouter>
        <InicioSesion />
      </MemoryRouter>
    );

    expect(screen.getByText('Dermacare Elite')).toBeInTheDocument();
    expect(screen.getByText('Clinical Portal Access')).toBeInTheDocument();
    expect(screen.getByText('health_and_safety')).toBeInTheDocument();
  });

  it('renders email input with exact attributes', () => {
    render(
      <MemoryRouter>
        <InicioSesion />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Email Address/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('id', 'email');
    expect(emailInput).toHaveAttribute('name', 'email');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('placeholder', 'clinician@dermacare.elite');
    expect(emailInput).toBeRequired();
  });

  it('renders password input with exact attributes and visibility toggle button', () => {
    render(
      <MemoryRouter>
        <InicioSesion />
      </MemoryRouter>
    );

    const passwordInput = screen.getByLabelText(/Password/i);
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('id', 'password');
    expect(passwordInput).toHaveAttribute('name', 'password');
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(passwordInput).toHaveAttribute('placeholder', '••••••••');
    expect(passwordInput).toBeRequired();

    const toggleBtn = screen.getByText('visibility_off').closest('button');
    expect(toggleBtn).toBeInTheDocument();
    expect(toggleBtn).toHaveAttribute('type', 'button');
  });

  it('renders sign in button and footer links', () => {
    render(
      <MemoryRouter>
        <InicioSesion />
      </MemoryRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Sign In/i });
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toHaveAttribute('type', 'submit');

    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
    expect(screen.getByText('Secure Environment')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
  });

  it('allows user input typing in email and password fields', async () => {
    render(
      <MemoryRouter>
        <InicioSesion />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'secret123');

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('secret123');
  });
});
