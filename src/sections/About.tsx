import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-200">
        I am a passionate developer focused on creating stunning web experiences.
      </p>
    </motion.div>
  );
};

export default About;
