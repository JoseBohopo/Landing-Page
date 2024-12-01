import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [langSelected, setLangSelected] = useState("");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangSelected(lng);
  };

  const engButton = (
    <button
      onClick={() => changeLanguage("en")}
      className="w-5 h-5 p-0 rounded-full overflow-hidden focus:outline-none hover:scale-105 transition-transform"
      aria-label="Switch to English"
    >
      <img
        src="../../public/united-kingdom-flag.png"
        alt="English"
        aria-label="Uk flag icons created by Freepik - Flaticon"
        className="w-full h-full"
      />
    </button>
  );

  const espButton = (
    <button
      onClick={() => changeLanguage("es")}
      className="w-5 h-5 p-0 rounded-full overflow-hidden focus:outline-none hover:scale-105 transition-transform"
      aria-label="Cambiar a Español"
    >
      <img
        src="../../public/spain-flag.png"
        alt="Español"
        aria-label="Spain icons created by Freepik - Flaticon"
        className="w-full h-full"
      />
    </button>
  );

  const renderLangSelectedButton =
    langSelected === "es" ? engButton : espButton;

  return (
    <div className="flex justify-center gap-4 my-4">
      {renderLangSelectedButton}
    </div>
  );
};

export default LanguageSwitcher;
