import { FaReact, FaNodeJs, FaJs, FaCss3Alt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiStyledcomponents,
} from "react-icons/si";

export const ROUTES_PATH = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  PROJECTS: "PROJECTS",
};

export const technologies = [
  { icon: <FaReact size={50} width={50} color="#61dafb" />, name: "React" },
  { icon: <FaNodeJs size={50} color="#68A063" />, name: "Node.js" },
  { icon: <SiTypescript size={50} color="#3178c6" />, name: "TypeScript" },
  { icon: <FaJs size={50} color="#f7df1e" />, name: "JavaScript" },
  { icon: <FaCss3Alt size={50} color="#2965f1" />, name: "CSS" },
  { icon: <SiTailwindcss size={50} color="#38bdf8" />, name: "Tailwind CSS" },
  { icon: <SiNextdotjs size={50} color="#000000" />, name: "Next.js" },
  {
    icon: <SiStyledcomponents size={50} color="#DB7093" />,
    name: "Styled Components",
  },
];
