
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS, MikuBrandIcon, SITE_TITLE } from '../constants';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <header className="bg-slate-900/70 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <button
            onClick={() => handleNavigation('/')}
            className="flex items-center text-2xl font-bold text-teal-400 hover:text-teal-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-md p-1"
            aria-label={`Navegar para a página inicial de ${SITE_TITLE}`}
          >
            <MikuBrandIcon className="w-10 h-10 sm:w-12 sm:h-12 mr-2 transition-transform duration-300 hover:scale-110" />
            <span className="bg-gradient-to-r from-teal-400 to-sky-400 text-transparent bg-clip-text hover:from-teal-300 hover:to-sky-300">
              {SITE_TITLE}
            </span>
          </button>
          <nav className="mt-4 sm:mt-0">
            <ul className="flex space-x-1 sm:space-x-2">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out group
                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-teal-500
                                 ${isActive 
                                   ? 'bg-teal-500/20 text-teal-300 shadow-md' 
                                   : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                 }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.icon && <link.icon className={`w-5 h-5 mr-1.5 transition-colors duration-200 ${isActive ? 'text-teal-400' : 'text-slate-400 group-hover:text-teal-400'}`} />}
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};