import React from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { TbHome2 } from "react-icons/tb";
import { IoMdAdd } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import "./css/productpage.css";
import { useDispatch, useSelector } from "react-redux";
import Ingrediants from "./UI/productpage/Ingrediants";
import { ui } from "../../store/handlers/Ui-handler";

const Productpage = () => {
  const { pid } = useParams();
  const menu = useSelector((state) => state.menu.menu);
  const basket = useSelector((state) => state.ui.basket);
  const cart_data = basket.find((item) => item._id === pid);
  const Navigate = useNavigate()
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();

  if (!menu || !menu.data) {
    return <h1>Not ready</h1>;
  }
  const product = menu.data.find((item) => item._id === pid);
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
      dispatch(ui.AddTobasket(product));
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
      dispatch(ui.RemoveFrombasket(product));
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Item Remove from  Cart",
        })
      );
    }
  };
  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" fixed top-0 left-0 right-0 bottom-0"
    >
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="w-full flex justify-between items-center px-8 text-4xl h-12"
      >
        <Link to="/menu" className="text-2xl font-bold">
          <IoReturnUpBackOutline />
        </Link>
        <Link to="/" className="text-2xl font-bold">
          <TbHome2 />
        </Link>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center w-full h-64"
      >
        <div className="h-[250px] flex justify-center items-center w-[250px] bg-gray-100 rounded-full">
          <img
            src={product.imageUrl}
            className="h-full w-full "
            alt={product.productName}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="h-[100px] flex justify-center items-center flex-col"
      >
        <div className=" text-red-800 text-5xl galada-regular">
          {product.productName}
        </div>
        <div className="merienda-uniquifier flex text-2xl font-semibold space-x-2 mt-2 ">
          ₹<div className=""> {product.price}</div>
          <div className="">.</div>
          <div className="">{product.productQty} Qty</div>
        </div>
      </motion.div>
      <div className="w-full">
        <div className="h-16 bg-gray-200 m-2 rounded-full flex justify-around items-center">
          <div className="h-5/6 text-gray-500 text-lg font-semibold w-[100px] flex justify-center items-center">
            Detials
          </div>
          <div className="h-5/6 bg-yellow-200 w-[120px] text-lg font-bold rounded-full flex justify-center items-center">
            Ingredients
          </div>
          <div className="h-5/6 text-gray-500 text-lg font-semibold w-[100px] flex justify-center items-center">
            Instruction
          </div>
        </div>
        <div className="flex h-[300px] overflow-y-auto space-y-4 flex-col p-4 md:grid md:grid-cols-4 md:gap-2 md:space-y-0">
          {product.nutrientsItems.map((item, index) => {
            return <Ingrediants key={item.id} item={item} delay={index} />;
          })}
        </div>
      </div>

      <div className=" bottom-4 flex right-0 left-0 h-20 w-full">
        <div className="flex w-5/12 justify-center items-center ">
          <motion.div
            
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white rounded-full h-5/6 w-5/6 shadow-lg shadow-gray-200 flex justify-around items-center"
          >
            <div onClick={onRemoveBasketHandler} className="text-3xl">
              <AiOutlineDelete />
            </div>
            <div className="font-bold text-2xl ">
              {cart_data ? cart_data.productQty : "0"}
            </div>
            <div
              onClick={onAddtobaskethandler}
              className="text-3xl text-red-900 font-bold"
            >
              <IoMdAdd />
            </div>
          </motion.div>
        </div>
        <div className="flex w-7/12 justify-center items-center ">
          <motion.div
          onClick={()=>Navigate('/cart')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-5/6 shadow-lg w-5/6 -2 -gray flex justify-center items-center rounded-lg"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center h-full w-full rounded-lg text-lg bg-red-600 text-white font-bold"
            >
              <div>Continue</div>
              <div className="mx-2">
                <FaArrowRightLong />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Productpage;
