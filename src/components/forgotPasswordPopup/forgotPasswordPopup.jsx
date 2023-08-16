import React, { useState } from 'react';
import { Send } from '@mui/icons-material';
import './forgotPasswordPopup.css';

const ForgotPasswordPopup = ({ onClose }) => {
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
          Please enter your email, we will send you a password change link.
        </h1>
        <div className='passwordInputContainer'>
          <input placeholder='Type your E-mail here' />
          <button onClick={handleSendResetLink}>
            <Send />
          </button>
        </div>
        {showNotification && 
        <div className="toastNotification">
          Reset Link Sent!
        </div>}
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
