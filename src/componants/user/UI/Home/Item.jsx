import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../../../../store/handlers/Ui-handler";
import { useNavigate } from "react-router";

const Item = ({ image, name, qty, price, item }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a delay
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed
    return () => clearTimeout(timeout);
  }, []);

  // Take first 10 characters of name and add an ellipsis if it's longer
  const truncatedName = name.length > 10 ? name.substring(0, 15) + "..." : name;
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
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
  const Navigate = useNavigate()
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-white rounded-2xl h-5/6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: -50 }}

        >
          <div className="h-3/6 w-full flex justify-between">
            <div onClick={()=>Navigate(`/menu/product/${item._id}`)} className="flex justify-center items-center p-1 w-3/6 h-full">
              <img src={image} alt="Burger" />
            </div>
            <div className="flex justify-center items-center w-3/6 h-full">
              <div
                onClick={onAddtobaskethandler}
                className="bg-white border border-black text-red-900 flex justify-center items-center text-xl rounded-full h-8 w-8 "
              >
                <FaPlus />
              </div>
            </div>
          </div>
          <div onClick={()=>Navigate(`/menu/product/${item._id}`)} className="h-3/6 w-full flex flex-col">
            <div className="font-semibold h-3/6 w-full flex justify-start px-2 items-center -black">
              {truncatedName}
            </div>
            <div className="h-3/6 text-green-800 font-semibold w-full flex">
              <div className="h-full w-3/6 flex justify-start px-2 items-center">
                {qty} Qty
              </div>
              <div className="h-full w-3/6 flex justify-start px-2 items-center">
                ₹ {price}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Item;
