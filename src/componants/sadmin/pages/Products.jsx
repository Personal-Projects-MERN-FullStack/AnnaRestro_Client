import React, { useEffect } from "react";
import ProductTable from "../Componants/ProductTable";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Products = () => {
  const navigate = useNavigate();
  const sadmin = useSelector((state) => state.auth.sadmin);
  useEffect(() => {
    if (Object.keys(sadmin).length === 0) {
      navigate("/superadmin/login");
    }
  }, [sadmin, navigate]);
  return (
    <div>
      <div className=" font-bold text-yellow-300 h-12 my-4 flex justify-start items-center pl-4 text-3xl">
        Orders Data
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default Products;
