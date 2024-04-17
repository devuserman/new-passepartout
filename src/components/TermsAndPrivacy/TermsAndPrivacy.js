import React from 'react';
import './TermsAndPrivacy-min.css'; 
import { useTranslation } from 'react-i18next';

const TermsAndPrivacy = () => {
  const { t } = useTranslation();
  return (
    <div className="terms-privacy-container">
      <h1>{t('privacy.termsTitle')}</h1>
         <h2>{t('privacy.legalMentionsTitle')}</h2>
      <p>{t('privacy.legalMentionsContent')}</p>
      <h2>{t('privacy.accessToSiteTitle')}</h2>
      <p>
      {t('privacy.accessToSiteContent')}</p>

     <h2>{t('privacy.dataCollectionTitle')}</h2>
        <p>
        {t('privacy.dataCollectionContent')}
        </p>
     <h2> {t('privacy.intellectualPropertyTitle')}</h2>
        <p>
        {t('privacy.intellectualPropertyContent')}
        </p>
    <h2>{t('privacy.responsibilityTitle')}</h2>
        <p>
        {t('privacy.responsibilityContent')}
        </p>
      <h2>{t('privacy.hyperlinksTitle')}</h2>
        <p>{t('privacy.hyperlinksContent')}</p>
  <h2>{t('privacy.cookiesTitle')}</h2>
        <p>{t('privacy.cookiesContent')}</p>
    <h2>{t('privacy.applicableLawTitle')}</h2>
      <p>{t('privacy.applicableLawContent')}</p>
      </div>
  );
};

export default TermsAndPrivacy;
