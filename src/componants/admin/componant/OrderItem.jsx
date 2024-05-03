import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

// Function to convert date format
function convertDateFormat(dateString) {
  const date = new Date(dateString);
  const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  };
  const formattedDate = date.toLocaleString("en-US", options).replace(",", "");
  return formattedDate;
}

const OrderItem = ({ item, orders }) => {
  const admin = useSelector((state) => state.auth.admin);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(item.status); // State to store selected status

  const updateOrderStatus = async (orderId, newStatus) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/orders/${orderId}/update-status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus, adminid: admin.email }),
        }
      );
      if (!response.ok) {
        setLoading(false);
        throw new Error("Failed to update order status");
      }
      setLoading(false);
      // Optionally handle success, like showing a success message
    } catch (error) {
      setLoading(false);
      console.error("Error updating order status:", error.message);
      // Optionally handle error, like showing an error message
    }
  };

  const onStatusChangeHandler = (event) => {
    const newStatus = event.target.value;
    setSelectedStatus(newStatus);
    updateOrderStatus(item._id, newStatus);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="mx-4 border-2 bg-white border-gray-400 mt-4 md:mt-0 rounded-xl flex flex-col"
      >
        <div className="flex justify-center items-center h-12">
          <div className="px-4 w-3/6 h-full flex justify-start items-center p-1 text-green-600">
            #{item._id}
          </div>
          <div className="px-4 text-xl font-semibold w-3/6 h-full flex justify-end items-center overflow-hidden p-1">
            ₹ {item.total}
          </div>
        </div>
        <div className="w-full px-4 h-40 overflow-auto ">
          <div>Order Details</div>
          {item.products.map((product) => (
            <li key={product._id}>
              {product.productName}
              {` ${product.price} x ${product.productQty} = ₹${
                product.price * product.productQty
              }`}
            </li>
          ))}
        </div>
        <div className="h-16 w-full flex">
          <div className="flex flex-col justify-center items-center border-r-2 w-3/6 my-2">
            <div className="h-2/6 w-full text-xs px-4">Ordered Branch</div>
            <div className="h-4/6 px-4 flex w-full font-bold items-center">
              Main Branch
            </div>
          </div>
          <div className="flex flex-col w-3/6 justify-center items-center my-2">
            <div className="h-2/6 w-full text-xs px-4">Order placed Time</div>
            <div className="h-4/6 pl-4 flex w-full items-center text-sm font-bold">
              {convertDateFormat(item.createdAt)}
            </div>
          </div>
        </div>
        <div className="bg-white border-t-2 border-gray-400 mt-4 h-14 rounded-xl flex">
          <div className="w-3/6 h-full flex items-center justify-start pl-4 border-r-2 text-xl font-semibold text-gray-700">
            Status
          </div>
          <div className="w-3/6 h-full focus:border-none flex items-center justify-start ">
            {!loading ? (
              (item.status !== "completed" && item.status !== "cancelled") ? (
                <select
                  onChange={onStatusChangeHandler}
                  value={selectedStatus}
                  className="rounded-xl w-full h-full sm:text-sm  "
                >
                  <optgroup label="Order Status">
                    <option value="new">New</option>
                    <option value="pending">Pending</option>
                    <option value="ready">Ready</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </optgroup>
                </select>
              ) : (
                <div className="text-xl flex  items-center justify-center   w-full font-bold text-green-500">
                  {item.status}
                </div>
              )
            ) : (
              <div role="status" className="flex space-x-2">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Changing Status..</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OrderItem;
