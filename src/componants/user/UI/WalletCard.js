import React, { useState } from "react";
import "../css/WalletCard.css";
import { GoArrowDownLeft } from "react-icons/go";
import { useQuery } from "@tanstack/react-query";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { ui } from "../../../store/handlers/Ui-handler";

const WalletCard = ({ bal }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  // State to manage notification
  const [notification, setNotification] = useState("");

  async function fetchWallet() {
    try {
      const url = `${process.env.REACT_APP_API_URL}/wallet/${user.user.id}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.authtoken}`,
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch Wallet data");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Please refresh Page",
        })
      );
      throw error;
    }
  }

  const wallet = useQuery({
    queryKey: ["wallet"],
    queryFn: fetchWallet,
    refetchInterval: 10000,
  });

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const showRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      setNotification(
        "Failed to load Razorpay. Please check your internet connection."
      );
      return;
    }

    const options = {
      key: "rzp_test_Fi0R6nv5oCjMYn",
      currency: "INR",
      amount: amount * 100,
      name: "Vibe Store",
      description: "Thanks For Connection With us",
      modal: true,
      handler: function (response) {
        if (response.razorpay_payment_id) {
          const id = response.razorpay_payment_id;
          addMoneyToWallet(user.user.id, amount, id)
            .then((data) => {
              console.log("Updated user:", data);
              dispatch(
                ui.SetNotification({
                  active: true,
                  msg: "Payment Success.. Your Wallet Update Soon....",
                })
              );
            })
            .catch((error) => {
              console.log(error);
              dispatch(
                ui.SetNotification({
                  active: true,
                  msg: "Error adding money to wallet. Please try again later.",
                })
              );
            });
        } else {
          dispatch(
            ui.SetNotification({
              active: true,
              msg: "Payment failed. Please try again.",
            })
          );
        }
      },
      prefill: {
        name: user.user.name,
        email: user.user.email,
        contact: user.user.email,
        address: "Anna Idli Grah Vadagon Budruk",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  async function addMoneyToWallet(userId, amountToAdd, razorpay_payment_id) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/wallet/addmoney/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + user.authtoken,
          },
          body: JSON.stringify({ amount: amountToAdd, razorpay_payment_id }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        dispatch(
          ui.SetNotification({
            active: true,
            msg: errorData.error,
          })
        );
      } else {
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      throw error;
    }
  }

  const onAddMoneyHandler = () => {
    const amountStr = prompt("Enter the amount to add:");
    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
      setNotification("Please enter a valid amount.");
      return;
    }

    setNotification(""); // Clear any existing notifications
    showRazorpay(amount);
  };

  return (
    <motion.div
      className="fixed top-16 flex flex-col right-0 left-0 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {notification && (
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded">
          {notification}
        </div>
      )}
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
            onClick={onAddMoneyHandler}
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
