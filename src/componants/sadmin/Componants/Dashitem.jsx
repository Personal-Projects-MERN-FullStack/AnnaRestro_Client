import React from "react";

const Dashitem = ({ logo, num, title }) => {
  return (
    <div className=" w-2/6 k h-40 flex justify-center items-center">
      <div className="bg-green-100 w-4/6 h-5/6 shadow-sm flex shadow-black k rounded-2xl">
        <div className="w-3/12 h-full  flex justify-center items-center ">
          <div className="bg-white shadow-sm shadow-black rounded-full h-12 w-12 flex justify-center items-center text-2xl">{logo}</div>
        </div>
        <div className="flex justify-center items-start flex-col pl-4">
          <div className="text-3xl font-bold ">{num}</div>
          <div className="text-gray-500 text-xl">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashitem;
