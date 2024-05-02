import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import NotificationItem from "./UI/Wallet/NotificationItem";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

const NotificationPage = () => {
  const user = useSelector((state) => state.auth.user);
  async function fetchnotitfication() {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/orders/orderlog/${user.user.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "same-origin",
        }
      );

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

  const notification = useQuery({
    queryKey: ["notification"],
    queryFn: fetchnotitfication,
    refetchInterval: 5000,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full w-full"
    >
      <div className="w-full h-20 flex justify-start px-8 space-x-4 items-center">
        <div>
          <Link to="/wallet" className="text-2xl font-bold">
            <IoReturnUpBackOutline />
          </Link>
        </div>
        <div className="my-4 text-2xl font-bold font-serif">
          My Notification
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 mx-4 space-y-2 md:space-y-0 md:gap-3"
      >
      {notification.isLoading ? (
  <h1>Data is Loading</h1>
) : (
  notification.data !== undefined && notification.data.length > 0 ? (
    notification.data.slice().reverse().map((noti) => (
      <NotificationItem key={noti.id} noti={noti} />
    ))
  ) : (
    <h1>No data available</h1>
  )
)}

      </motion.div>
    </motion.div>
  );
};

export default NotificationPage;
