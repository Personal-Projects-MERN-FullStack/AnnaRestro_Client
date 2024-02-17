import React from "react";
import "../css/cartbtn.css";
import { useDispatch, useSelector } from "react-redux";
import ui from "../../../store/handlers/Ui-handler";
const AddtoCart = ({ price, btnname }) => {
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
    }
  };
  return (
    <button
      onClick={onAddtobaskethandler}
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
