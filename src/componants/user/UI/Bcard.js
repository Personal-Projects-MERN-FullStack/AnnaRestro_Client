import React from "react";
import AddtoCart from "./AddtoCart";

const Bcard = ({ img, name, price, desc }) => {
  return (
    <div className="h-44 mx-1   my-2 bg-white rounded-xl flex flex-col">
      <div className=" w-full font-bold m-[8px]">{name}</div>
      <div className="flex w-full h-full">
        <div className="w-3/6   h-full flex justify-center items-center">
          <img src={`${img}`} className=" " alt="food i" />
        </div>
        <div className="w-3/6  h-full flex flex-col justify-start pl-2 pt-2 items-start">
          <div className="text-xs text-gray-400">
            {desc}
          </div>
          <div className="my-3">₹{price}</div>
          <div>
            <AddtoCart price={price} btnname={"Add to basket"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bcard;
