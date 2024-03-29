import React from "react";
import AddtoCart from "./AddtoCart";
import { useDispatch, useSelector } from "react-redux";
import UiHandler, { ui } from "../../../store/handlers/Ui-handler";

const Bcard = ({ item }) => {
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
      dispatch(ui.AddTobasket(item))
      dispatch(
        ui.SetNotification({
          active: true,
          msg: "Item Added to Cart",
        })
      );
    }
  };
  return (
    <div className="h-44 mx-1   my-2 bg-white rounded-xl flex flex-col">
      <div className=" w-full font-bold m-[8px]">{item.productName}</div>
      <div className="flex w-full h-full">
        <div className="w-3/6   h-full flex justify-center items-center">
          <img src={`${item.imageUrl}`} className=" " alt={item.imageUrl} />
        </div>
        <div className="w-3/6  h-full flex flex-col justify-start pl-2 pt-2 items-start">
          <div className="text-xs text-gray-400">{item.desc}</div>
          <div className="my-3">₹{item.price}</div>
          <div>
            <AddtoCart
              price={item.price}
              btnname={"Add to basket"}
              onClickhandler={onAddtobaskethandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bcard;
