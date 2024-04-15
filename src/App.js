import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import './components/i18n.js';

const Accueil = lazy(() => import('./components/Accueil/Accueil'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const TermsAndPrivacy = lazy(() => import('./components/TermsAndPrivacy/TermsAndPrivacy'));

function NotFound() {
  return <div>NotFound</div>;
}
function App() {
  return (
    <div className="App">
       <a 
        className="icon-fixed watsapp" 
        href="https://wa.me/33642985037" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Lien sur WhatsApp">
         <FontAwesomeIcon icon={faWhatsapp} size="3x" color="green" />
      </a>
      <a className="icon-fixed phone" href="tel:+33642985037" aria-label="Contactez nous bas lien">
        <FontAwesomeIcon icon={faPhone} size="2x" color="green" />
      </a>
     <Router>
        <Helmet>
          <title>Taxi privé</title>
        </Helmet>
        <Suspense fallback={<div>Chargement...</div>}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
