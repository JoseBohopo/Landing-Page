import React, { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";

import "./header.css";

import LanguageSwitcher from "../../components/LanguageSwitcher";
import SocialLinks from "../../components/SocialLinks";
import ThemeToggle from "../../components/ThemeToggle";
import HeaderNavigationButtons from "../../components/HeaderNavigationButtons";
import { IoClose, IoMenu } from "react-icons/io5";

const Header: React.FC<{ onSetPath: Dispatch<SetStateAction<string>> }> = ({
  onSetPath,
}) => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
 
   const closeMenuOnMobile = () => {
     if (window.innerWidth <= 1150) {
       setShowMenu(false);
     }
   };
  return (
    <header className="w-full font-coco p-6 md:pt-10 md:px-10 text-black dark:text-white">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        aria-label="Main Header"
        className={"flex items-center justify-between" + ` ${showMenu ? "show-menu" : ""}`}
      >
        <div className="flex justify-between items-center h-full w-full">
          <span className="logo-initials font-bold text-lg lg:text-4xl bg-gradient-to-r from-teal-400 to-indigo-500 text-transparent bg-clip-text hover:from-indigo-500 hover:to-teal-400 transition-all duration-300">
            JB
          </span>
          {/* TODO: Hamburger for mobile */}
          <article className="flex">

          <section
            aria-label="Primary Navigation"
            className="flex items-center max-[867px]:hidden nav__menu"
          >
            <HeaderNavigationButtons onSetPath={onSetPath} />
          </section>
          <section className="flex items-center space-x-4 max-[867px]:hidden">
            <LanguageSwitcher />
            <ThemeToggle aria-label="Switch between dark and light mode" />
            <SocialLinks aria-label="Change language" />
          </section>
          <div className="nav__close min-[867px]:hidden" id="nav-close">
            <IoClose />
          </div>
          </article>
        </div>
        <div className="nav__toggle min-[867px]:hidden" id="nav-toggle">
          <IoMenu />
        </div>
      </motion.nav>
    </header>
  );
};

export default React.memo(Header);
