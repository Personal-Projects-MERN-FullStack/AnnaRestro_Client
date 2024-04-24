import React, { useState } from "react";
import { motion } from "framer-motion";
import { CiHome } from "react-icons/ci";
import { CgMenuGridR } from "react-icons/cg";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { GiCrossMark } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { GrGoogleWallet } from "react-icons/gr";
import { SiHomebridge } from "react-icons/si";
import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-around -black pb-4">
        <div className="item1 h-12 flex items-center justify-center">
          <span
            className="text-2xl  border-2 -black rounded-full p-2 bg-blue-900 text-white"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            {menu ? <CgMenuGridR /> : <GiCrossMark />}
          </span>
        </div>
      </div>
      <motion.div
        className={`bg-white ${
          menu ? "hidden" : ""
        } flex justify-around border-black m-2 rounded-2xl`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="item1 h-16 w-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl p-1 ">
            <SiHomebridge />
          </span>
          <div className="text-gray-500 text-xs font-bold">Home</div>
        </Link>

        <Link
          to="/menu"
          className="item1 h-16 w-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl p-1 ">
            <MdOutlineRestaurantMenu />
          </span>
          <div className="text-gray-500 text-xs font-bold">Menu</div>
        </Link>

        <Link
          to="/orders"
          className="item1 h-16 w-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl p-1 ">
            <IoFastFood />
          </span>
          <div className="text-gray-500 text-xs font-bold">Orders</div>
        </Link>

        <Link
          to="/wallet"
          className="item1 h-16 w-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl p-1 ">
            <GrGoogleWallet />
          </span>
          <div className="text-gray-500 text-xs font-bold">Wallet</div>
        </Link>

        <Link
          to="/cart"
          className="item1 h-16 w-full flex flex-col items-center justify-center"
        >
          <span className="text-2xl p-1 ">
            <FaOpencart />
          </span>
          <div className="text-gray-500 text-xs font-bold">Basket</div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
