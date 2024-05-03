import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogoutHandler } from "../../store/actions/ui-actions";
import Box from "./UI/Profile/Box";
import useOrders from "../../hooks/useOrders";
import getUserOrdersSummary from "./UI/util/funs";
const Profile = () => {
  const loggedin = useSelector((state) => state.auth.auth);
  const user = useSelector((state) => state.auth.user);
  const [dahboard_data, setdahboard_data] = useState({
    today_earning:"not Updated",
    total_earning:"not Updated",
    total_orders:"not Updated"
  })
  const orders = useOrders();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(user)
  useEffect(() => {
    if (!loggedin) {
      Navigate("/login");
    }
    if(Object.keys(user).length !== 0 && orders.data !== undefined){
      const data = getUserOrdersSummary(orders.data,user.user.id)
      setdahboard_data({
        today_earning:data.userExpensesToday,
        total_earning:data.totalExpenses,
        total_orders:data.totalOrdersByUser
      })
    }
  }, [loggedin, Navigate, user, orders.data]);


  return (
    <div className="flex mt-4  flex-col items-center w-full justify-start h-screen">
      {/* <div className="text-xl font-semibold m-2 shadow-lg shadow-black w-full rounded-2xl">Profile</div> */}
      <div className="shadow-md py-1 shadow-black items-center m-2 rounded-2xl text-blue-900  flex justify-between w-11/12 px-4  font-semibold">
        <IoReturnUpBackOutline
          onClick={() => Navigate("/wallet")}
          className="text-2xl cursor-pointer"
        />
        <div className="text-xl font-semibold">Profile</div>
        <AiOutlineLogout
          onClick={() => dispatch(LogoutHandler())}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src="/logo192.png" // Replace with the actual path to the profile photo
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />
        <div className="mt-4 text-lg font-bold">{(Object.keys(user).length !== 0 ) ?user.user.name:"NA"}</div>
        <div className="text-gray-500">{(Object.keys(user).length !== 0 ) ?user.user.email:"NA"}</div>
      </div>

      <div className="grid grid-cols-1  w-full h-full md:grid-cols-3 ">
        <Box  logo="<h1>logo here</h1>" num={"₹"+dahboard_data.today_earning} title="Today Expense"/>
        <Box  logo="<h1>logo here</h1>" num={"₹"+dahboard_data.total_earning} title="Total Expense"/>
        <Box  logo="<h1>logo here</h1>" num={dahboard_data.total_orders} title="Total Orders"/>
      </div>
    </div>
  );
};

export default Profile;
