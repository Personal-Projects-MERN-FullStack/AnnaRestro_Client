import { motion } from "framer-motion";
import Item from "./UI/Home/Item";
import Category from "./UI/Home/Category";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import "./css/Home.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const menu = useSelector((state) => state.menu.menu);
  const Navigate = useNavigate();
  return (
    <motion.div
      className="bg-gray-100 fixed top-0 left-0 right-0 bottom-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="h-[400px] bg-white homebg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-1/6 flex justify-between items-center  p-2">
          <motion.div className="flex space-x-2" whileHover={{ scale: 1.1 }}>
            <div
              onClick={() => Navigate("/cart")}
              className="bg-white text-3xl h-12 w-12 rounded-full flex justify-center items-center"
            >
              <CiShoppingCart />
            </div>
            <div
              onClick={() => Navigate("/profile")}
              className="bg-white font-thin text-2xl h-12 w-12 rounded-full flex justify-center items-center"
            >
              <VscAccount />
            </div>
          </motion.div>
          <motion.div
            className="bg-white  text-3xl h-10 w-24 rounded-full flex px-1 justify-start items-center"
            whileHover={{ scale: 1.1 }}
            onClick={() => Navigate("/menu")}
          >
            <CiSearch />
          </motion.div>
        </div>
        <motion.div
          className="text-gray-700 text-xl  flex justify-end items-center pb-12 flex-col -black h-3/6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="text-6xl mb-2 anna"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Anna Restro
          </motion.div>
          <motion.div
            className="slogon"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            Hey, Let's Start Your morning with
          </motion.div>
        </motion.div>
        <motion.div
          className="overflow-x-auto pl-4 items-center space-x-3 flex h-[120px] w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {!menu || !menu.data ? (
            // Display a message or component indicating no data
            <div>No menu data available</div>
          ) : (
            // Map over menu.data and render Item components
            menu.data.map((item, index) => (
              <Item
                item={item}
                key={index}
                image={item.imageUrl}
                qty={item.productQty}
                name={item.productName}
                price={item.price}
              />
            ))
          )}
        </motion.div>
      </motion.div>
      <motion.div
        className="bg-gray-100 h-[500px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="h-[250px] items-center justify-around  flex w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="h-[220px] flex flex-col rounded-2xl w-[180px]  bg-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="h-4/6 p-1  w-full ">
              <motion.img
                src="/poster/debit.jpg"
                className="-2 h-full shadow-md -black rounded-2xl"
                alt=""
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3 }}
              />
            </div>
            <motion.div
              className="h-2/6 flex flex-col w-full "
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
            >
              <div className="h-4/6  prompt -black pl-3   justify-start">
                Meet Your Rewarding new way to pay
              </div>
              <div className="h-2/6 text-sm text-green-800 flex  justify-start pl-3 items-center">
                Learn More
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="h-[220px] flex flex-col rounded-2xl w-[180px] bg-white"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.5 }}
          >
            <div className="h-4/6 p-1 w-full">
              <div className="h-3/6 flex justify-center items-center text-6xl font-bold text-red-900 slogon">
                {" "}
                320{" "}
              </div>
              <div className="h-2/6 flex justify-center items-center slogon">
                Points
              </div>
              <div className="h-1/6 flex justify-center items-center animate-bounce">
                {" "}
                -------------------{" "}
              </div>
            </div>
            <motion.div
              className="h-2/6 flex flex-col w-full"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 3.5 }}
            >
              <div className="h-4/6 prompt -black pl-3 justify-start">
                Keep earning points to get rewards!
              </div>
              <div className="h-2/6 text-sm text-green-800 flex justify-start pl-3 items-center">
                Learn More
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          className="overflow-x-auto pl-4 items-center space-x-3 flex h-[120px] w-full "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <Category image={"/poster/coffee.png"} name="order" />
          <Category image={"/poster/offers.png"} name="offers" />
          <Category image={"/poster/order.png"} name="Delivery" />
          <Category image={"/poster/coffee.png"} name="Give" />
          <Category image={"/poster/coffee.png"} name="Communites" />
          <Category image={"/poster/coffee.png"} name="status" />
          <Category image={"/poster/coffee.png"} name="Profile" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
