import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { ui } from "../../../store/handlers/Ui-handler";

const QtyManager = ({ qty, item }) => {
  const dispatch = useDispatch();

  return (
    <motion.div // Wrap the component with motion.div
      className="border flex h-full w-3/6"
      whileHover={{ scale: 1.1 }} // Add hover animation
    >
      <motion.div // Wrap each clickable div with motion.div
        onClick={() => {
          dispatch(ui.RemoveFrombasket(item));
        }}
        className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-l-md"
        whileHover={{ backgroundColor: "#FECACA" }} // Add background color change on hover
      >
        -
      </motion.div>
      <motion.div
        className="w-2/6 flex justify-center items-center border border-red-500 bg-red-500 text-white"
        whileHover={{ scale: 1.1 }} // Add hover animation
      >
        {qty}
      </motion.div>
      <motion.div
        onClick={() => {
          dispatch(ui.AddTobasket(item));
        }}
        className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-r-md"
        whileHover={{ backgroundColor: "#FECACA" }} // Add background color change on hover
      >
        +
      </motion.div>
    </motion.div>
  );
};

export default QtyManager;
