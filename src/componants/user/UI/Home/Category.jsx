import { motion } from "framer-motion";
import React from "react";

const Category = ({ image, name }) => {
  return (
    <motion.div
      className="h-full min-w-[70px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="rounded-xl -black flex justify-center items-center bg-white h-4/6 min-w-[70px]">
        <img src={image} className="h-5/6" alt="logo here" />
      </div>
      <div className="prompt text-lg -black flex justify-center items-center h-2/6">
        {name}
      </div>
    </motion.div>
  );
};

export default Category;
