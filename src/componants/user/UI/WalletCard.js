import React from "react";
import "../css/WalletCard.css";
import { GoArrowDownLeft } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const WalletCard = ({ bal }) => {
  const user = useSelector((state) => state.auth.user);

  async function fetchWallet() {
    try {
      const url = `${process.env.REACT_APP_API_URL}/wallet/${user.user.id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Wallet data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching wallet data:", error.message);
      throw error;
    }
  }

  const wallet = useQuery({
    queryKey: ["wallet"],
    queryFn: fetchWallet,
    refetchInterval: 10000,
  });

  return (
    <motion.div
      className="fixed top-16 flex flex-col right-0 left-0"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="h-20 flex flex-col px-6 text-white">
        <div className="mt-2 text-sm font-semibold text-gray-100">
          Available Balance
        </div>
        <div className="mt-2 text-4xl font-serif font-semibold">
          ₹{" "}
          {wallet.isLoading
            ? "Loading"
            : wallet.data
            ? wallet.data.coins
            : "N/A"}
        </div>
      </div>
      <div className="h-20 flex justify-around items-center">
        <div className="w-3/6 h-full flex justify-center items-center">
          <motion.div
            className="px-8 text-lg font-semibold py-3 bg-black rounded-xl flex items-center space-x-2 text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <GoArrowDownLeft className="mr-2" />
            Add Money
          </motion.div>
        </div>
        <div className="w-3/6"> </div>
      </div>
    </motion.div>
  );
};

export default WalletCard;
