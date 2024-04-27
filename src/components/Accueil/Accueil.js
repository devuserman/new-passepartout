import './Accueil-min.css';
import { Helmet } from 'react-helmet';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
 import Footer from '../Footer/Footer';
import SingleSlide from '../SingleSlide/SingleSlide';
import CarteMaps from '../CarteMaps/CarteMaps';
import { Link } from 'react-router-dom';
import CommentSlideshow from '../CommentSlideshow//CommentSlideshow';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n.js';
import '../locales/fr/translation.json';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Accueil() {
  const location = useLocation();
  const { t } = useTranslation();
  console.log(i18n.getResourceBundle('fr', 'translation'));

  useEffect(() => {
    if (location.hash === '#target-header') {
      const section = document.getElementById('target-header');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
  const handleTouchStart = (event) => {
    event.preventDefault();
   };

   const handleTouchMove = (event) => {
     event.preventDefault();
   };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
     document.removeEventListener('touchstart', handleTouchStart);
     document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const imageSets = [
    {
      images: ['/images/il-de-re.webp', '/images/lexusnx1.webp'],
      alts: ['Hotel-de-ville', 'LexusNX']
    },
    {
      images: ['/images/la-gare.webp', '/images/vtc1731.webp'],
      alts: ['La-gare La Rochelle', 'Tayota chr']
    },
    {
      images: ['/images/la-rochelle.webp', '/images/vtc175.webp'],
      alts: ['Ville La Rochelle', 'Tayota chr']
    },
    {
      images: isMobile ? ['/images/La-Rochelle_1.webp'] : ['/images/La-Rochelle_1.avif'],
      alts: ['Il de Ré', 'Port La Rochelle']
    },
  ];

return (
    <>
      <Helmet>
        <title>VTC Privé – Votre Service de Taxi Personnel à La Rochelle</title>
      </Helmet>
  <Header />
  <div className="link-container">
    <a className="contact-link" href="tel:+33642985037" aria-label='Contactez nous haut lien'>
        <div className="phone-box" >
            {t('home.contactUs')}
        </div>
    </a>
    <a href="#target-header" className="text-box">
        <div className="phone-box">
            {t('home.tarifOur')}
        </div>
    </a>
    <Link to="/Contact" className="text-box">
        <div className="phone-box">
            {t('home.requestAQuote')}
        </div>
    </Link>
</div>
    <div className="section-text">
        <div className="haut-box">
        <div className="box-1">
          <img src="/images/temps.webp" alt="Heure" className="image-temps" />
          <p className="texte-temps">{t('home.transfer24')}</p>
        </div>
        </div>
        <div className="haut-box">
        <div className="box-1">
          <img src="/images/siege_auti.webp" alt="Siege bebe" className="image-temps" />
          <p className="texte-temps">{t('home.childSafety')}</p>
        </div>
        </div>
        <div className="haut-box">
        <div className="box-1">
          <img src="/images/bagage.webp" alt="Bagage" className="image-temps" />
          <p className="texte-temps">{t('home.luggagePolicy')}</p>
        </div>
        </div>
      </div>
<div className="chema-box">
      <img src="/images/chema_vtc.webp" alt="Chema logo" className="chema-logo" />
      </div>
     <p className="text-vtc">{t('home.reserveYourVTC')}</p>
  <div className="body-centre">
<div className="imageContainer">
  {imageSets.map((set, index) => (
    <div key={index} className={`singleSlideContainer ${index === 3 ? 'full-width' : 'full-height'}`}>
      <SingleSlide images={set.images} alts={set.alts} />
    </div>
  ))}
</div></div>
<div className="section-texte-2">
<div className="box-2"  id="target-header">
        <img src="/images/tarif_icone.webp" alt="Icone tarif" className="image-tarifs" />
        <h1 className="titre-tarif">{t('home.pricingPolicy')}</h1>
        <p className="text-tarif">{t('home.pricingDetails')}</p>
      </div>
</div>
<div className="chema-box">
      <img src="/images/chema_vtc.webp" alt="Chema logo" className="chema-logo" />
      </div>
    <div className="box-form">
        <div className="carte-maps">
      <CarteMaps />
      </div>
      <div className="contact-form">
      <img src="/images/reservation.webp" alt="" className="image-temps" />
      <ContactForm />
      </div>
      </div>
  <div className="comment-box">
    <div className="lien-comment">
    <a href="https://www.google.fr/localservices/prolist?g2lbs=ANTchaPojQ1B_LkFKJuurgjN7q6MwMm_NEgqlN-2GQCizvXvuWbeyFwhRWUeJIxQU5LUYqqtw4wO6qcP5YEgACLVsSVLxsWIeGvhgNwWfm6yQiH-4C9PSmU_Juxm9J_BJs16VEz2C5Gr&hl=fr-FR&gl=fr&ssta=1&q=vtc%20la%20rochelle&oq=vtc%20la%20rochelle&src=2&serdesk=1&sa=X&ved=2ahUKEwi3ppGLuZGDAxUyUaQEHfb5DTEQjGp6BAgeEAE&spp=Cg0vZy8xMXR3cTNwaDF2OoQBV2hNUUFDSVBkblJqSUd4aElISnZZMmhsYkd4bHFnRkxDZ2d2YlM4d2NXSTBPQkFCS2djaUEzWjBZeWdFTWg4UUFTSWJZcE84cEdSSG1vek9oelNrcmNzUkdqX2JuQl9jRE9KVVplWl9NaE1RQWlJUGRuUmpJR3hoSUhKdlkyaGxiR3hs&slp=MgBAAVIECAIgAGAAaAGaAQYKAhcZEAA%3D&scp=ChZnY2lkOmxpbW91c2luZV9zZXJ2aWNlEikiEXpvbmUgc3VyIGxhIGNhcnRlKhQNWOZ3GxW0Dj__HYZ2kBslADRY_xoDdnRjKiBTZXJ2aWNlIGRlIGNoYXVmZmV1ciBwYXJ0aWN1bGllcg%3D%3D" target="_blank" rel="noreferrer" className="google-review-button">{t('home.rateUsOnGoogle')}</a>
    </div>
    <div className="container-avis">
    <CommentSlideshow />
    </div>
    </div>
   <Footer />
    </>
  );
}

export default Accueil;


