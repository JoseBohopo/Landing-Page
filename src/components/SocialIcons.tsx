import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-3 justify-center">
      <a
        href="https://github.com/JoseBohopo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={20} color="#FFF" />
      </a>
      <a
        href="https://es.linkedin.com/in/jose-bohopo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={20} color="#0A66C2" />
      </a>
    </div>
  );
};

export default SocialLinks;
