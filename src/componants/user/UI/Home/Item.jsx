import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Item = ({ image, name, qty, price }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-white rounded-2xl h-5/6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -50 }}
          style={{ minWidth: '130px', width: '130px' }}
        >
          <div className="h-3/6 w-full flex justify-between">
            <div className="flex justify-center items-center p-1 w-3/6 h-full">
              <img src={image} alt="Burger" />
            </div>
            <div className="flex justify-center items-center w-3/6 h-full">
              <div className="bg-white border border-black text-red-900 flex justify-center items-center text-xl rounded-full h-8 w-8 ">
                <FaPlus />
              </div>
            </div>
          </div>
          <div className="h-3/6 w-full flex flex-col">
            <div className="font-semibold h-3/6 w-full flex justify-start px-2 items-center -black">
              {name}
            </div>
            <div className="h-3/6 text-green-800 font-semibold w-full flex">
              <div className="h-full w-3/6 flex justify-start px-2 items-center">
                {qty} Qty
              </div>
              <div className="h-full w-3/6 flex justify-start px-2 items-center">
                ₹ {price}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Item;
