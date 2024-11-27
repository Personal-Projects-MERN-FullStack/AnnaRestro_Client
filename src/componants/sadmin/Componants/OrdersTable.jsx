import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { useSelector } from "react-redux";

const OrdersTable = () => {
  const sadmin = useSelector((state) => state.auth.sadmin);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + sadmin.authtoken,
        },
        credentials: "same-origin",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders data");
      }

      const data = await response.json();
      setOrders(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.error("Error fetching orders:", error.message);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
    refetchInterval: 5000,
  });

  const exportTable = async () => {
    const doc = new jsPDF({
      orientation: "landscape",
    });

    const title = "Orders Report";

    const options = {
      html: "#orders",
      startY: 20,
      margin: { top: 30 },
      addPageContent: function (data) {
        doc.text(title, 14, 10);
      }
    };

    doc.autoTable(options);
    doc.save("OrderReport.pdf");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching orders</div>;
  }

  return (
    <div className="relative overflow-x-auto">
      <button onClick={exportTable}>Export</button>
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
              <tr key={order._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  #{order._id}
                </th>
                <td className="px-6 py-4 text-center">{order.status}</td>
                <td className="px-6 py-4 text-center">{order.createdAt}</td>
                <td className="px-6 py-4 text-center">{"₹"}{(order.total).toString()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
