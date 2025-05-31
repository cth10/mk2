
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { NAV_LINKS, MikuBrandIcon, SITE_TITLE } from '../constants';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside or on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-panel') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="relative bg-black/20 backdrop-blur-xl shadow-2xl sticky top-0 z-50 border-b border-cyan-500/30">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-cyan-900/20 to-pink-900/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <button
              onClick={() => handleNavigation('/')}
              className="group flex items-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-cyan-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-xl p-2 glass-effect"
              aria-label={`Navegar para a página inicial de ${SITE_TITLE}`}
            >
              <div className="relative">
                <MikuBrandIcon className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mr-2 sm:mr-3 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 drop-shadow-lg" />
                <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mr-2 sm:mr-3 bg-cyan-400/30 rounded-full blur-xl group-hover:bg-cyan-300/50 transition-all duration-500"></div>
              </div>
              <div className="font-noto-jp">
                <span className="block text-base sm:text-lg lg:text-xl font-black tracking-wider neon-glow">
                  初音ミク
                </span>
                <span className="block text-xs sm:text-sm font-light tracking-widest opacity-80">
                  FAN HUB
                </span>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden mobile-menu-button relative z-50 p-3 rounded-xl glass-effect border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-6 relative flex flex-col justify-center">
                <span className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'}`}></span>
                <span className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'}`}></span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex gap-3">
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

      {/* Mobile Navigation Menu - Moved outside header for better positioning */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Panel */}
          <div className="mobile-menu-panel absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 transform transition-transform duration-300 ease-in-out overflow-y-auto">
            {/* Menu header */}
            <div className="sticky top-0 p-6 border-b border-cyan-500/20 bg-black/95 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Navegação
                </h2>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg glass-effect border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  aria-label="Fechar menu"
                  type="button"
                >
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Menu items */}
            <nav className="p-6">
              <ul className="space-y-3">
                {NAV_LINKS.map((link, index) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <li key={link.path}>
                      <button
                        onClick={() => handleNavigation(link.path)}
                        className={`group w-full flex items-center px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ease-in-out cyber-border
                                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-cyan-500 overflow-hidden text-left
                                   ${isActive 
                                     ? 'glass-effect text-cyan-300 shadow-lg shadow-cyan-500/25 border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-purple-500/20' 
                                     : 'text-slate-300 hover:text-white hover:glass-effect hover:shadow-lg hover:shadow-purple-500/25 border-transparent hover:border-purple-400/30 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10'
                                   }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                        aria-current={isActive ? 'page' : undefined}
                        type="button"
                      >
                        {/* Icon */}
                        {link.icon && (
                          <link.icon className={`w-6 h-6 mr-4 transition-all duration-300 ${
                            isActive 
                              ? 'text-cyan-400 drop-shadow-lg animate-sparkle' 
                              : 'text-slate-400 group-hover:text-purple-400 group-hover:animate-float'
                          }`} />
                        )}
                        
                        {/* Text */}
                        <span className="font-medium tracking-wide">
                          {link.name}
                        </span>
                        
                        {/* Active indicator */}
                        {isActive && (
                          <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer info in mobile menu */}
            <div className="sticky bottom-0 p-6 mt-auto bg-black/95 backdrop-blur-xl">
              <div className="glass-effect rounded-xl p-4 border border-purple-500/20 text-center">
                <div className="text-xs text-slate-400 mb-2">
                  Fan Hub Portal
                </div>
                <div className="text-sm font-noto-jp text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  初音ミク
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
