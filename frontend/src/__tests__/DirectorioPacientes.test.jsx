import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import DirectorioPacientes from '../pages/DirectorioPacientes';

describe('DirectorioPacientes Component', () => {
  it('renders search bar, header actions, and main directory title', () => {
    render(
      <MemoryRouter>
        <DirectorioPacientes />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Buscar Paciente');
    expect(searchInput).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /New Appointment/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Patients Directory' })).toBeInTheDocument();
    expect(screen.getByText('Manage and view all registered patient records.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cargar Paciente/i })).toBeInTheDocument();
  });

  it('renders filter dropdown with correct options and patient count label', () => {
    render(
      <MemoryRouter>
        <DirectorioPacientes />
      </MemoryRouter>
    );

    expect(screen.getByText('Filter by:')).toBeInTheDocument();
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('All Statuses');
    expect(options[1]).toHaveTextContent('Active');
    expect(options[2]).toHaveTextContent('Inactive');

    expect(screen.getByText('Showing 1-10 of 124 patients')).toBeInTheDocument();
  });

  it('renders table headers and exact patient rows data', () => {
    render(
      <MemoryRouter>
        <DirectorioPacientes />
      </MemoryRouter>
    );

    expect(screen.getByText('Patient Name')).toBeInTheDocument();
    expect(screen.getByText('Patient ID')).toBeInTheDocument();
    expect(screen.getByText('Last Visit')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4); // 1 header row + 3 data rows

    // Row 1: Elena Martinez
    const row1 = rows[1];
    expect(within(row1).getByText('EM')).toBeInTheDocument();
    expect(within(row1).getByText('Elena Martinez')).toBeInTheDocument();
    expect(within(row1).getByText('#PT-8842')).toBeInTheDocument();
    expect(within(row1).getByText('Oct 12, 2023')).toBeInTheDocument();
    expect(within(row1).getByText('Active')).toBeInTheDocument();

    // Row 2: Robert Chen
    const row2 = rows[2];
    expect(within(row2).getByText('Robert Chen')).toBeInTheDocument();
    expect(within(row2).getByText('#PT-7710')).toBeInTheDocument();
    expect(within(row2).getByText('Sep 28, 2023')).toBeInTheDocument();
    expect(within(row2).getByText('Active')).toBeInTheDocument();

    // Row 3: Sarah Jenkins
    const row3 = rows[3];
    expect(within(row3).getByText('SJ')).toBeInTheDocument();
    expect(within(row3).getByText('Sarah Jenkins')).toBeInTheDocument();
    expect(within(row3).getByText('#PT-9012')).toBeInTheDocument();
    expect(within(row3).getByText('Aug 05, 2023')).toBeInTheDocument();
    expect(within(row3).getByText('Pending Review')).toBeInTheDocument();
  });

  it('allows user to type into search input', async () => {
    render(
      <MemoryRouter>
        <DirectorioPacientes />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText('Buscar Paciente');
    await userEvent.type(searchInput, 'Elena');
    expect(searchInput).toHaveValue('Elena');
  });
});
