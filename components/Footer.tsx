
import React from 'react';
import { MIKU_TEAL, SITE_TITLE } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 sm:py-10 text-center border-t border-slate-800">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} {SITE_TITLE}. Feito com <span style={{ color: MIKU_TEAL }} className="font-semibold">amor</span> e código!
        </p>
        <p className="text-xs mt-2 opacity-75">
          Hatsune Miku é um produto da Crypton Future Media, INC. Vocaloid é uma marca registrada da Yamaha Corporation.
        </p>
         <p className="text-xs mt-2 opacity-50">
          Todas as imagens e marcas registradas pertencem aos seus respectivos proprietários.
        </p>
      </div>
    </footer>
  );
};