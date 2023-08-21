import React from "react";
import { useTranslation } from 'react-i18next';
import Newsletter from "../../components/newsletter/newsletter";
import "./aboutus.css";
import Footer from "../../components/footer/footer";

export const Aboutus = () => {
  const { t } = useTranslation();

  return (
    <div className="main">
      <div className="container2">
        <div className="infoContainer">
          <h1 className="title">{t('aboutus.title')}</h1>
          <p className="description">
            {t('aboutus.description')}
          </p>
          <div className="buttonContainer">
            <button className="button" onClick={() => window.location.href = "/add"}>
              {t('aboutus.startSelling')}
            </button>
            <button className="button" onClick={() => window.location.href = "/shop"}>
              {t('aboutus.startShopping')}
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};
