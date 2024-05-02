import React from "react";

const Dashitem = ({ logo, num, title }) => {
  return (
    <div className="w-2/6 k h-40 flex justify-center items-center">
      <div className="bg-white w-4/6 h-5/6 shadow-md rounded-lg flex items-center justify-center">
        <div className="w-3/12 h-full flex justify-center items-center">
          <div className="bg-green-500 text-white rounded-full h-12 w-12 flex justify-center items-center text-2xl shadow-md">{logo}</div>
        </div>
        <div className="flex flex-col justify-center pl-4">
          <div className="text-3xl font-bold">{num}</div>
          <div className="text-gray-600 text-lg">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashitem;
