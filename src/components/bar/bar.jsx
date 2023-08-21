import React from "react";
import "./bar.css"; 
import { useTranslation } from 'react-i18next';

const Bar = () => {
  const { t } = useTranslation();

  return (
    <div className="barContainer">
      <div className="barInfoContainer">
        <h1 className="barTitle">{t('bar.title')}</h1>
        <button className="barButton" onClick={() => window.location.href = "/login"}>
          {t('bar.buttonText')}
        </button>
      </div>
    </div>
  );
};

export default Bar;
