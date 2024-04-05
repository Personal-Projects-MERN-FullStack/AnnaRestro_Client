import React, { useState } from "react";
import "./css/manu.css";
import Scard from "./UI/Scard";
import Bcard from "./UI/Bcard";
import { FaSearch } from "react-icons/fa";
import Search from "./subpages/Search";
import { useSelector } from "react-redux";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Menu = () => {
  const menu = useSelector((state) => state.menu.menu);
  const [search, setSearch] = useState(false);

  if (menu.isloading) {
    return <h1>Loading...</h1>;
  }

  return (
    <motion.div
      className="flex flex-col w-full fixed top-0 right-0 left-0 bottom-0 h-screen"
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0 }} // Animation when component unmounts
    >
      <div
        className={`top-0 left-0 right-0 ${
          search ? "h-[110px]" : "h-[60px]"
        } w-full`}
      >
        <div className="h-full bg-white shadow-sm flex flex-col">
          <div className={`${search ? "h-3/6" : "h-full"} w-full flex`}>
            <div className="w-3/6 h-full flex justify-start pl-8 text-2xl font-bold items-center">
              Our Menu
            </div>
            <div className="w-3/6 h-full flex justify-end items-center mr-8 text-xl">
              <FaSearch
                className=""
                onClick={() => {
                  setSearch(!search);
                }}
              />
            </div>
          </div>

          {search && (
            <div className="h-3/6 w-full flex items-center">
              <Search />
            </div>
          )}
        </div>
      </div>
      <div className="h-5/6 flex w-full">
        <motion.div
          className="w-3/12 h-full"
          initial={{ x: -100, opacity: 0 }} // Initial animation state
          animate={{ x: 0, opacity: 1 }} // Animation when component mounts
          transition={{ delay: 0.2 }} // Delay animation to start after page animation
        >
          <div className="bg-white h-full overflow-auto">
            <Scard />
          </div>
        </motion.div>
        <motion.div
          className="w-10/12 h-full bg-green-100 rounded-l-xl overflow-hidden"
          initial={{ x: 100, opacity: 0 }} // Initial animation state
          animate={{ x: 0, opacity: 1 }} // Animation when component mounts
          transition={{ delay: 0.2 }} // Delay animation to start after page animation
        >
          <div className="h-12 text-2xl font-bold flex justify-start items-center pl-4">
            BREAKFAST
          </div>
          <div className="h-full mx-2 mt-2 overflow-auto">
            {menu.data.map((item, index) => (
              <Bcard key={index} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Menu;
