import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ui } from "../../../store/handlers/Ui-handler";

const QtyManager = ({ qty, item }) => {
  const dispatch = useDispatch();

  return (
    <div className="border  flex h-full w-3/6">
      <div
        onClick={() => {
          dispatch(ui.RemoveFrombasket(item));
        }}
        className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-l-md"
      >
        -
      </div>
      <div className="w-2/6 flex justify-center items-center border border-red-500 bg-red-500 text-white">
        {qty}
      </div>
      <div
        onClick={() => {
          dispatch(ui.AddTobasket(item));
        }}
        className="w-2/6 flex justify-center items-center border border-red-700 text-red-500 text-2xl font-semibold rounded-r-md"
      >
        +
      </div>
    </div>
  );
};

export default QtyManager;
