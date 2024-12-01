import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      description: "Discover my projects, skills, and experiences.",
      HOME: "HOME",
      ABOUT: "ABOUT",
      PROJECTS: "PROJECTS",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi portafolio",
      description: "Descubre mis proyectos, habilidades y experiencias.",
      HOME: "INICIO",
      ABOUT: "SOBRE MI",
      PROJECTS: "PROJECTOS",
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integra i18n con React
  .init({
    resources, // Traducciones disponibles
    fallbackLng: "en", // Idioma predeterminado si el idioma del navegador no está soportado
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad
    },
  });

export default i18n;
