import React from "react";

const Category = ({ image,name }) => {
  return (
    <div className="  h-full min-w-[70px]">
      <div className=" rounded-xl -black flex justify-center items-center bg-white h-4/6 min-w-[70px]">
        <img src={image} className="h-5/6 " alt="logo here" />
      </div>
      <div className=" prompt text-lg -black flex justify-center items-center h-2/6">
        {name}
      </div>
    </div>
  );
};

export default Category;
