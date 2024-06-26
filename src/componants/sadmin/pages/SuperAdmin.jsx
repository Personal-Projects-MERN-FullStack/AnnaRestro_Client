import React, { useEffect } from "react";
import Dashitem from "../Componants/Dashitem";
import { IoPersonAddSharp } from "react-icons/io5";

import getOrderStatistics from "../funcs/func";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const SuperAdmin = () => {
  const navigate = useNavigate();
  const sadmin = useSelector((state) => state.auth.sadmin);
  async function fetchOrders() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+sadmin.authtoken,
        },
        credentials: "same-origin",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch orders data");
      }
  
      return await response.json();
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      throw error;
    }
  }
  useEffect(() => {
    if (Object.keys(sadmin).length === 0) {
      navigate("/superadmin/login");
    }
  }, [sadmin, navigate]);
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });

  console.log(getOrderStatistics(orders));
  return (
    <div className="w-full">
      <div className=" font-bold text-yellow-300 h-12 my-4 flex justify-start items-center pl-4 text-3xl">
        Dashboard
      </div>

      {isLoading ? (
        <h1>Data is Loading</h1>
      ) : orders !== undefined && orders.length > 0 ? (
        <div>
          <div className="w-full space-x-6 k flex flex-wrap">
            <Dashitem
              logo={<IoPersonAddSharp />}
              num={getOrderStatistics(orders).newCustomers}
              title="New Customers"
            />
            <Dashitem
              logo={<IoPersonAddSharp />}
              num={"₹" + getOrderStatistics(orders).todaysEarnings}
              title="Today's Earnings"
            />
            <Dashitem
              logo={<IoPersonAddSharp />}
              num={"₹" + getOrderStatistics(orders).totalEarnings}
              title="Total Earnings"
            />
          </div>
          <div className="w-full space-x-6 k flex flex-wrap">
          <Dashitem
              logo={<IoPersonAddSharp />}
              num={ getOrderStatistics(orders).todaysCompletedOrders}
              title="Todays Orders"
            />
            <Dashitem
              logo={<IoPersonAddSharp />}
              num={getOrderStatistics(orders).totalOrders}
              title="Total Orders"
            />
          </div>
        </div>
      ) : (
        <h1>No data available</h1>
      )}

    </div>
  );
};

export default SuperAdmin;
