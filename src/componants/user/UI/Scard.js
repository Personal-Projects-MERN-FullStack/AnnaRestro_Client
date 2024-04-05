import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Scard = () => {
  return (
    <motion.div // Wrap your component in motion.div to apply animations
      className="flex flex-col justify-center items-center"
      whileHover={{ scale: 1.05 }} // Add scale animation on hover
      transition={{ duration: 0.2 }} // Set animation duration
    >
      <div className="flex justify-center items-center">
        <img
          className="h-16"
          alt="Food Category"
          src="/catagories/breakfast.png"
        />
      </div>
      <div className="flex justify-center items-center">Breakfast</div>
    </motion.div>
  );
};

export default Scard;
