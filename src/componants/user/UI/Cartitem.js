import React from "react";
import QtyManager from "./QtyManager";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../../../store/handlers/Ui-handler";
const discount= [1,2,3,4,5,6]
const Cartitem = ({ item }) => {
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.auth.auth)

  const onAddtobaskethandler = () => {
    // console.log("clicked");
    if (!auth) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Please Login To add Basket",
        })
      );
    } else {
      dispatch(ui.AddTobasket(item));
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Item Added to Cart",
        })
      );
    }
  };
  const onRemoveBasketHandler = () => {
    // console.log("clicked");
    if (!auth) {
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Please Login To add Basket",
        })
      );
    } else {
      dispatch(ui.RemoveFrombasket(item));
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Item Remove from  Cart",
        })
      );
    }
  };
  return (
    <motion.div
      className="w-full border-b py-1 h- flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="w-4/12 flex justify-center items-center">
        <motion.img // Wrap the img with motion.img
          alt="food item"
          src={item.imageUrl}
          className="w-full h-full"
          initial={{ opacity: 0 }} // Add initial animation
          animate={{ opacity: 1 }} // Add animate animation
          transition={{ delay: 0.2 }} // Add transition animation
        />
      </div>
      <div className="w-8/12 h-full flex flex-col p-1">
        <div className="font-semibold text-xl">{item.productName}</div>
        <div>
          <span className="line-through pr-2 text-gray-500">
            ₹{item.price + Math.floor(Math.random() * discount.length)}
          </span>
          ₹{item.price}
        </div>
        <div className="text-xs text-green-600 font-semibold"> saved ₹{2}</div>
        <div className="w-full h-10 flex justify-end items-center">
          <QtyManager qty={item.productQty} item={item} />
        </div>
      </div>
    </motion.div>
  );
};

export default Cartitem;
