import React from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import Item from "./UI/Home/Item";
import Category from "./UI/Home/Category";
import { CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import "./css/Home.css";
const Home = () => {
  // const auth = useSelector((state) => state.auth.auth);
  // const apiUrl = process.env.REACT_APP_API_URL;
  // console.log(apiUrl);
  return (
    <div className="bg-gray-100 fixed top-0 left-0 right-0 bottom-0">
      <div className="h-[400px] bg-white main">
        <div className=" h-1/6 flex justify-between items-center  p-2">
          <div className="flex space-x-2">
            <div className="bg-white text-3xl h-12 w-12 rounded-full flex justify-center items-center">
              <CiShoppingCart />
            </div>
            <div className="bg-white font-thin text-2xl h-12 w-12 rounded-full flex justify-center items-center">
              <VscAccount />
            </div>
          </div>
          <div className="bg-white  text-3xl h-10 w-24 rounded-full flex px-1 justify-start items-center">
            <CiSearch />
          </div>
        </div>
        <div className=" text-gray-700 text-xl  flex justify-end items-center pb-12 flex-col -black h-3/6">
          <div className="text-6xl mb-2 anna">Anna Restro</div>
          <div className="slogon">Hey ,Let's Start Your morning with</div>
        </div>

        <div className="flex h-2/6 overflow-x-auto  items-center  pl-2 -black space-x-3 ">
          <Item
            image={"/fitems/idli.png"}
            qty="1"
            name="idli sambbar"
            price="35"
          />
          <Item
            image={"/fitems/mdosa.png"}
            qty="1"
            name="Msala Dosa"
            price="50"
          />
          <Item
            image={"/fitems/plain_dosa.png"}
            qty="1"
            name="Plain Dosa "
            price="40"
          />
          <Item
            image={"/fitems/idli.png"}
            qty="1"
            name="idli sambbar"
            price="35"
          />
          <Item
            image={"/fitems/mdosa.png"}
            qty="1"
            name="Msala Dosa"
            price="50"
          />
          <Item
            image={"/fitems/plain_dosa.png"}
            qty="1"
            name="Plain Dosa "
            price="40"
          />
        </div>
      </div>
      <div className="bg-gray-100 h-[500px]">
        <div className="h-[250px] items-center justify-around  flex w-full ">
          <div className="h-[200px] flex flex-col rounded-2xl w-[180px]  bg-white">
            <div className="h-4/6 p-1  w-full ">
              <img
                src="/poster/debit.jpg"
                className="-2 h-full shadow-md -black rounded-2xl"
                alt=""
              />
            </div>
            <div className="h-2/6 flex flex-col w-full ">
              <div className="h-4/6  prompt -black pl-3   justify-start">
                Meet Your Rewarding new way to pay
              </div>
              <div className="h-2/6 text-sm text-green-800 flex  justify-start pl-3 items-center">
                Learn More
              </div>
            </div>
          </div>
          <div className="h-[200px] flex flex-col rounded-2xl w-[180px]  bg-white">
            <div className="h-4/6 p-1  w-full ">
              <div className="h-3/6  flex justify-center items-center text-6xl font-bold text-red-900 slogon"> 320 </div>
              <div className="h-2/6  flex justify-center items-center slogon">Points</div>
              <div className="h-1/6  flex justify-center items-center animate-ping"> -------------------- </div>
            </div>
            <div className="h-2/6 flex flex-col w-full ">
              <div className="h-4/6  prompt -black pl-3   justify-start">
                Keep earning pints to get reward !
              </div>
              <div className="h-2/6 text-sm text-green-800 flex  justify-start pl-3 items-center">
                Learn More
              </div>
            </div>
          </div>
          
        </div>
        <div className="overflow-x-auto pl-4 items-center space-x-3 flex h-[120px] w-full ">
          <Category image={'/poster/coffee.png'} name="order"/>
          <Category image={'/poster/offers.png'} name="offers"/>
          <Category image={'/poster/order.png'} name="Delivery"/>
          <Category image={'/poster/coffee.png'} name="Give"/>
          <Category image={'/poster/coffee.png'} name="Communites"/>
          <Category image={'/poster/coffee.png'} name="status"/>
          <Category image={'/poster/coffee.png'} name="Profile"/>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
