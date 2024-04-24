import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import AddtoCart from "./AddtoCart";
import { useDispatch, useSelector } from "react-redux";
import UiHandler, { ui } from "../../../store/handlers/Ui-handler";
import { useNavigate } from "react-router";
// import { Navigate } from "react-router";

const Bcard = ({ item }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const Navigate = useNavigate()
  const onAddtobaskethandler = () => {
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

  return (
    <motion.div  // Wrap your component in motion.div to apply animations
      className="h-44 mx-1 my-2 bg-white rounded-xl flex flex-col"
      whileHover={{ scale: 1.05 }} // Add scale animation on hover
      transition={{ duration: 0.2 }} // Set animation duration
    >
      <div onClick={()=>Navigate(`/menu/product/${item._id}`)} className="w-full font-bold m-[8px]">{item.productName}</div>
      <div className="flex w-full h-full">
        <div onClick={()=>Navigate(`/menu/product/${item._id}`)} className="w-3/6 h-full  flex justify-center items-center ">
          <img src={`${item.imageUrl}`} className="md:w-5/6 md:h-5/6 " alt={item.imageUrl} />
        </div>
        <div className="w-3/6 h-full flex flex-col justify-start pl-2 pt-2 items-start">
          <div className="text-xs text-gray-400">{item.desc}</div>
          <div onClick={()=>Navigate(`/menu/product/${item._id}`)} className="my-3">₹{item.price}</div>
          <div>
            <AddtoCart
              price={item.price}
              btnname={"Add to basket"}
              onClickhandler={onAddtobaskethandler}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Bcard;
