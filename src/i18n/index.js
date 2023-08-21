import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsInEng from '../locales/en/translation.json';
import translationsInLithuanian from '../locales/lt/translation.json';

const resources = {
  en: {
    translation: translationsInEng
  },
  lt: {
    translation: translationsInLithuanian
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: localStorage.getItem("lang") || "en", 
    debug: true,
    fallbackLng: "lt", 
    interpolation: {
      escapeValue: false
    },
    ns: "translation", 
    defaultNS: "translation"
  });

export default i18n;