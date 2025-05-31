import React from 'react';
import { HomePage } from './pages/HomePage';
import { SobreMikuPage } from './pages/SobreMikuPage';
import { SobreVocaloidPage } from './pages/SobreVocaloidPage';
import { LegadoPage } from './pages/LegadoPage';

// Placeholder components for new pages
const MusicaPage = () => <div>Música Page</div>;
const ArtePage = () => <div>Arte Page</div>;
const TecnologiaPage = () => <div>Tecnologia Page</div>;
const CulturaPage = () => <div>Cultura Page</div>;
const ComunidadePage = () => <div>Comunidade Page</div>;

// Placeholder icons for new pages
const MusicIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M9 9l7-7 7 7-7 7"/></svg>;
const ArtIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" d="M12 21v-3m0 0V6m0 15v-3M6 10.186L18 4.814M6 14.814L18 10.186M6 19.814L18 14.814"/></svg>;
const TechIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L5.25 17.25m11.99-10.5a2.25 2.25 0 00-3.182 3.182L19.5 19.5m-10.5 11.99a2.25 2.25 0 01-3.181-3.182l2.69-2.69h3.182a3 3 0 003-3v-2.25M16.5 6.75a3 3 0 013 3v2.25m0 0h-3.182a2.25 2.25 0 01-3-3V6.75m3 3L5.25 3.75m11.25 0a2.25 2.25 0 013 3L5.25 20.25"/></svg>;
const CultureIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-4.037m-7.32-1.732a5.004 5.004 0 004.088-1.787m-7.32-1.732A5.004 5.004 0 004.088 9.878m7.32 7.32a9.004 9.004 0 00-8.715 4.037M12 7.5a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"/></svg>;
const CommunityIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479m-3.741.479c-.3 0-.225.24-.225.678v2.615c0 .744-.333 1.128-.669 1.128a1.121 1.121 0 01-1.56-.855l-1.52-1.314a5.713 5.713 0 00-.224-.419M15 18.72a9.094 9.094 0 00-3.741-.479m3.741.479c.3 0 .225.24.225.678v2.615c0 .744.333 1.128.669 1.128a1.121 1.121 0 011.56-.855l1.52-1.314a5.713 5.713 0 00.224-.419M9 18.72a9.094 9.094 0 00-3.741-.479m3.741.479c-.3 0-.225.24-.225.678v2.615c0 .744-.333 1.128-.669 1.128a1.121 1.121 0 01-1.56-.855l-1.52-1.314a5.713 5.713 0 00-.224-.419M3 18.72V9.75a3.75 3.75 0 013.75-3.75h10.5a3.75 3.75 0 013.75 3.75v8.97a3.75 3.75 0 01-3.75 3.75H6.75a3.75 3.75 0 01-3.75-3.75z"/></svg>;

// Types
export interface PageRoute {
  path: string;
  name: string;
  component: React.FC;
  icon?: React.FC<{ className?: string }>;
}

// Icons with cyber aesthetic
export const HomeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
  </svg>
);

export const InfoIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
  </svg>
);

export const SparklesIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
  </svg>
);

export const MikuOutlineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className || "w-6 h-6"} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.5 2 6 4.5 6 8C6 9.5 6.5 11 7.5 12L12 22L16.5 12C17.5 11 18 9.5 18 8C18 4.5 15.5 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 6L10 4M16 6L14 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Enhanced Miku Brand Icon with more detail
export const MikuBrandIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Twin tails */}
    <path d="M16,8 C8,20 8,35 16,50 L20,50 C12,35 12,20 20,8 Z" fill="currentColor" opacity="0.9" />
    <path d="M48,8 C56,20 56,35 48,50 L44,50 C52,35 52,20 44,8 Z" fill="currentColor" opacity="0.9"/>

    {/* Head */}
    <circle cx="32" cy="16" r="12" fill="currentColor" opacity="0.8"/>

    {/* Hair accessories */}
    <circle cx="20" cy="18" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="44" cy="18" r="4" fill="currentColor" opacity="0.6"/>

    {/* Additional details */}
    <path d="M32,28 L32,40" stroke="currentColor" strokeWidth="2" opacity="0.7"/>
    <circle cx="32" cy="42" r="2" fill="currentColor" opacity="0.7"/>
  </svg>
);

// Navigation Links
export const NAV_LINKS: PageRoute[] = [
  { path: '/', name: 'Início', component: HomePage, icon: HomeIcon },
  { path: '/sobre-miku', name: 'Sobre Miku', component: SobreMikuPage, icon: MikuOutlineIcon },
  { path: '/sobre-vocaloid', name: 'Sobre Vocaloid', component: SobreVocaloidPage, icon: InfoIcon },
  { path: '/legado', name: 'Legado', component: LegadoPage, icon: SparklesIcon },
  { path: '/musica', name: 'Música', component: MusicaPage, icon: MusicIcon },
  { path: '/arte', name: 'Arte', component: ArtePage, icon: ArtIcon },
  { path: '/tecnologia', name: 'Tecnologia', component: TecnologiaPage, icon: TechIcon },
  { path: '/cultura', name: 'Cultura', component: CulturaPage, icon: CultureIcon },
  { path: '/comunidade', name: 'Comunidade', component: ComunidadePage, icon: CommunityIcon },
];

// Site configuration
export const MIKU_TEAL = '#00AEEF';
export const MIKU_PINK = '#FF69B4';
export const SITE_TITLE = "初音ミク Fan Hub";