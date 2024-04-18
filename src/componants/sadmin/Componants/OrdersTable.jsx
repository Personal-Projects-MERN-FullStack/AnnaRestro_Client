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
      <table class="w-full text-sm text-left rtl:text-right  text-gray-400">
        <thead class="text-xs  uppercase  bg-gray-700 text-black">
          <tr>
            <th scope="col" className="px-6 mx-auto py-3">
              Order Id
            </th>
            <th scope="col" className="px-6 mx-auto py-3">
              status
            </th>
            <th scope="col" className="px-6 mx-auto py-3">
              status
            </th>
            <th scope="col" className="px-6 mx-auto py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order)=>{
            return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
             #{order._id}
            </th>
            <td class="px-6 py-4">{order.status}</td>
            <td class="px-6 py-4">{order.total}</td>
            <td class="px-6 py-4">$2999</td>
          </tr>
        )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
