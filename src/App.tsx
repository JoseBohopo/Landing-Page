import React, { useState } from "react";
import { motion } from "framer-motion";

import "./index.css";

import Header from "./sections/Header/Header";
import TechnologySlider from "./components/TechnologySlider";
import Main from "./sections/Main/Main";
import { ROUTES_PATH, technologies } from "./utils/Constants";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  const [path, setPath] = useState(ROUTES_PATH.HOME);

  return (
    <ThemeProvider>
      <motion.div
        className="min-h-screen overflow-hidden flex flex-col justify-between bg-gradient-to-r dark:bg-gradient-to-b from-indigo-500 to-teal-400 dark:from-black dark:via-indigo-900 dark:to-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Contenido de la App */}
        <Header ROUTES={ROUTES_PATH} onSetPath={setPath} />
        <Main ROUTES={ROUTES_PATH} path={path} />
        <TechnologySlider technologies={technologies} />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
