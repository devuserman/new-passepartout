import React from 'react';
import './Footer-min.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export function Footer() {  
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-section">
        <div className="footer-logo">
      <p className="text-logo">{t('footer.developedBy')}</p>
        <img className="logo-dev" src="/images/logo.webp" alt="Logo developpement" />
        </div>
        </div>
  <div className="footer-section">
  <div className="footer-contact">
  <a 
  href="https://wa.me/33642985037" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Contactez-nous par WhatsApp"
>
</a>
    <a href="tel:+33642985037" aria-label='Contactez nous lien en bas'>{t('footer.callUs')}</a>
    <a href="mailto:jereservemonvtc@gmail.com" title="Envoyez-nous un mail" className="mail-box">
    {t('footer.contactByEmail')}
      <img className="icon-mail" src="/images/mail_post.webp" alt="Email icon" />
    </a>
  </div>
</div>
      <div className="footer-section footer-legal">
        <Link to="/terms-and-privacy"> {t('footer.termsAndPrivacy')}</Link>
      </div>
  </footer>
  );
};

export default Footer;
