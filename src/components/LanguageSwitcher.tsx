import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [langSelected, setLangSelected] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangSelected(lng);
  };

  const conditionalButton = {
    es: {
      selectedLang: "en",
      ariaLabel: "Switch to English",
      flag: "united-kingdom-flag.png",
      alt: "English",
    },
    en: {
      ariaLabel: "Cambiar a Español",
      selectedLang: "es",
      flag: "spain-flag.png",
      alt: "Español",
    },
  };
  const { selectedLang, ariaLabel, flag, alt } =
    langSelected === conditionalButton.en.selectedLang
      ? conditionalButton.es
      : conditionalButton.en;

  return (
    <div className="flex justify-center gap-4 my-4">
      <button
        onClick={() => changeLanguage(selectedLang)}
        className="w-5 h-5 p-0 rounded-full overflow-hidden focus:outline-none hover:scale-105 transition-transform"
        aria-label={ariaLabel}
      >
        <img
          src={`../../public/${flag}`}
          alt={alt}
          id="flagImage"
          className="w-full h-full"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
