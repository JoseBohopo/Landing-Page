import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <section
        id="about-me"
        className="py-16 dark:bg-transparent"
        aria-labelledby="about-title"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          {/*Title with ARIA Label*/}
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-8"
          >
            {t("about.title")}
          </h2>

          <div className="flex flex-col md:flex-row items-center">
            {/* Profile Image */}
            <div
              className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0"
              role="img"
              aria-label={t("about.title")}
            >
              <img
                src="ruta-a-tu-foto.jpg"
                alt={t("about.title")}
                className="w-48 h-48 rounded-full shadow-lg"
              />
            </div>

            {/* Description */}
            <div
              className="w-full md:w-2/3 md:pl-10"
              aria-describedby="about-description"
            >
              <p
                id="about-description"
                className="text-lg text-gray-100 mb-4"
                dangerouslySetInnerHTML={{ __html: t("about.description1") }}
              />
              <p
                className="text-lg text-gray-100 mb-4"
                dangerouslySetInnerHTML={{ __html: t("about.description2") }}
              />
              <p
                className="text-lg text-gray-100 mb-4"
                dangerouslySetInnerHTML={{ __html: t("about.description3") }}
              />
              <p
                className="text-lg text-gray-100 mb-4"
                dangerouslySetInnerHTML={{ __html: t("about.description4") }}
              />
              {/* Contact Info */}
              <div className="mt-6">
                <a
                  href={`mailto:${t("about.contact")}`}
                  className="text-blue-500 hover:underline focus:ring-2 focus:ring-blue-300"
                  aria-label={t("about.contact")}
                >
                  {t("about.contact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
