import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useOrders from "../../../hooks/useOrders";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import OrderItem from "../componant/OrderItem";
import { useSelector } from "react-redux";

const AOrders = () => {

  const navigate = useNavigate()

  const admin = useSelector((state) => state.auth.admin);
  useEffect(() => {
    if (Object.keys(admin).length === 0) {
      navigate("/admin/login");
    }
  }, [admin, navigate]);
  async function fetchOrders() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      throw error;
    }
  }

  const orders = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });

  const [section, setSection] = useState(0);
  return (
    <div className="bg-gray-100 h-full  w-screen py-2">
      {/* Navbar */}
      <div className="bg-white px-2 items-center flex justify-between h-16 shadow-lg shadow-black rounded-2xl m-2">
        <div className="font-semibold text-green-800 text-xl ml-2">
          AnnaRestro
        </div>
        <div
          onClick={() => {
            navigate("/admin");
          }}
          className="p-2 px-6 text-xl bg-gray-100 rounded-xl font-bold"
        >
          Dashboard
        </div>
      </div>

      {/* Small DashBoard */}
      <div className="h-[150px]  flex flex-col justify-center items-center">
        <div className="h-3/6 flex overflow-auto s pl-4  justify-center items-center  w-full">
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
            className={`p-2 px-3  text-sm font-semibold ${
              section === 0 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(0)}
          >
            Pending
          </motion.div>
          <motion.div // Wrap the section buttons in motion.div to apply transitions
            whileHover={{ scale: 1.05 }} // Animation on hover
            whileTap={{ scale: 0.95 }} // Animation when clicked
            className={`p-2 px-3  text-sm font-semibold ${
              section === 5 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(5)}
          >
            Ready
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 px-3  text-sm font-semibold ${
              section === 1 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(1)}
          >
            Completed
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 px-3  text-sm font-semibold ${
              section === 2 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
            onClick={() => setSection(2)}
          >
            Cancelled
          </motion.div>
        </div>
      </div>
      <motion.div
        className="overflow-y-auto space-y-8 h-5/6"
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component mounts
        transition={{ delay: 0.2 }} // Transition delay
      >
        {!orders.isLoading && orders.data.length > 0 ? (
          orders.data.map((item) => {
            if (
              (section === 4 && item.status === "new") ||
              (section === 0 && item.status === "pending") ||
              (section === 1 && item.status === "completed") ||
              (section === 5 && item.status === "ready") ||
              (section === 2 && item.status === "cancelled")
            ) {
              return <OrderItem key={item.id} orders={orders} item={item} />;
            }
            return null;
          })
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-gray-500">No orders to show</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AOrders;
