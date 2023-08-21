import React from 'react';
import "./announcement.css";
import { useTranslation } from 'react-i18next'; 

export const Announcement = () => {
  const { t } = useTranslation(); 
  
  return (
    <div className="announcement">
        {t("announcement.shippingMessage")} 
    </div>
  );
};
