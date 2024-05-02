import React from "react";
import Navbar from "./subcomponants/Navbar";
import Sidebar from "./subcomponants/Sidebar";
const Structure = ({ children }) => {
  return (
    <div className="h-screen w-full flex bg-gray-800">
      <div className="w-3/12 shadow-sm m-2 rounded-xl shadow-black  ">
        <Sidebar />
      </div>
      <div className="m-2  rounded-full shadow-sm shadow-black  h-16 w-full">
        <Navbar></Navbar>
        <div className="h-[500px] w-full overflow-auto my-4">{children}</div>
      </div>
    </div>
  );
};

export default Structure;
