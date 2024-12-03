import React from "react";
import { motion } from "framer-motion";

import "./header.css";

import LanguageSwitcher from "../../components/LanguageSwitcher";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "../../components/ThemeToggle";
import HeaderNavigationButtons from "../../components/HeaderNavigationButtons";
import { Dispatch, SetStateAction } from "react";

const Header: React.FC<{ onSetPath: Dispatch<SetStateAction<string>> }> = ({
  onSetPath,
}) => {
  return (
    <header className="font-coco p-6 md:p-8 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-between items-center h-full w-full"
        aria-label="Main Header"
      >
        <span className="font-coco logo-initials font-bold text-sm lg:text-4xl bg-gradient-to-r from-teal-400 to-indigo-500 text-transparent bg-clip-text hover:from-indigo-500 hover:to-teal-400 transition-all duration-300">
          JB
        </span>
        <nav aria-label="Primary Navigation" className="flex items-center">
          <HeaderNavigationButtons onSetPath={onSetPath} />
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <ThemeToggle aria-label="Switch between dark and light mode" />
          <SocialLinks aria-label="Change language" />
        </div>
      </motion.div>
    </header>
  );
};

export default React.memo(Header);
