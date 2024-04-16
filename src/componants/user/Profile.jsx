import React, { useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";

import { IoReturnUpBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { LogoutHandler } from "../../store/actions/ui-actions";
const Profile = () => {
  const loggedin = useSelector((state) => state.auth.auth);
  const user = useSelector((state) => state.auth.user);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedin) {
      Navigate("/login");
    }
  }, [loggedin, Navigate]);

  return (
    <div className="flex mt-4  flex-col items-center justify-start h-screen">
      {/* <div className="text-xl font-semibold m-2 shadow-lg shadow-black w-full rounded-2xl">Profile</div> */}
      <div className="shadow-md py-1 shadow-black items-center m-2 rounded-2xl text-blue-900  flex justify-between w-11/12 px-4  font-semibold">
        <IoReturnUpBackOutline
          onClick={() => Navigate("/wallet")}
          className="text-2xl cursor-pointer"
        />
        <div className="text-xl font-semibold">Profile</div>
        <AiOutlineLogout
          onClick={() => dispatch(LogoutHandler())}
          className="text-2xl cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src="/logo192.png" // Replace with the actual path to the profile photo
          alt="Profile"
          className="w-32 h-32 rounded-full"
        />
        <div className="mt-4 text-lg font-bold">{user.user.name}</div>
        <div className="text-gray-500">{user.user.email}</div>
      </div>
    </div>
  );
};

export default Profile;
