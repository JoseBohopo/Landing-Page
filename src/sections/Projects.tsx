import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center relative h-full"
    >
      <h1 className="text-4xl font-bold mb-4">My Projects</h1>
      <p className="text-lg text-gray-200">
        Discover the projects I’ve worked on and the technologies I use.
      </p>
    </motion.div>
  );
};

export default Projects;
