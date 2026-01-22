
import React from 'react';
import { HomePage } from './pages/HomePage';
import { SobreMikuPage } from './pages/SobreMikuPage';
import { SobreVocaloidPage } from './pages/SobreVocaloidPage';
import { NoticiasPage } from './pages/NoticiasPage';
import { NewsDetailsPage } from './pages/NewsDetailsPage';
// import { NoticiaYamahaPage } from './pages/NoticiaYamahaPage';
import { LegadoPage } from './pages/LegadoPage';
import { MusicaPage } from './pages/MusicaPage';
import { ArtePage } from './pages/ArtePage';
import { PageRoute } from './types';
import { 
  HomeIcon, 
  MikuBrandIcon, 
  InfoIcon, 
  NewsIcon, 
  BookOpenIcon, 
  SparklesIcon, 
  MikuOutlineIcon 
} from './components/Icons';

export { 
  HomeIcon, 
  MikuBrandIcon, 
  InfoIcon, 
  NewsIcon, 
  BookOpenIcon, 
  SparklesIcon, 
  MikuOutlineIcon 
};


export const SITE_TITLE = 'Miku Fan Hub';
export const MIKU_TEAL = '#00AEEF';


export const NAV_LINKS: PageRoute[] = [
  { path: '/', name: 'Início', component: HomePage, icon: HomeIcon },
  { path: '/sobre-miku', name: 'Sobre Miku', component: SobreMikuPage, icon: MikuBrandIcon },
  { path: '/sobre-vocaloid', name: 'Sobre Vocaloid', component: SobreVocaloidPage, icon: InfoIcon },
  { path: '/noticias', name: 'Notícias', component: NoticiasPage, icon: NewsIcon },
  { path: '/legado', name: 'Legado', component: LegadoPage, icon: BookOpenIcon },
];


export const ADDITIONAL_ROUTES: PageRoute[] = [
  { path: '/noticias/:slug', name: 'Notícia Detalhe', component: NewsDetailsPage, icon: NewsIcon },
];
