import React, { useEffect, useState } from "react";
import OrderItem from "./UI/OrderItem";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const orders = [
  {
    id: 1,
    items: "Dosa and Idli",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "ongoing",
  },
  {
    id: 2,
    items: "Masala and Uttapa",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "complted",
  },
  {
    id: 3,
    items: "Masala and Uttapa",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "complted",
  },
  {
    id: 4,
    items: "Masala and Uttapa",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "complted",
  },
  {
    id: 5,
    items: "Dosa and Idli",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "cancelled",
  },
  {
    id: 6,
    items: "Dosa and Idli",
    branch: "Main Branch",
    OrderPlace_time: "18Feb 2024 15:23:54",
    status: "cancelled",
  },
];

const Orders = () => {
  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);

  const [section, setsection] = useState(0);
  return (
    <div className="h-full fixed top-0 bottom-0 left-0 right-0 w-full bg-white">
      <div className="h-[150px] k flex flex-col justify-center items-center">
        <div className="h-3/6 flex justify-start items-center pl-4 text-2xl font-serif font-bold  w-full">
          My Orders
        </div>
        <div className="h-3/6 flex overflow-auto space-x-2 pl-4  justify-start items-center  w-full">
          <div
            onClick={() => setsection(0)}
            className={`p-2 px-3  text-sm font-semibold ${
              section === 0 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
          >
            Ongoing
          </div>
          <div
            onClick={() => setsection(1)}
            className={`p-2 px-3  text-sm font-semibold ${
              section === 1 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
          >
            Complted
          </div>
          <div
            onClick={() => setsection(2)}
            className={`p-2 px-3  text-sm font-semibold ${
              section === 2 ? "rounded-full bg-blue-600 text-white" : ""
            }`}
          >
            cancelled
          </div>
        </div>
      </div>
      <div className=" flex flex-col h-full overflow-auto  space-y-8">
       {
        orders.map((item)=>{
          if(section === 0){
            if(item.status === "ongoing"){
             return <OrderItem item = {item}/>
            }
          }
          if(section === 1){
            if(item.status === "complted"){
             return <OrderItem item = {item}/>
            }
          }
          if(section === 2){
            if(item.status === "cancelled"){
             return <OrderItem item = {item}/>
            }
          }
          return 0
        })
       }
      
      </div>
    </div>
  );
};

export default Orders;
