import React from "react";

const Cartitem = ({image,price,name,qty}) => {
  return (
    <div className="w-full border-b py-1 h- flex">
      <div className="w-4/12  flex justify-center items-center">
        <img alt="food item" src={image} className="w-full h-full" />
      </div>
      <div className="w-8/12 h-full  flex flex-col  p-1">
        <div className="font-semibold text-xl">
          {name}
        </div>
        <div>
          <span className="line-through pr-2 text-gray-500">₹{price-2} </span>₹{price}
        </div>
        <div className="text-xs text-green-600 font-semibold"> saved ₹{2}</div>
        <div className="w-full  h-10 flex justify-end items-center">
          <div className="border  flex h-full w-3/6">
            <div className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-l-md">
              -
            </div>
            <div className="w-2/6 flex justify-center items-center border border-red-500 bg-red-500 text-white">
              {qty}
            </div>
            <div className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-r-md">
              +
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
