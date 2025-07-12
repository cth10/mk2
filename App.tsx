import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NAV_LINKS, ADDITIONAL_ROUTES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          <Routes>
            {NAV_LINKS.map((page) => (
              <Route key={page.path} path={page.path} element={<page.component />} />
            ))}
            {ADDITIONAL_ROUTES.map((page) => (
              <Route key={page.path} path={page.path} element={<page.component />} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;