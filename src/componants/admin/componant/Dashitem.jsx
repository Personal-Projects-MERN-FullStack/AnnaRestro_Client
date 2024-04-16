import React from "react";

const Dashitem = ({logo,title,status,change}) => {
  return (
    <div className="bg-white h-[120px] my-2 rounded-xl p-2 flex">
      <div className="flex h-full w-3/12 text-2xl justify-center items-center">
        <div className="bg-white p-1 rounded-lg shadow  shadow-black ">{logo}</div>
      </div>
      <div className=" px-2  w-8/12 flex flex-col justify-center items-between">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-2xl font-bold">{status}</div>
        <div className="text-xs text-green-900">{change} </div>
      </div>
    </div>
  );
};

export default Dashitem;
