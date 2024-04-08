import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Clearbasket } from "../../store/actions/ui-actions";
import { ui } from "../../store/handlers/Ui-handler";
import Cartitem from "./UI/Cartitem";
import { motion } from "framer-motion";

const Cart = () => {
  
  const auth = useSelector((state) => state.auth.auth);
  const userdata = useSelector((state) => state.auth.user);
  const basket = useSelector((state) => state.ui.basket);
  const dispatch = useDispatch();
  const [placing, setPlacing] = useState(false);
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
  }, [auth, navigate]);

  async function placeOrder(customerId, products, total) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/orders/place-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customer: customerId,
            products: products,
            total: total,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      if (response.ok) {
        dispatch(
          ui.SetNotification({
            active: true,
            msg: "Order Placed Successfully",
          })
        );
        dispatch(Clearbasket());
        setPlacing(false);
      } else {
        setPlacing(false);
      }
    } catch (error) {
      setPlacing(false);
      alert(error);
    }
  }

  const onPlaceOrderHandler = () => {
    if (basket.length > 0) {
      setPlacing(true);
      placeOrder(userdata.user.id, basket, calculateTotalPrice(basket));
    } else {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Add items to place Order",
        })
      );
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-12 fixed top-0 right-0 left-0 w-full bg-white items-center flex justify-around">
        <div className="flex text-2xl justify-start items-center pl-4 w-2/6 h-full">
          <Link to="/menu">
            <IoIosArrowBack />
          </Link>
        </div>
        <div className="flex justify-center items-center w-2/6 h-full font-semibold">
          Review Items
        </div>
        <div className="flex text-xl justify-end items-center w-2/6 h-full pr-4">
          {/* <FaSearch /> */}
        </div>
      </div>
      <div className=" top-0 border-black bg-gray-200 fixed left-0 right-0 w-full h-8 mt-12 flex justify-between items-center px-2 ">
        <div className="font-bold w-3/6 flex justify-start items-center pl-1">
          Breakfast
        </div>

        <div className="font-semibold w-3/6 flex justify-end items-center pr-1">
          {basket ? basket.length : ""} items
        </div>
      </div>

      <div className="h-full w-full mt-20 overflow-auto">
        {basket.map((item) => (
          <Cartitem key={item.id} item={item} />
        ))}
      </div>

      {basket.length > 0 && (
        <div className="left-0 right-0 bottom-0 text-black flex bg-gray-100 h-14">
          <div className="w-3/6 flex justify-center flex-col items-start pl-4">
            <div>
              Total:{" "}
              <span className="font-semibold">
                ₹{calculateTotalPrice(basket)}
              </span>
            </div>
            <div className="text-xs text-green-500">
              Saved: ₹{(calculateTotalPrice(basket) * 3) / 100}
            </div>
          </div>
          <div className="w-3/6 flex justify-end pr-2 items-center">
            {!placing ? (
              <button
                onClick={onPlaceOrderHandler}
                className="flex justify-end items-center text-white text-bold bg-red-700 px-8 rounded-md py-2"
              >
                Place Order
              </button>
            ) : (
              <div className="flex justify-end items-center text-white text-bold bg-red-700 px-8 rounded-md py-2">
                Placing order
              </div>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
