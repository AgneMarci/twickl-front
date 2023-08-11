import React, { useState } from 'react';
import { Send } from '@mui/icons-material';
import './newsletter.css';

const Newsletter = () => {
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
        Newsletter
      </h1>
      <p className='description'>
        Get our hottest news first!
      </p>
      <div className='inputcontainer'>
        <input placeholder='type your E-mail here' />
        <button onClick={handleSendMessage}>
          <Send />
        </button>
      </div>
      {showNotification && <p className='notification'>Message Sent!</p>}
    </div>
  );
};

export default Newsletter;
