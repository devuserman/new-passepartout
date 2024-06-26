import React, { useEffect } from 'react';
import './CarteMaps-min.css';

function CarteMaps() {
  useEffect(() => {
   const handleScroll = () => {
     console.log('Scrolling occurred!');
      };

    
    window.addEventListener('scroll', handleScroll);

     return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="map-container">
      <iframe
        title="Localisation"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5679649.664353664!2d2.0543329651262665!3d45.96593768229814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54a02933785731%3A0x6bfd3f96c747d9f7!2sFrance!5e0!3m2!1sfr!2sfr!4v1701821171872!5m2!1sfr!2sfr"
        style={{ border: 0 }}
        allowFullScreen="France"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default CarteMaps;
