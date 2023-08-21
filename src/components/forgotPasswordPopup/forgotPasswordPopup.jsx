import React, { useState } from 'react';
import { Send } from '@mui/icons-material';
import './forgotPasswordPopup.css';
import { useTranslation } from 'react-i18next';

const ForgotPasswordPopup = ({ onClose }) => {
  const { t } = useTranslation();
  const [showNotification, setShowNotification] = useState(false);
  
  const handleSendResetLink = () => {
    setShowNotification(true);

    setTimeout(() => {
      setShowNotification(false);
      onClose();
    }, 2000);
  };

  return (
    <div className='forgotPasswordPopup'>
      <div className="popupOverlay" onClick={onClose}></div>
      <div className="popupContent">
        <h1 className='heading'>
          {t('forgotPasswordPopup.heading')}
        </h1>
        <div className='passwordInputContainer'>
        <input placeholder={t('forgotPasswordPopup.Type your E-mail here')} />
          <button onClick={handleSendResetLink}>
            <Send />
          </button>
        </div>
        {showNotification && 
        <div className="toastNotification">
          {t('forgotPasswordPopup.toastNotification')}
        </div>}
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
