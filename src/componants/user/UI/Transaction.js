import React from "react";
import { useNavigate } from "react-router";
import { GrTransaction } from "react-icons/gr";
import { motion } from "framer-motion";
function createShortProductNameList(products) {
  return products.map((product) => {
    const words = product.productName.split(" ");
    const initials = words.map((word) => word.charAt(0)).join("");
    return initials.toUpperCase()+",";
  });
}
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
const Transaction = ({ trans }) => {
  console.log(trans);
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
      <div className="w-5/12 flex-col px-2 justify-center items-start flex">
        <div className="text-sm font-bold">
          {createShortProductNameList(trans.products)}
        </div>
        <div className="text-xs text-gray-500">- ₹{trans.total} coins</div>
      </div>
      <div className="w-5/12 text-xs text-black   h-full justify-center items-end px-2 flex flex-col">
        <div className=" text-gray-900">
          {convertDateFormat(trans.createdAt)}
        </div>
        <div className="text-red-800 font-bold">
          {trans.status === "cancelled" ? "Recived" : "Sent"}
        </div>
      </div>
    </motion.div>
  );
};

export default Transaction;
