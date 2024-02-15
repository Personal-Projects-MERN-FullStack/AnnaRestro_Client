import React from "react";
import OrderItem from "./UI/OrderItem";

const Orders = () => {
  return (
    <div className="h-full fixed top-0 bottom-0 left-0 right-0 w-full bg-white">
      <div className="h-[150px] k flex flex-col justify-center items-center">
        <div className="h-3/6 flex justify-start items-center pl-4 text-2xl font-serif font-bold  w-full">
          My Orders
        </div>
        <div className="h-3/6 flex overflow-auto space-x-2 pl-4  justify-start items-center  w-full">
          <div className=" text-sm p-2 px-3  rounded-full bg-blue-600 text-white font-semibold">
            Requested
          </div>
          <div className=" p-2  font-semibold">Complted</div>
          <div className=" p-2  font-semibold">History</div>
          <div className=" p-2  font-semibold">Cancelled</div>
        </div>
      </div>
      <div className=" flex flex-col h-full overflow-auto  space-y-8">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      
      
      </div>
    </div>
  );
};

export default Orders;
