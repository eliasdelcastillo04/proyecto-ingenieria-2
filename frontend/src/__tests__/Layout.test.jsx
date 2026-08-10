import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

describe('Layout Component', () => {
  it('renders branding header with icon and text', () => {
    render(
      <MemoryRouter initialEntries={['/matriz-visual-agenda']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div>Agenda Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('Dermacare')).toBeInTheDocument();
    expect(screen.getByText('Clinical Portal')).toBeInTheDocument();
  });

  it('renders navigation links with correct href attributes', () => {
    render(
      <MemoryRouter initialEntries={['/matriz-visual-agenda']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div>Agenda Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const agendaLinks = screen.getAllByRole('link', { name: /Agenda/i });
    expect(agendaLinks.length).toBeGreaterThanOrEqual(1);
    expect(agendaLinks[0]).toHaveAttribute('href', '/matriz-visual-agenda');

    const pacientesLinks = screen.getAllByRole('link', { name: /Pacientes/i });
    expect(pacientesLinks.length).toBeGreaterThanOrEqual(1);
    expect(pacientesLinks[0]).toHaveAttribute('href', '/directorio-pacientes');

    const configLinks = screen.getAllByRole('link', { name: /Configuración/i });
    expect(configLinks.length).toBeGreaterThanOrEqual(1);
    expect(configLinks[0]).toHaveAttribute('href', '/configuracion-catalogo');
  });

  it('applies active styling to Agenda when on /matriz-visual-agenda', () => {
    render(
      <MemoryRouter initialEntries={['/matriz-visual-agenda']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div>Agenda Content</div>} />
            <Route path="directorio-pacientes" element={<div>Pacientes Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const agendaLinks = screen.getAllByRole('link', { name: /Agenda/i });
    expect(agendaLinks[0]).toHaveClass('bg-secondary-container');
    expect(agendaLinks[0]).toHaveClass('font-bold');

    const pacientesLinks = screen.getAllByRole('link', { name: /Pacientes/i });
    expect(pacientesLinks[0]).not.toHaveClass('bg-secondary-container');
  });

  it('applies active styling to Pacientes when on /directorio-pacientes', () => {
    render(
      <MemoryRouter initialEntries={['/directorio-pacientes']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div>Agenda Content</div>} />
            <Route path="directorio-pacientes" element={<div>Pacientes Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const pacientesLinks = screen.getAllByRole('link', { name: /Pacientes/i });
    expect(pacientesLinks[0]).toHaveClass('bg-secondary-container');
    expect(pacientesLinks[0]).toHaveClass('font-bold');

    const agendaLinks = screen.getAllByRole('link', { name: /Agenda/i });
    expect(agendaLinks[0]).not.toHaveClass('bg-secondary-container');
  });

  it('renders auxiliary links: Register Patient, Support, and Logout', () => {
    render(
      <MemoryRouter initialEntries={['/matriz-visual-agenda']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div>Agenda Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const registerLink = screen.getByRole('link', { name: /Register Patient/i });
    expect(registerLink).toBeInTheDocument();
    expect(registerLink).toHaveAttribute('href', '/registro-paciente');

    const supportLink = screen.getByRole('link', { name: /Support/i });
    expect(supportLink).toBeInTheDocument();
    expect(supportLink).toHaveAttribute('href', '/#');

    const logoutLink = screen.getByRole('link', { name: /Logout/i });
    expect(logoutLink).toBeInTheDocument();
    expect(logoutLink).toHaveAttribute('href', '/inicio-sesion');
  });

  it('renders child routes inside Outlet container', () => {
    render(
      <MemoryRouter initialEntries={['/matriz-visual-agenda']}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="matriz-visual-agenda" element={<div data-testid="child-content">Child View Rendered</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Child View Rendered')).toBeInTheDocument();
  });
});
