import React from "react";
import { useNavigate } from "react-router";
import { GrTransaction } from "react-icons/gr";
import { motion } from "framer-motion";

const Transaction = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate("/orders/status")}
      className="h-14 flex w-full py-2 border-b"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-2/12 h-full justify-center items-center flex">
        <motion.div
          className="h-8 w-8 rounded-full flex justify-center items-center text-xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <GrTransaction />
        </motion.div>
      </div>
      <div className="w-6/12 flex-col px-2 justify-center items-start flex">
        <div className="text-sm font-bold">Dosa, Paper Dosa</div>
        <div className="text-xs text-gray-500">- ₹32 coins</div>
      </div>
      <div className="w-4/12 h-full justify-center items-end px-2 flex flex-col">
        <div className="font-semibold text-gray-400">5 Jan 2024</div>
        <div className="text-red-800 font-bold">Sent</div>
      </div>
    </motion.div>
  );
};

export default Transaction;
