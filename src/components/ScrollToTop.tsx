import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Rola a página para o topo a cada mudança de rota (SPA não faz isso por padrão)
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
