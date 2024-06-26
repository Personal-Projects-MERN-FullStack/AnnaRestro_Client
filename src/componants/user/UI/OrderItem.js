import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function convertDateFormat(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-US", options).replace(",", "");
  return formattedDate;
}

const OrderItem = ({ item }) => {
  const navigate = useNavigate();
  const onOrderClickHandler = () => {
    navigate(`/orders/status/${item._id}`);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Animation when component mounts
        exit={{ opacity: 0, y: 20 }} // Animation when component unmounts
        transition={{ duration: 0.5 }} // Transition duration
        onClick={onOrderClickHandler}
        className="mx-4 border-2 md:cursor-pointer border-gray-400 mt-4 md:mt-0 h-40 rounded-xl flex flex-col" // Adjusted height to 40px
      >
        <div className="flex justify-center items-center h-3/6">
          <div className="px-4 w-3/6 h-full flex justify-start items-center p-1 text-green-600">
            #{item._id}
          </div>
          <div className="px-4 text-xl font-semibold w-3/6 h-full flex justify-end items-center overflow-hidden p-1">
            ₹ {item.total}
          </div>
        </div>
        <div className="h-3/6 w-full flex">
          <div className="flex flex-col justify-center items-center border-r-2 w-3/6 my-2">
            <div className="h-2/6 w-full text-xs px-4">Ordered Branch</div>
            <div className="h-4/6 px-4 flex w-full font-bold items-center">
              Main Branch
            </div>
          </div>
          <div className="flex flex-col w-3/6 justify-center items-center my-2">
            <div className="h-2/6 w-full text-xs px-4">Order placed Time</div>
            <div className="h-4/6 pl-4 flex w-full items-center text-sm font-bold">
              {convertDateFormat(item.createdAt)}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OrderItem;
