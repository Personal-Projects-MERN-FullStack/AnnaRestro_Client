import React, { useState } from "react";
import "./css/manu.css";
import Scard from "./UI/Scard";
import Bcard from "./UI/Bcard";
import { FaSearch } from "react-icons/fa";
import Search from "./subpages/Search";
// import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const Menu = () => {
  const menu = useSelector(state=>state.menu.menu)


  const [search, setsearch] = useState(false);
  if (menu.isloading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="flex flex-col  w-full fixed top-0 right-0 left-0 bottom-0 h-screen">
      <div
        className={`  top-0 left-0 right-0 ${
          search ? "h-[110px]" : "h-[60px]"
        } w-full`}
      >
        <div className=" h-full bg-white shadow-sm flex flex-col ">
          <div className={`${search ? "h-3/6" : "h-full"} w-full flex`}>
            <div className="w-3/6 h-full flex justify-start pl-8 text-2xl font-bold items-center">
              Our Menu
            </div>
            <div className="w-3/6 h-full flex justify-end items-center mr-8 text-xl">
              <FaSearch
                className=""
                onClick={() => {
                  setsearch(!search);
                }}
              />
            </div>
          </div>

          {search && (
            <div className="h-3/6 w-full flex items-center  ">
              <Search />
            </div>
          )}

          {/* <div className="h-3/6 w-full flex items-center ml-8 space-x-2">
            <div className="border-2 border-black flex justify-center items-center rounded-xl px-6 py-1">
              Veg
            </div>
            <div className="border-2 border-black flex justify-center items-center rounded-xl px-6 py-1">
              Non-Veg
            </div>
          </div> */}
        </div>
      </div>
      <div className="h-5/6 flex w-full ">
        <div className="w-3/12 h-full ">
          <div className="bg-white  h-full  overflow-auto">
            <Scard />
          </div>
        </div>
        <div className="w-10/12 h-full bg-green-100 rounded-l-xl  overflow-hidden">
          <div className="h-12 text-2xl font-bold flex justify-start items-center pl-4 ">
            BREAKFAST
          </div>
          <div className=" h-full  mx-2 mt-2   overflow-auto ">
            {menu.data.map((item) => {
              return <Bcard item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
