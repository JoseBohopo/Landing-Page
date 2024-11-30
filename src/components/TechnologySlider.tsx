import { motion } from "framer-motion";
import React from "react";

type TechnologySliderProps = {
  technologies:  {
    icon: JSX.Element;
    name: string;
}[]
}

const TechnologySlider: React.FC<TechnologySliderProps> = ({technologies}: TechnologySliderProps) => {
  return (
    <motion.div
      className="flex justify-center gap-x-16 p-8 w-[90%]"
      initial={{ x: "100%" }} // Empieza fuera de la pantalla, a la derecha.
      animate={{ x: ["100%", "0%", "-100%"] }} // Entra desde la derecha, pasa por el centro y sale a la izquierda.
      transition={{
        duration: 50, // Tiempo que tarda en completar el ciclo.
        repeat: Infinity, // Repetición infinita.
        ease: "backIn", // Animación uniforme.
      }}
    >
      {technologies.map((technology: any) => (
        <div
          key={technology.name}
          className=" flex flex-col justify-center items-center"
        >
          <svg width="50" height="50">
            {technology.icon}
          </svg>
          <div className="text-center">{technology.name}</div>
        </div>
      ))}
    </motion.div>
  );
};

export default TechnologySlider;
