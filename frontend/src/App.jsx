import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';

// Importing all 20 pages
import CatalogoServicios from './pages/CatalogoServicios';
import ClinicalClarity from './pages/ClinicalClarity';
import ConfiguracionCatalogo from './pages/ConfiguracionCatalogo';
import DashboardNegocio from './pages/DashboardNegocio';
import DashboardDermacare from './pages/DashboardDermacare';
import DirectorioPacientes from './pages/DirectorioPacientes';
import EdicionTurno from './pages/EdicionTurno';
import FormularioEvolucion from './pages/FormularioEvolucion';
import GestionCobranzas from './pages/GestionCobranzas';
import HistoriaClinicaCompleta from './pages/HistoriaClinicaCompleta';
import HistoriaClinicaPanel from './pages/HistoriaClinicaPanel';
import HistoriaClinicaRegistro from './pages/HistoriaClinicaRegistro';
import HistoriaClinicaTabulada from './pages/HistoriaClinicaTabulada';
import InicioSesion from './pages/InicioSesion';
import MatrizVisualAgenda from './pages/MatrizVisualAgenda';
import PanelRegistroPago from './pages/PanelRegistroPago';
import PanelLateralReserva from './pages/PanelLateralReserva';
import PerfilPaciente from './pages/PerfilPaciente';
import RecuperacionContrasena from './pages/RecuperacionContrasena';
import RegistroPaciente from './pages/RegistroPaciente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes without Layout */}
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/recuperacion-contrasena" element={<RecuperacionContrasena />} />

        {/* Protected Routes with Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/matriz-visual-agenda" replace />} />
          
          <Route path="catalogo-servicios" element={<CatalogoServicios />} />
          <Route path="clinical-clarity" element={<ClinicalClarity />} />
          <Route path="configuracion-catalogo" element={<ConfiguracionCatalogo />} />
          <Route path="dashboard-negocio" element={<DashboardNegocio />} />
          <Route path="dashboard-dermacare" element={<DashboardDermacare />} />
          <Route path="directorio-pacientes" element={<DirectorioPacientes />} />
          <Route path="edicion-turno" element={<EdicionTurno />} />
          <Route path="formulario-evolucion" element={<FormularioEvolucion />} />
          <Route path="gestion-cobranzas" element={<GestionCobranzas />} />
          <Route path="historia-clinica-completa" element={<HistoriaClinicaCompleta />} />
          <Route path="historia-clinica-panel" element={<HistoriaClinicaPanel />} />
          <Route path="historia-clinica-registro" element={<HistoriaClinicaRegistro />} />
          <Route path="historia-clinica-tabulada" element={<HistoriaClinicaTabulada />} />
          <Route path="matriz-visual-agenda" element={<MatrizVisualAgenda />} />
          <Route path="panel-registro-pago" element={<PanelRegistroPago />} />
          <Route path="panel-lateral-reserva" element={<PanelLateralReserva />} />
          <Route path="perfil-paciente" element={<PerfilPaciente />} />
          <Route path="registro-paciente" element={<RegistroPaciente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
