import React from "react";
import Navbar from "./subcomponants/Navbar";
import Sidebar from "./subcomponants/Sidebar";
import { useSelector } from "react-redux";
const Structure = ({ children }) => {
  const sadmin = useSelector((state) => state.auth.sadmin);
  return (
    <div className="h-screen w-full flex bg-gray-800">
      <div className="w-3/12 shadow-sm m-2 rounded-xl shadow-black  ">
        <Sidebar data={sadmin}/>
      </div>
      <div className="m-2  rounded-full shadow-sm shadow-black  h-16 w-full">
        <Navbar data={sadmin}></Navbar>
        <div className="h-[500px] w-full overflow-auto my-4">{children}</div>
      </div>
    </div>
  );
};

export default Structure;
