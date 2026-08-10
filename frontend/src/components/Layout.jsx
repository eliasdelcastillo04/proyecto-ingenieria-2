import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Agenda', icon: 'calendar_month', path: '/matriz-visual-agenda' },
    { name: 'Pacientes', icon: 'group', path: '/directorio-pacientes' },
    { name: 'Configuración', icon: 'settings', path: '/configuracion-catalogo' },
  ];

  return (
    <div className="h-full flex bg-background text-on-surface">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col h-screen w-64 bg-surface-container-low border-r border-border-subtle p-gutter gap-base sticky top-0 shrink-0">
        <div className="flex items-center gap-3 mb-6 px-4 pt-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
            D
          </div>
          <div>
            <h1 className="text-headline-md font-headline-md font-bold text-primary">Dermacare</h1>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Clinical Portal</p>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-transform ${
                location.pathname.startsWith(item.path)
                  ? 'bg-secondary-container text-on-secondary-container font-bold scale-95'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-label-sm font-label-sm">{item.name}</span>
            </Link>
          ))}
        </nav>

        <Link to="/registro-paciente" className="mt-auto mb-4 bg-primary text-on-primary py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity text-center w-full block">
          Register Patient
        </Link>
        <div className="flex flex-col gap-2">
          <Link to="#" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">help</span>
            <span className="text-label-sm font-label-sm">Support</span>
          </Link>
          <Link to="/inicio-sesion" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:bg-surface-container-highest transition-all duration-200 rounded-lg">
            <span className="material-symbols-outlined">logout</span>
            <span className="text-label-sm font-label-sm">Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area where pages are rendered */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full relative">
        <Outlet />
      </div>

      {/* Bottom Nav (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe h-16 bg-surface rounded-t-xl border-t border-border-subtle shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center justify-center rounded-full px-4 py-1 tap-highlight-transparent transition-all ${
              location.pathname.startsWith(item.path)
                ? 'bg-secondary-container text-on-secondary-container'
                : 'text-on-surface-variant active:bg-surface-container-high'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-label-xs font-label-xs">{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
