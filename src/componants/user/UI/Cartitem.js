import React from "react";
import QtyManager from "./QtyManager";
import { motion } from "framer-motion";

const Cartitem = ({ item }) => {
  return (
    <motion.div
      className="w-full border-b py-1 h- flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-4/12 flex justify-center items-center">
        <img alt="food item" src={item.imageUrl} className="w-full h-full" />
      </div>
      <div className="w-8/12 h-full flex flex-col p-1">
        <div className="font-semibold text-xl">{item.productName}</div>
        <div>
          <span className="line-through pr-2 text-gray-500">
            ₹{item.price - 2}{" "}
          </span>
          ₹{item.price}
        </div>
        <div className="text-xs text-green-600 font-semibold"> saved ₹{2}</div>
        <div className="w-full h-10 flex justify-end items-center">
          <QtyManager qty={item.productQty} item={item} />
        </div>
      </div>
    </motion.div>
  );
};

export default Cartitem;
