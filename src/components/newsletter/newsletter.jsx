import React, { useState } from 'react';
import { Send } from '@mui/icons-material';
import './newsletter.css';
import { useTranslation } from 'react-i18next'; 

const Newsletter = () => {
  const { t } = useTranslation(); 
  const [showNotification, setShowNotification] = useState(false);

  const handleSendMessage = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div className='newsletter'>
      <h1 className='news'>
        {t('newsletter.title')} 
      </h1>
      <p className='description'>
        {t('newsletter.description')}
      </p>
      <div className='inputcontainer'>
        <input placeholder={t('newsletter.placeholder')} />
        <button onClick={handleSendMessage}>
          <Send />
        </button>
      </div>
      {showNotification && <p className='notification'>{t('newsletter.notification')}</p>}
    </div>
  );
};

export default Newsletter;
