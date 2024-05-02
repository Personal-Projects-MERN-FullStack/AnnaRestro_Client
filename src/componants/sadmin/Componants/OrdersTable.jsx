import React from "react";
import { useQuery } from "@tanstack/react-query";

// Define the function to fetch orders data
async function fetchOrders() {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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

const OrdersTable = () => {
  // Fetch orders data using useQuery
  const {
    data: orders,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });

  // Render loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (isError) {
    return <div>Error fetching orders</div>;
  }

  // Render table with orders data
  return (
    <div class="relative overflow-x-auto">
       <table className="w-full text-sm text-left border rounded-2xl rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 rounded-2xl uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
               OrderId
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
               Date
              </th>
              <th scope="col" className="px-6 py-3">
               Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
          {orders.map((order)=>{
            return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
             #{order._id}
            </th>
            <td class="px-6 py-4 text-center">{order.status}</td>
            <td class="px-6 py-4 text-center">{order.createdAt}</td>
            <td class="px-6 py-4 text-center">₹{order.total}</td>
          </tr>
        )
          })}
          </tbody>
        </table>

    </div>
  );
};

export default OrdersTable;
