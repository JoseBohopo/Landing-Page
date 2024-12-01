import { motion } from "framer-motion";
import { HeaderProps } from "./header-types";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "../../components/ThemeToggle";

import "./header.css";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header: React.FC<HeaderProps> = ({ ROUTES, onSetPath }: HeaderProps) => {
  const { t } = useTranslation();
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
    <header className="font-coco p-8 text-black dark:text-white">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between align-middle h-full w-full"
      >
        {/* Header */}
        <span className="font-coco logo-initials font-bold text-4xl pt-0.5 bg-gradient-to-r from-teal-400  to-indigo-500 text-transparent bg-clip-text  hover:from-indigo-500 hover:to-teal-400 transition-all duration-300">
          JB
        </span>
        <div>{renderCenterButtons}</div>
        <div className="flex items-center">
          <LanguageSwitcher /> <ThemeToggle /> <SocialLinks />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
