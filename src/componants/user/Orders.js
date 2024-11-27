import React, { useEffect, useState } from "react";
import OrderItem from "./UI/OrderItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import useOrders from "../../hooks/useOrders";
import { motion } from "framer-motion";

const Orders = () => {
  const auth = useSelector((state) => state.auth.auth);
  const orders = useOrders();
  // console.table(orders.data);
  const navigate = useNavigate();
  const [section, setSection] = useState(0);

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  return (
    <motion.div
      className="h-screen fixed top-0 bottom-0 left-0 right-0 w-full bg-white"
      initial={{ opacity: 0, y: -20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0, y: 20 }} // Animation when component unmounts
    >
      <div className="h-[150px] k flex flex-col justify-center items-center">
        <div className="h-3/6 flex justify-start items-center pl-4 text-2xl font-serif font-bold  w-full">
          My Orders
        </div>
        <div className="h-3/6 cursor-pointer flex overflow-auto space-x-2 pl-4  justify-start md:justify-center items-center  w-full">
          <motion.div // Wrap the section buttons in motion.div to apply transitions
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation when clicked
            className={`p-2 px-3  text-sm font-semibold ${
              section === 4 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(4)}
          >
            New
          </motion.div>
          <motion.div // Wrap the section buttons in motion.div to apply transitions
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation when clicked
            className={`p-2 px-3 cursor-pointer  text-sm font-semibold ${
              section === 0 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(0)}
          >
            Pending
          </motion.div>
          <motion.div // Wrap the section buttons in motion.div to apply transitions
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation when clicked
            className={`p-2 px-3 cursor-pointer  text-sm font-semibold ${
              section === 5 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(5)}
          >
            Ready
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 px-3 cursor-pointer  text-sm font-semibold ${
              section === 1 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(1)}
          >
            Completed
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 px-3 cursor-pointer  text-sm font-semibold ${
              section === 2 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(2)}
          >
            Cancelled
          </motion.div>
        </div>
      </div>
      <motion.div
        className="overflow-y-auto space-y-8 h-5/6 md:grid md:grid-cols-3 md:space-y-0 md:gap-4 mb-20"
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component mounts
        transition={{ delay: 0.2 }} // Transition delay
      >
       {!orders.isLoading ? (
  (() => {
    let filteredOrders = [];
    switch (section) {
      case 0:
        filteredOrders = orders.data.filter(item => item.status === "pending");
        break;
      case 1:
        filteredOrders = orders.data.filter(item => item.status === "completed");
        break;
      case 2:
        filteredOrders = orders.data.filter(item => item.status === "cancelled");
        break;
      case 5:
        filteredOrders = orders.data.filter(item => item.status === "ready");
        break;
      case 4:
        filteredOrders = orders.data.filter(item => item.status === "new");
        break;
      default:
        break;
    }

    if (filteredOrders.length > 0) {
      return filteredOrders.map(item => (
        <OrderItem key={item.id} item={item} />
      ));
    } else {
      
      return (
        <div className="flex justify-center items-center h-full w-screen">
          <img src="/annimation/loader.gif" alt={"annimation"} className=""/>
        </div>
      );
    }
  })()
) : (
  <div className="flex justify-center items-center h-screen mt-28">
  NO ORDERS TO SHOW
  </div>
)}

        
       
      </motion.div>
    </motion.div>
  );
};

export default Orders;
