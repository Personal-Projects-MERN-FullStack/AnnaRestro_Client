import React from "react";
import { motion } from "framer-motion";

const Ingrediants = ({ item, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="w-full h-20 flex rounded-2xl shadow-md"
    >
      <div className="w-3/12 flex items-center justify-center">
        <img className="h-full w-full" src="/fitems/masala_dosa.png" alt="" />
      </div>
      <div className="font-bold text-xl -black w-5/12 flex items-center justify-start pl-2">
        {item}
      </div>
      <div className="w-4/12 flex items-center justify-end pr-3">1 Qty</div>
    </motion.div>
  );
};

export default Ingrediants;
