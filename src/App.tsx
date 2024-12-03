import React, { useState } from "react";
import { motion } from "framer-motion";

import "./translation/i18n.js";
import { technologies } from "./utils/Constants";
import { ThemeProvider } from "./context/ThemeContext";
import "./index.css";
import "./App.css";

import Header from "./sections/Header/Header";
import Main from "./sections/Main/Main";
import TechnologySlider from "./components/TechnologySlider";

const App: React.FC = () => {
  const [path, setPath] = useState("HOME");

  return (
    <ThemeProvider>
      <motion.div
        className="app-container bg-gradient-to-r dark:bg-gradient-to-b from-teal-400 via-blue-500 to-indigo-500
 dark:from-black dark:via-indigo-900 dark:to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-label="Application Container"
      >
        <Header onSetPath={setPath} />
        <Main path={path} />
        <footer className="mt-4 lg:mt-8">
          <TechnologySlider technologies={technologies} />
        </footer>
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
