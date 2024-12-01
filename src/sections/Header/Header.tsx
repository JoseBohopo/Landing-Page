import { motion } from "framer-motion";
import { HeaderProps } from "./header-types";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "../../components/ThemeToggle";

import "./header.css";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header: React.FC<HeaderProps> = ({ ROUTES, onSetPath }: HeaderProps) => {

  const  {t} = useTranslation()
  const centerButtonsProperties = [
    {
      targetRoute: ROUTES.HOME,
    },
    {
      targetRoute: ROUTES.ABOUT,
    },
    {
      targetRoute: ROUTES.PROJECTS,
    },
  ];
  const renderCenterButtons = centerButtonsProperties.map((element) => (
    <button
      key={element.targetRoute}
      className="custom-btn btn"
      onClick={() => onSetPath(element.targetRoute)}
    >
      <span>{t(element.targetRoute)}</span>
    </button>
  ));
  return (
    <header className="shadow-md  p-4 text-black dark:text-white">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center align-middle h-full w-full gap-5"
      >
        {/* Header */}
        {renderCenterButtons}
        <div className="translate-x-[25rem] flex items-center">
          <LanguageSwitcher /> <ThemeToggle /> <SocialLinks />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
