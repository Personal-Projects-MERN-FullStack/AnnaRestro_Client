import React from "react";

const Transaction = () => {
  return (
    <div className="h-14 flex  w-full  ">
      <div className="w-2/12 h-full  justify-center items-center flex">
        <div className="h-8 w-8 rounded-full bg-gray-900"></div>
      </div>
      <div className="w-6/12 flex-col  px-2  justify-center items-start flex">
       <div className="text-sm font-bold">Dosa,PaperDosa</div>
       <div className="text-xs text-gray-500">- ₹32 coins</div>
      </div>
      <div className="w-4/12 h-full  justify-center items-end px-2 flex flex-col">
        <div className="font-semibold text-gray-400">5 Jan 2024</div>
        <div className="text-red-800 font-bold">Sent</div>
      </div>
    </div>
  );
};

export default Transaction;
