import React from "react";
import Dashitem from "../componant/Dashitem";
import { IoBagCheckOutline } from "react-icons/io5";
import { CiBag1 } from "react-icons/ci";
const Dasboard = () => {
  return (
    <div className="bg-gray-100 h-screen w-screen py-2">
      {/* Navbar */}
      <div className="bg-white px-2 items-center flex justify-between h-16 shadow-lg shadow-black rounded-2xl m-2">
        <div className="font-semibold text-green-800 text-xl"> AnnaRestro </div>
        <div className="p-2 px-6 text-xl bg-gray-100 rounded-xl font-bold">
          Orders
        </div>
      </div>
      {/* Small DashBoard */}
      <div className="flex flex-col h-full px-6">
       <Dashitem logo ={<CiBag1 />} title ="New Orders " status ="8" change = "100"/>
       <Dashitem logo ="logo" title ="Pending Orders " status ="50" change = "100"/>
       <Dashitem logo ={<IoBagCheckOutline />} title ="Complted Orders " status ="500" change = "100"/>
       <Dashitem logo ="logo" title ="Total Earning  " status ="150000" change = "100"/>
       <Dashitem logo ="logo" title ="Total Earning  " status ="150000" change = "100"/>
      </div>
    </div>
  );
};

export default Dasboard;
