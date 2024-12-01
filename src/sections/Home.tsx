import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const {t} = useTranslation()
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-center relative flex-col justify-center items-center h-full"
    >
      <h1 className="text-5xl font-bold mb-4">{t("welcome")}</h1>
      <p className="text-lg text-gray-200">
      {t("description")}
      </p>
    </motion.div>
  );
};

export default Home;
