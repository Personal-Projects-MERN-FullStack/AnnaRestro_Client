import React from "react";
import "../css/WalletCard.css";
import { GoArrowDownLeft } from "react-icons/go";
const WalletCard = ({bal}) => {
  return (
   <div className=" fixed top-16 flex flex-col right-0 left-0">
      <div className="h-20  flex flex-col px-6 text-white">
          <div className="mt-2 text-sm font-semibold text-gray-100">Available Balance</div>
          <div className="mt-2 text-4xl font-serif font-semibold">₹{bal}</div>
      </div>
      <div className="h-20  flex justify-around items-center">
        <div className="w-3/6  h-full flex justify-center items-center">
          <div className="px-8 text-lg font-semibold py-3 bg-black  rounded-xl flex items-center space-x-2 text-white">
          <GoArrowDownLeft className="mr-2" />Add Money
          </div>
        </div>
        <div className="w-3/6 "> </div>
      </div>
   </div>
  );
};

export default WalletCard;
