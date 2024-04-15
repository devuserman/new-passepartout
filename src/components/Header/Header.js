import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './Header-min.css';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navigateToTarifs = (e) => {
    if (!location.pathname.includes('Accueil')) {
      e.preventDefault(); 
      navigate('/#target-header');
    }
  };
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const changeLanguage = (lng) => {
   console.log("Changing language to: ", lng);
    i18n.changeLanguage(lng);
  };
return (
    <>
    <Helmet>
  <title>VTC Privé – Votre Service de Taxi Personnel à La Rochelle</title>
    </Helmet>
<header>
      <h1 className="visually-hidden">Réservez un Taxi à La Rochelle</h1>
    <div className="logo-container">
    <h2 className="logo-title">VTC PASSEPARTOUT<br/>SERVICE DE CHAUFFEUR PRIVÉ</h2>
    <img 
        srcSet="
            /images/Lexus_nx2.webp 150w,
            /images/Lexus_nx1.webp 500w,
            /images/Lexus_nx.webp 800w"
        sizes="(max-width: 425px) 150px,
            (max-width: 1024px) 500px,800px"
        src="/images/Lexus_nx.webp" 
        alt="Logo vtc privé" 
        className="logo"
        loading="lazy" 
    />
</div>
<div className="burger-menu" onMouseEnter={openMenu}>
  <div className="burger-icon">
    <FaBars />
  </div>
      {menuOpen && (
          <div className={`menu-dropdown ${menuOpen ? 'show' : ''}`} onMouseLeave={closeMenu}>
            <Link to="/" onClick={closeMenu}>{t('header.home')}</Link>
            <Link to="/Contact" onClick={closeMenu}>{t('header.bookYourRide')}</Link>
            <a href="#target-header" onClick={(e) => navigateToTarifs(e)}>{t('header.ourRates')}</a>
          </div>
        )}
      </div>
      <div className="contact-icons">
      <img src={`${process.env.PUBLIC_URL}/images/Flag_of_the_United_States.webp`} height="25" className="flag-icon" alt="Flag of the United States" onClick={() => changeLanguage('en')} />
      <img src={`${process.env.PUBLIC_URL}/images/Flag_of_France.webp`} height="25" className="flag-icon" alt="Flag of France" onClick={() => changeLanguage('fr')} />
      </div>
      <div className="contact-icons2">
        <img src={`${process.env.PUBLIC_URL}/images/Flag_of_the_United_States.webp`} height="15" className="flag-icon" aria-label="Flag of the United States" alt="Flag of the United States" onClick={() => changeLanguage('en')} />
        <img src={`${process.env.PUBLIC_URL}/images/Flag_of_France.webp`} height="15" className="flag-icon" aria-label="Flag of France" alt="Flag of France" onClick={() => changeLanguage('fr')} />
      </div>
      </header>
    </>
  );
};

export default Header;

