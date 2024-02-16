import React from "react";

const QtyManager = ({ qty }) => {
  return (
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
  );
};

export default QtyManager;
