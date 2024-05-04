import React from "react";
import { useQuery } from "@tanstack/react-query";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";

// Define the function to fetch orders data

const OrdersTable = () => {
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

  const ExportTable = async () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });
  
    // Define title for the table
    const title = "Orders Report";
  
    // Define options for the table including the title
    const options = {
      html: "#orders",
      startY: 20, // Start Y position for the table
      margin: { top: 30 }, // Margin from the top of the page
      addPageContent: function(data) {
        doc.text(title, 14, 10); // Add title at position (14, 10)
      }
    };
  
    // Generate the table with title
    doc.autoTable(options);
  
    doc.save("OrderReport.pdf");
  };
  
  return (
    <div class="relative overflow-x-auto">
      <button onClick={ExportTable}>Export</button>
      <table
        id="orders"
        className="w-full text-sm text-left border rounded-2xl rtl:text-right text-gray-500 dark:text-gray-400"
      >
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
        
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  #{order._id}
                </th>
                <td class="px-6 py-4 text-center">{order.status}</td>
                <td class="px-6 py-4 text-center">{order.createdAt}</td>
                <td class="px-6 py-4 text-center">{"₹"}{(order.total).toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
