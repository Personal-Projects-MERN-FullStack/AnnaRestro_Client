import React, { useEffect } from "react";
import OrderListItem from "../UI/OrderListItem";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useOrders from "../../../hooks/useOrders";
const OrderStatus = () => {
  const { orderId } = useParams();

  const auth = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, [auth, navigate]);
  const orders = useOrders();
  

  return (
    <div className=" py-8 px-6 fixed top-0 left-0 right-0 bottom-0 overflow-auto flex flex-col">
      <Link to="/orders" className="text-2xl font-bold">
        <IoReturnUpBackOutline />
      </Link>
      <div className="my-4 text-2xl font-bold font-serif"> Order Summery </div>
      <div className=" p-4">
        <div class="flex flex-col space-y-8">
          <div class="flex space-x-4 items-center">
            <div class="rounded-full h-6 w-6 bg-blue-500 flex items-center justify-center">
              <span class="text-white text-sm font-bold">1</span>
            </div>
            <h2 class="text-lg font-medium text-gray-800 line-through">
              Order Placed
            </h2>
          </div>
          <div class="flex space-x-4 items-center">
            <div class="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
              <span class="text-white text-sm font-bold">2</span>
            </div>
            <h2 class="text-lg font-medium text-gray-800">Order Accepted</h2>
          </div>
          <div class="flex space-x-4 items-center">
            <div class="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
              <span class="text-white text-sm font-bold">3</span>
            </div>
            <h2 class="text-lg font-medium text-gray-800">Order Cooking</h2>
          </div>
          <div class="flex space-x-4 items-center">
            <div class="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
              <span class="text-white text-sm font-bold">4</span>
            </div>
            <h2 class="text-lg font-medium text-gray-800">Ready to Pickup</h2>
          </div>
          <div class="flex space-x-4 items-center">
            <div class="rounded-full h-6 w-6 bg-gray-300 flex items-center justify-center">
              <span class="text-white text-sm font-bold">5</span>
            </div>
            <h2 class="text-lg font-medium text-gray-800">Order Complted</h2>
          </div>
        </div>
      </div>
      <div className="border flex flex-col border-black rounded-xl px-4">
        <div className="  h-auto  ">
          <div className="p-2 text-sm text-gray-500 font-semibold">
            Order Details
          </div>
          {orders.data.map((order) => {
            if (order._id === orderId) {
              
              return order.products.map((item) => {
                
                return (
                  <OrderListItem
                    item_name={item.productName}
                    price={` ${item.price} x ${item.productQty} = ₹${
                      item.price * item.productQty
                    }`}
                  />
                );
              });
            }
            return null; // Ensure to handle the case when the order ID doesn't match
          })}

          <div className=" border-t-2  h-20 my-2 mx-2 flex ">
            <div className="w-3/6 h-full  flex flex-col py-2">
              <div className=" text-sm text-gray-500 font-semibold">
                Branch Name
              </div>
              <div className="text-xl h-full flex items-center justify-start font-semibold">
                Main Branch
              </div>
            </div>
            <div className="w-3/6 flex flex-col border-l-2 my-2 pl-2">
              <div className=" text-sm text-gray-500 font-semibold">
                Total Bill
              </div>
              <div className="text-lg h-full flex items-center justify-start font-semibold">
                ₹
                {orders.data.map((order) => {
                  if (order._id === orderId) {
                    return order.total;
                  }
                  return null; // Ensure to handle the case when the order ID doesn't match
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
