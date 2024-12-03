import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Traducciones
const resources = {
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      description: "Discover my projects, skills, and experiences.",
      HOME: "HOME",
      ABOUT: "ABOUT",
      PROJECTS: "PROJECTS",
      home: {
        title: "José Bohopo",
        subtitle: "Web Developer",
        description:
          "With over <strong>3 years</strong> of experience in web development, I transform ideas into <strong>exceptional digital experiences</strong>. I excel in technologies like <strong>React</strong>, <strong>JavaScript</strong>, and modern frameworks, always prioritizing design and functionality.",
        photoAlt: "José Bohopo",
      },
      about: {
        title: "About Me",
        description1:
          "I am <strong>José Ramón Bohopo</strong>, a Front-end developer passionate about creating exceptional digital experiences. Currently, I collaborate with <strong>Sice</strong> and work at <strong>Babel</strong>, where I apply my knowledge of modern technologies to develop innovative solutions and my analytical skills to resolve reported application bugs.",
        description2:
          "I am constantly learning tools such as <strong>React</strong>, <strong>Git</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>.",
        description3:
          "I am certified by the Web Development Bootcamp at <strong>Ironhack</strong> and hold a higher degree as a Technical Specialist in Electronics. My experience spans sectors like retail and pharmaceuticals, which has given me a diverse and adaptable perspective.",
        description4:
          "I am passionate about nature, hiking, and cycling. I am always looking for opportunities to grow professionally and collaborate on projects that challenge me and allow me to develop both technical and social skills.",
        contact: "rabohopo@gmail.com",
      },
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a mi portafolio",
      description: "Descubre mis proyectos, habilidades y experiencias.",
      HOME: "INICIO",
      ABOUT: "SOBRE MI",
      PROJECTS: "PROYECTOS",
      home: {
        title: "José Bohopo",
        subtitle: "Desarrollador Web",
        description:
          "Con más de <strong>3 años</strong> de experiencia en desarrollo web, transformo ideas en <strong>experiencias digitales excepcionales</strong>. Domino tecnologías como <strong>React</strong>, <strong>JavaScript</strong> y frameworks modernos, siempre priorizando el diseño y la funcionalidad.",
        photoAlt: "José Bohopo",
      },
      about: {
        title: "Sobre mí",
        description1:
          "Soy <strong>José Ramón Bohopo</strong>, un desarrollador Front-end apasionado por crear experiencias digitales excepcionales. Actualmente, colaboro con <strong>Sice</strong> y trabajo en <strong>Babel</strong>, donde aplico mis conocimientos en tecnologías modernas para desarrollar soluciones innovadoras y mi capacidad de análisis y resolución de problemas para solucionar bugs que son reportados en la aplicación.",
        description2:
          "Estoy en constante aprendizaje de herramientas como <strong>React</strong>, <strong>Git</strong>, <strong>Next.js</strong> y <strong>TypeScript</strong>.",
        description3:
          "Estoy certificado por el Bootcamp de Desarrollo Web de <strong>Ironhack</strong> y tengo un grado superior como Técnico Especialista en Electrónica. Mi experiencia abarca sectores como el retail y el farmacéutico, lo que me ha brindado una perspectiva diversa y adaptable.",
        description4:
          "Me apasiona la naturaleza, el senderismo y el ciclismo. Siempre busco oportunidades para crecer profesionalmente y colaborar en proyectos que me desafíen y me permitan desarrollar tanto habilidades técnicas como sociales.",
        contact: "rabohopo@gmail.com",
      },
    },
  },
};

i18n
  .use(LanguageDetector) // Detecta automáticamente el idioma del navegador
  .use(initReactI18next) // Integra i18n con React
  .init({
    resources, // Traducciones disponibles
    fallbackLng: "en", // Idioma predeterminado si el idioma del navegador no está soportado
    interpolation: {
      escapeValue: false, // React ya maneja la seguridad
    },
  });

export default i18n;
