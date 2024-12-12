import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="h-full "
      aria-labelledby="home-title"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/*TODO:Professional Image*/}
        <div
          className="w-full md:w-1/3 flex justify-center"
          aria-label={t("home.photoAlt")}
        >
          <img
            src="/path-to-your-photo.jpg"
            alt={t("home.photoAlt")}
            className="w-48 h-48 rounded-full shadow-lg border-4 border-white"
          />
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 id="home-title" className="text-4xl md:text-5xl font-bold">
            {t("home.title")}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mt-2">
            {t("home.subtitle")}
          </h2>
          <p
            className="mt-6 text-lg leading-relaxed w-full lg:w-3/4"
            dangerouslySetInnerHTML={{ __html: t("home.description") }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
