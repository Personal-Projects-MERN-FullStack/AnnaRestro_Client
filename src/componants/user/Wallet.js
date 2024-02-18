import React, { useEffect } from "react";
import WalletCard from "./UI/WalletCard";
import "./css/Wallet.css";
import { IoNotifications } from "react-icons/io5";
import Transaction from "./UI/Transaction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogoutHandler } from "../../store/actions/ui-actions";

const Wallet = () => {
  const loggedin = useSelector((state) => state.auth.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loggedin) {
      navigate("/login");
    }
  }, [loggedin, navigate]);

  return (
    <div className="container h-screen  fixed top-0 left-0 right-0 bottom-0">
      <div className=" h-16 text-white  fixed top-0 left-0 right-0 flex">
        <div className="w-2/6 h-full flex justify-start pl-4 items-center">
          <div className="rounded-full  h-8 w-8 object-fit">
            <img
              src="/profile/profile2.webp"
              alt="profile"
              className="rounded-full object-cover object-fit"
            />
          </div>
        </div>
        <div className="w-2/6  h-full flex justify-center items-center text-sm font-bold font-serif">
          My Wallet
        </div>
        <div
          className="w-2/6 text-2xl  h-full flex justify-end pr-6 items-center"
          onClick={() => dispatch(LogoutHandler())}
        >
          <IoNotifications />
        </div>
      </div>
      <WalletCard bal="50000" />
      <div className="text-black px-8 flex flex-col rounded-t-3xl pt-8 fixed top-60 bg-white left-0 right-0 bottom-0">
        <div className="w-full h-full  ">
          <div className="flex ">
            <div className="w-4/6  h-12 text-2xl font-serif flex justify-center items-center  font-extrabold">
              My Transactions
            </div>
            <div className="w-2/6 text-2xl   flex justify-end pr-4 items-center -black h-12 font-serif">
              {/* <FaFilterCircleDollar /> */}
            </div>
          </div>
          <div className=" w-full h-full overflow-auto -4 -black">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
