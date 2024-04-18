import React from "react";
import Dashitem from "../Componants/Dashitem";
import { IoPersonAddSharp } from "react-icons/io5";
const SuperAdmin = () => {
  return (
    <div className="w-full">
      <div className=" font-bold text-yellow-300 h-12 my-4 flex justify-start items-center pl-4 text-3xl">
        Dashboard
      </div>
      <div className="w-full space-x-6 k flex flex-wrap">
        <Dashitem logo={<IoPersonAddSharp />} num="5000" title="New Customer" />
        <Dashitem logo={<IoPersonAddSharp />} num="$3343" title="Todays Earning" />
        <Dashitem logo={<IoPersonAddSharp />} num="$450" title="Total Earning" />
      </div>
      <div className="w-full space-x-6 k flex flex-wrap">
        <Dashitem logo={<IoPersonAddSharp />} num="5000" title="New Customer" />
        <Dashitem logo={<IoPersonAddSharp />} num="5000" title="New Customer" />
        <Dashitem logo={<IoPersonAddSharp />} num="5000" title="New Customer" />
      </div>
     
    </div>
  );
};

export default SuperAdmin;
