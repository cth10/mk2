import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { NotFoundPage } from './pages/NotFoundPage';
import { NAV_LINKS, ADDITIONAL_ROUTES } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">

          <Routes>
            {NAV_LINKS.map((page) => (
              <Route key={page.path} path={page.path} element={<page.component />} />
            ))}
            {ADDITIONAL_ROUTES.map((page) => (
              <Route key={page.path} path={page.path} element={<page.component />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
