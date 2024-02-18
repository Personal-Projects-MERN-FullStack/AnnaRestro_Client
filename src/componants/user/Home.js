import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  // const auth = useSelector((state) => state.auth.auth);
  
  return (
    <div className="bg-gray-200 h-screen">
      <div className="relative  ">
        <img alt="food" className="w-full blur-sm" src="restro2.webp " />
        <h1 className="absolute text-4xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Welcome to Our Restorant
        </h1>
      </div>
      <div className="flex flex-col items-center mt-8">
        <hr className="w-1/4 border-t-2 border-gray-300" />
        <p className="mt-4 text-lg text-gray-600">अन्नं परब्रह्म रूपं</p>
        <Link to="/wallet">
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">
            View Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
