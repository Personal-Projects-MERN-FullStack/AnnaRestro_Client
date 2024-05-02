import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { sadminlogout } from "../../../../store/actions/auth-actions";

const Sidebar = ({ data }) => {
  const sadmin = useSelector((state) => state.auth.sadmin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-black">
      {/* Profile Section */}
      <div className="flex items-center p-4">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-2"
        />
        <div>
          <h2 className="text-lg font-semibold">AnnaRestro</h2>
          <span className="text-sm">Super Admin</span>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <li
            onClick={() => {
              navigate("/superadmin");
            }}
            className="p-4 hover:bg-gray-700 cursor-pointer hover:ml-6"
          >
            Dashboard
          </li>
          <li
            onClick={() => {
              navigate("/superadmin/orders");
            }}
            className="p-4 hover:bg-gray-700 cursor-pointer hover:ml-6"
          >
            Orders
          </li>
          <li
            onClick={() => {
              navigate("/superadmin/admins");
            }}
            className="p-4 hover:bg-gray-700 cursor-pointer hover:ml-6"
          >
            Admins
          </li>
          <li
            onClick={() => {
              navigate("/superadmin/products");
            }}
            className="p-4 hover:bg-gray-700 cursor-pointer hover:ml-6"
          >
            Products
          </li>
          {/* <li onClick={()=>{navigate('/superadmin/reports')}} className="p-4 hover:bg-gray-700 cursor-pointer hover:ml-6">Reports</li> */}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-700">
        {(sadmin !== undefined )?  <button    onClick={() => {
            dispatch(sadminlogout());
          }} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md w-full">
              Logout
            </button> :""}
      </div>
    </div>
  );
};

export default Sidebar;
