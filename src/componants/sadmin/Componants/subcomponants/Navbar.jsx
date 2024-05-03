import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { sadminlogout } from "../../../../store/actions/auth-actions";
const Navbar = () => {
  const sadmin = useSelector((state) => state.auth.sadmin);
  const dispatch = useDispatch()
  return (
    <div className="flex px-6 w-full h-full justify-between items-center">
      <div className="w-3/6 text-2xl font-bold text-green-800 h-full flex justify-start items-center">
        welcome , {(Object.keys(sadmin).length !== 0)? sadmin.username:"****User"}
      </div>
      <div className="w-3/6 h-full space-x-2 flex justify-end items-center pr-">
        <div className="text-2xl mx-2 cursor-pointer">
          {/* <CgProfile /> */}
        </div>
        <div className="text-2xl mx-2 cursor-pointer">
        {Object.keys(sadmin).length !== 0 ? (
           <HiOutlineLogout   onClick={() => {
            dispatch(sadminlogout());
          }}/>
          
        ) : (
          ""
        )}
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
