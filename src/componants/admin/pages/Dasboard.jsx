import React, { useEffect } from "react";
import Dashitem from "../componant/Dashitem";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlinePendingActions } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { GiTakeMyMoney } from "react-icons/gi";
import { CiBag1 } from "react-icons/ci";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { adminlogout } from "../../../store/actions/auth-actions";
import { useQuery } from "@tanstack/react-query";
import {
  calculateGrowthPercentage,
  countTodaysOrders,
  countYesterdaysNewOrders,
  getTodaysIncome,
  getTotalIncome,
} from "./userdata";
import { motion } from "framer-motion";

const Dasboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const admin = useSelector((state) => state.auth.admin);

  useEffect(() => {
    console.log();

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gray-100 h-full w-screen py-2"
    >
      {/* Navbar */}
      <div className="h-12 flex justify-between items-center px-6 ">
        <div className="text-3xl">
          <CgProfile />
        </div>
        <button
          onClick={() => {
            dispatch(adminlogout());
          }}
          className="text-3xl"
        >
          <IoMdLogOut />
        </button>
      </div>
      <div className="bg-white px-2 items-center flex justify-between h-16 shadow-lg shadow-black rounded-2xl m-2">
        <div className="font-semibold text-green-800 text-xl ml-2">
          AnnaRestro
        </div>
        <div
          onClick={() => {
            navigate("/admin/orders");
          }}
          className="p-2 cursor-pointer px-6 text-xl bg-gray-100 rounded-xl font-bold"
        >
          Orders
        </div>
      </div>

      {/* Welcome Message */}
      <div className="font-bold p-6 text-xl text-green-800">
        Welcome , {admin.username}
      </div>
      {/* Small DashBoard */}
      <div className="flex flex-col h-full px-6 md:grid md:grid-cols-2 md:gap-3">
        {!orders.isLoading && (
          <>
            <Dashitem
              logo={<CiBag1 />}
              title="New Orders "
              status={countTodaysOrders(orders.data, "new")}
              change={calculateGrowthPercentage(
                countTodaysOrders(orders.data, "new"),
                countYesterdaysNewOrders(orders.data, "new")
              )}
            />
            <Dashitem
              logo={<MdOutlinePendingActions />}
              title="Pending Orders "
              status={countTodaysOrders(orders.data, "pending")}
              change={calculateGrowthPercentage(
                countTodaysOrders(orders.data, "pending"),
                countYesterdaysNewOrders(orders.data, "new")
              )}
            />
            <Dashitem
              logo={<IoBagCheckOutline />}
              title="Completed Orders "
              status={countTodaysOrders(orders.data, "completed")}
              change={calculateGrowthPercentage(
                countTodaysOrders(orders.data, "completed"),
                countYesterdaysNewOrders(orders.data, "new")
              )}
            />
            <Dashitem
              logo={<GiReceiveMoney />}
              title="Todays Total Earning  "
              status={getTodaysIncome(orders.data)}
            />
            <Dashitem
              logo={<GiTakeMyMoney />}
              title="Total Earning  "
              status={getTotalIncome(orders.data)}
              change="100"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Dasboard;
