import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="flex px-6 w-full h-full justify-between items-center">
      <div className="w-3/6 text-2xl font-bold text-green-800 h-full flex justify-start items-center">
        welcome , Vaibhav
      </div>
      <div className="w-3/6 h-full space-x-2 flex justify-end items-center pr-">
        <div className="text-2xl mx-2 cursor-pointer">
          <CgProfile />
        </div>
        <div className="text-2xl mx-2 cursor-pointer">
          <HiOutlineLogout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
