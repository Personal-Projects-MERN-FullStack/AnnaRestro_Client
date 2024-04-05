import React from "react";
import { FaPlus } from "react-icons/fa";
const Item = ({image,name,qty,price}) => {
  return (
    <div className="bg-white rounded-2xl h-5/6 min-w-[130px] ">
      <div className="h-3/6 w-full  flex justify-between">
        <div className="flex justify-center items-center p-1 w-3/6 h-full">
          <img src={image} alt="Burget" />
        </div>
        <div className="flex justify-center items-center w-3/6 h-full">
          <div className="bg-white border border-black text-red-900 flex justify-center items-center text-xl  rounded-full h-8 w-8 ">
          <FaPlus />
          </div>
        </div>
      </div>
      <div className="h-3/6 w-full  flex flex-col">
        <div className="font-semibold h-3/6 w-full  flex justify-start px-2 items-center -black">
          {name}
        </div>
        <div className="h-3/6 text-green-800 font-semibold w-full flex ">
          <div className="h-full w-3/6 flex justify-start px-2 items-center">
            
             {qty}Qty
          </div>
          <div className="h-full w-3/6 flex justify-start px-2 items-center">
            
          ₹ {price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
