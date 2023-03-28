import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./assets/locales/en/translation.json";
import translationSP from "./assets/locales/sp/translation.json";
// import translationFR from "./assets/locales/fr/translation.json";

const fallbackLng = ["en"];
const availableLanguages = ["en", "sp", "fr"];

const resources = {
  en: {
    translation: translationEN,
  },
  sp: {
    translation: translationSP,
  },
  // fr: {
  //   translation: translationFR,
  // },
};

i18n

  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
