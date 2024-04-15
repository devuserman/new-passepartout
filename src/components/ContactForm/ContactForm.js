import React, { useState } from 'react';
import './ContactForm-min.css';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [num1] = useState(Math.floor(Math.random() * 10));
  const [num2] = useState(Math.floor(Math.random() * 10));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    const userAnswer = parseInt(data.userAnswer);
    const correctAnswer = num1 + num2;
  
    if (userAnswer === correctAnswer) {
      try {
        const response = await fetch('https://formspree.io/f/xnqeayeo', {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });
  
        if (response.ok) {
          setSubmitted(true);
          event.target.reset(); 
        } else {
          throw new Error('Ошибка при отправке формы');
        }
      } catch (error) {
        console.error('Ошибка отправки формы:', error);
      }
    } else {
      console.log('Неправильный ответ на проверку');
    }
  };
  
  
    return (
<form onSubmit={handleSubmit}>
  <h2>{t('contact.reservationFormTitle')}</h2>

  <h3>{t('contact.informationHeading')}</h3>
  <label>
  {t('contact.nameLabel')}
    <input type="text" name="nom" required />
  </label>
  <label>
  {t('contact.firstNameLabel')}
    <input type="text" name="prenom" required />
  </label>
  <label>
  {t('contact.emailLabel')}
    <input type="email" name="email" required />
  </label>
  <label>
  {t('contact.phoneNumberLabel')}
    <input type="tel" name="numero" required />
  </label>

  <h3>{t('contact.reservationDetailsHeading')}</h3>
  <label>
  {t('contact.departureDateLabel')} &nbsp;
    <input type="date" name="dateDepart" required />
  </label>
  <label>
  {t('contact.departureTimeLabel')} &nbsp;
    <input type="time" name="heureDepart" />
  </label>
  <label>
  {t('contact.numberOfPassengersLabel')} &nbsp;
                <input type="number" name="nombrePassagers" min="1" required />
            </label>
  <label>
  {t('contact.commentsLabel')}
    <textarea name="commentaires" rows="4"></textarea>
  </label>
  <label>
  {t('contact.departureAddressLabel')}
    <input type="text" name="adresseDepart" required />
  </label>
  <label>
  {t('contact.arrivalAddressLabel')}
    <input type="text" name="adresseArrivee" required />
  </label>

  <h3>{t('contact.numberVerificationLabel')}</h3>
  <label className="question-label">
  {t('contact.numberVerificationLabel')} {num1} + {num2}? &nbsp;
        <input type="number" name="userAnswer" required />
      </label>
            <input className="button-class" type="submit" value="Envoyer" />
            {submitted && 
            <div>{t('contact.successMessage')}</div>} 
</form>
  )
}

export default ContactForm; 

