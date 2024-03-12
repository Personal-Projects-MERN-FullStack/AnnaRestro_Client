import React from "react";
import "../css/cartbtn.css";
const AddtoCart = ({ price, btnname , onClickhandler }) => {

  return (
    <button
      onClick={onClickhandler}
      style={{
        padding: "5px 10px",
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Add to Basket
    </button>
  );
};

export default AddtoCart;
