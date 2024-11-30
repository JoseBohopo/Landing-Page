import React from "react";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="text-center relative flex-col justify-center items-center h-full"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-200">
        Explore my projects and learn more about me.
      </p>
    </motion.div>
  );
};

export default Home;
