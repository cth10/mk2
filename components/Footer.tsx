
import React from 'react';
import { MIKU_TEAL, SITE_TITLE } from '../constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-black/30 backdrop-blur-xl text-slate-300 py-12 border-t border-cyan-500/30 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 left-10 w-2 h-2 bg-cyan-400/60 rounded-full animate-float"></div>
        <div className="absolute top-8 right-20 w-1 h-1 bg-purple-400/60 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-6 left-1/3 w-1.5 h-1.5 bg-pink-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-10 right-1/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Main text */}
          <div className="glass-effect rounded-2xl p-6 mx-auto max-w-2xl border border-cyan-500/20">
            <p className="text-lg font-medium leading-relaxed">
              &copy; {currentYear} {SITE_TITLE}
            </p>
            <p className="mt-2 text-base">
              Feito com <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 font-bold animate-pulse">♥</span> e código 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-semibold"> otaku</span>!
            </p>
          </div>

          {/* Copyright info */}
          <div className="space-y-3 text-sm opacity-80">
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              <span className="font-noto-jp">初音ミク</span> é um produto da 
              <span className="text-cyan-400 font-semibold">Crypton Future Media, INC</span>
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            </p>
            
            <p className="flex items-center justify-center gap-2">
              <span className="inline-block w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse"></span>
              <span className="text-purple-300">Vocaloid</span> é uma marca registrada da 
              <span className="text-pink-400 font-semibold">Yamaha Corporation</span>
              <span className="inline-block w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            </p>
            
            <p className="text-xs opacity-60 mt-4 border-t border-slate-700/50 pt-4">
              Todas as imagens e marcas registradas pertencem aos seus respectivos proprietários.
              <br />
              <span className="text-cyan-400/80">Este é um projeto de fã não-comercial dedicado à comunidade Vocaloid.</span>
            </p>
          </div>

          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-8 pt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-3 h-3 border-2 border-cyan-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};
