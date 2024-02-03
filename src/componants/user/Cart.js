import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Cartitem from "./UI/Cartitem";
const Cart = () => {
  return (
    <div>
      <div className="h-12 fixed top-0 right-0 left-0 w-full bg-gray-100 items-center flex justify-around">
        <div className="flex text-2xl  justify-start items-center pl-4 w-2/6 h-full">
          <IoIosArrowBack />
        </div>
        <div className="flex  justify-center items-center w-2/6 h-full font-semibold">
          Review Items
        </div>
        <div className="flex border text-xl  justify-end items-center w-2/6 h-full pr-4">
          <FaSearch />
        </div>
      </div>
      <div className="border top-0 border-black bg-gray-200 fixed left-0 right-0 w-full h-8 mt-12 flex justify-between items-center px-2 ">
        <div className="font-bold w-3/6 flex justify-start items-center pl-1">BreakFast</div>
        <div className="font-semibold w-3/6 flex justify-end items-center pr-1">2 items</div>
        
      </div>
      <div className="h-full w-full mt-20 overflow-auto ">
        <Cartitem
          image="/fitems/dosa.png"
          price="40"
          name="Dosa - Special Dosa with onion and cheese"
          qty="2"
        />
        <Cartitem
          image="/fitems/mdosa.png"
          price="50"
          name="Masala Dosa With chatany"
          qty="4"
        />
        <Cartitem
          image="/fitems/idli.png"
          price="30"
          name="Idli  - Also Avaible with the Chatany and sambar"
          qty="1"
        />

        <Cartitem
          image="/fitems/dosa.png"
          price="40"
          name="Dosa - Special Dosa with onion and cheese"
          qty="2"
        />
        <Cartitem
          image="/fitems/mdosa.png"
          price="50"
          name="Masala Dosa With chatany"
          qty="4"
        />
        <Cartitem
          image="/fitems/idli.png"
          price="30"
          name="Idli  - Also Avaible with the Chatany and sambar"
          qty="2"
        />

        <Cartitem
          image="/fitems/dosa.png"
          price="40"
          name="Dosa - Special Dosa with onion and cheese"
          qty="2"
        />
        <Cartitem
          image="/fitems/mdosa.png"
          price="50"
          name="Masala Dosa With chatany"
          qty="4"
        />
        <Cartitem
          image="/fitems/idli.png"
          price="30"
          name="Idli  - Also Avaible with the Chatany and sambar"
          qty="2"
        />
      </div>

      <div className="fixed left-0 right-0 bottom-0 text-white flex bg-black h-14">
        <div className="w-3/6 flex justify-center  flex-col items-start  pl-4">
          <div className="">
            Total : <span className="font-semibold">₹480</span>
          </div>
          <div className="text-xs text-green-500">saved : ₹40 </div>
        </div>
        <div className="w-3/6 flex justify-end pr-2 items-center ">
          <div className=" flex justify-end items-center text-white text-bold bg-red-700  px-8 rounded-md  py-2">
            Proceed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
