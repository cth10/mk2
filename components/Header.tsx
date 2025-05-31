
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
    <header className="relative bg-black/20 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-cyan-500/30">
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-pink-900/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand */}
          <button
            onClick={() => handleNavigation('/')}
            className="group flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl p-2 glass-effect"
            aria-label={`Navegar para a página inicial de ${SITE_TITLE}`}
          >
            <div className="relative">
              <MikuBrandIcon className="w-12 h-12 sm:w-14 sm:h-14 mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg" />
              <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 mr-3 bg-cyan-400/30 rounded-full blur-xl group-hover:bg-cyan-300/50 transition-all duration-500"></div>
            </div>
            <div className="font-noto-jp">
              <span className="block text-lg sm:text-xl font-black tracking-wider neon-glow">
                初音ミク
              </span>
              <span className="block text-xs sm:text-sm font-light tracking-widest opacity-80">
                FAN HUB
              </span>
            </div>
          </button>

          {/* Navigation */}
          <nav className="mt-6 sm:mt-0">
            <ul className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {NAV_LINKS.map((link, index) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path} className="relative">
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className={`group relative flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ease-in-out cyber-border
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-500 overflow-hidden
                                 ${isActive 
                                   ? 'glass-effect text-cyan-300 shadow-lg shadow-cyan-500/25 border-cyan-400/30' 
                                   : 'text-slate-300 hover:text-white hover:glass-effect hover:shadow-lg hover:shadow-purple-500/25 border-transparent hover:border-purple-400/30'
                                 }`}
                      style={{ animationDelay: `${index * 100}ms` }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {/* Background glow effect */}
                      <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20' 
                          : 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100'
                      }`}></div>
                      
                      {/* Icon */}
                      {link.icon && (
                        <link.icon className={`relative w-5 h-5 mr-2 transition-all duration-300 ${
                          isActive 
                            ? 'text-cyan-400 drop-shadow-lg animate-sparkle' 
                            : 'text-slate-400 group-hover:text-purple-400 group-hover:animate-float'
                        }`} />
                      )}
                      
                      {/* Text */}
                      <span className="relative font-medium tracking-wide">
                        {link.name}
                      </span>
                      
                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
                      )}
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
