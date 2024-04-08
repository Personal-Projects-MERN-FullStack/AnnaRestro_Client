import React, { useState } from "react";
import { motion } from "framer-motion";

const AddMoneyPrompt = ({ onConfirm, onCancel }) => {
  const [amount, setAmount] = useState("");

  const handleConfirm = () => {
    // Check if the amount is valid
    if (!isNaN(amount) && parseFloat(amount) > 0) {
      onConfirm(parseFloat(amount));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Enter Amount</h2>
      <input
        type="number"
        placeholder="Enter amount"
        className="w-full border border-gray-300 rounded-md py-2 px-3 mb-4"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          onClick={handleConfirm}
          className="px-4 py-2 bg-green-500 text-white rounded-md mr-2"
        >
          Confirm
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default AddMoneyPrompt;
