import React from 'react';
import { HomePage } from './pages/HomePage';
import { SobreMikuPage } from './pages/SobreMikuPage';
import { SobreVocaloidPage } from './pages/SobreVocaloidPage';
import { LegadoPage } from './pages/LegadoPage';
import { PageRoute } from './types';

// Placeholder simple icons (Heroicons style)
export const HomeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

// Simplified Miku Twintail icon for brand
export const MikuBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1">
    <path d="M20,10 C10,25 10,40 20,55 L23,55 C13,40 13,25 23,10 Z" fill="#33c6ab" stroke="none" />
    <path d="M44,10 C54,25 54,40 44,55 L41,55 C51,40 51,25 41,10 Z" fill="#33c6ab" stroke="none" />
    <circle cx="32" cy="12" r="8" fill="#33c6ab" stroke="none" />
    <circle cx="18" cy="20" r="3" fill="#ff8fab" stroke="none" />
    <circle cx="46" cy="20" r="3" fill="#ff8fab"stroke="none" />
  </svg>
);

export const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
  </svg>
);

export const BookOpenIcon = ({ className }: { className?: string }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 7.5l.813-2.846a.75.75 0 011.087-.589L22.5 5.25l-2.846.813a.75.75 0 01-.589 1.087L18.25 10.5l-.813-2.846a.75.75 0 01.589-1.087L15 6.75l2.846-.813a.75.75 0 011.087.589L18.25 7.5zM18.25 16.5l.813-2.846a.75.75 0 011.087-.589L22.5 14.25l-2.846.813a.75.75 0 01-.589 1.087L18.25 19.5l-.813-2.846a.75.75 0 01.589-1.087L15 15.75l2.846-.813a.75.75 0 011.087.589L18.25 16.5z" />
  </svg>
);


// Site config
export const SITE_TITLE = 'Miku Fan Hub';
export const MIKU_TEAL = '#00AEEF'; // Example Miku teal color


// Navigation Links
export const NAV_LINKS: PageRoute[] = [
  { path: '/', name: 'Início', component: HomePage, icon: HomeIcon },
  { path: '/sobre-miku', name: 'Sobre Miku', component: SobreMikuPage, icon: MikuBrandIcon },
  { path: '/sobre-vocaloid', name: 'Sobre Vocaloid', component: SobreVocaloidPage, icon: InfoIcon },
  { path: '/legado', name: 'Legado', component: LegadoPage, icon: BookOpenIcon },
];