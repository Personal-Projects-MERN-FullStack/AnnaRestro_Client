import React, { useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
// import { FaSearch } from "react-icons/fa";
import Cartitem from "./UI/Cartitem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Cart = () => {
  const auth = useSelector((state) => state.auth.auth);
  const basket = useSelector((state) => state.ui.basket);
  const navigate = useNavigate();
  function calculateTotalPrice(items) {
    return items.reduce(
      (total, item) => total + item.price * item.productQty,
      0
    );
  }
  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
    // console.log(basket)
  }, [auth, navigate]);

  return (
    <div>
      <div className="h-12 fixed top-0 right-0 left-0 w-full bg-white items-center flex justify-around">
        <div className="flex text-2xl  justify-start items-center pl-4 w-2/6 h-full">
          <Link to="/menu">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="flex  justify-center items-center w-2/6 h-full font-semibold">
          Review Items
        </div>
        <div className="flex  text-xl  justify-end items-center w-2/6 h-full pr-4">
          {/* <FaSearch /> */}
        </div>
      </div>
      <div className=" top-0 border-black bg-gray-200 fixed left-0 right-0 w-full h-8 mt-12 flex justify-between items-center px-2 ">
        <div className="font-bold w-3/6 flex justify-start items-center pl-1">
          BreakFast
        </div>
        <div className="font-semibold w-3/6 flex justify-end items-center pr-1">
          {basket ? basket.length : ""} items
        </div>
      </div>
      <div className="h-full w-full mt-20 overflow-auto ">
        {basket.map((item) => {
          console.log(item);
          return <Cartitem item={item} />;
        })}
      </div>

      <div className="fixed left-0 right-0 bottom-0 text-white flex bg-black h-14">
        <div className="w-3/6 flex justify-center  flex-col items-start  pl-4">
          <div className="">
            Total :{" "}
            <span className="font-semibold">
              ₹{calculateTotalPrice(basket)}
            </span>
          </div>
          <div className="text-xs text-green-500">
            saved : ₹{(calculateTotalPrice(basket) * 3) / 100}{" "}
          </div>
        </div>
        <div className="w-3/6 flex justify-end pr-2 items-center ">
          <div className=" flex justify-end items-center text-white text-bold bg-red-700  px-8 rounded-md  py-2">
            Place Order
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
