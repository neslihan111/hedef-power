import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

const Services = React.lazy(() => import('./pages/Services'));
const Gallery = React.lazy(() => import('./pages/Gallery'));

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center">Yükleniyor...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
