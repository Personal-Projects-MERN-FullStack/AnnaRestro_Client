import { useRoutes, Outlet, useNavigate } from "react-router";
import NotFound from "./componants/NotFound";
import Userlogin from "./componants/user/Userlogin";
import Menu from "./componants/user/Menu";
import Navbar from "./componants/user/UI/Navbar";
import Home from "./componants/user/Home";
import Cart from "./componants/user/Cart";
import Wallet from "./componants/user/Wallet";
import Search from "./componants/user/subpages/Search";
import Orders from "./componants/user/Orders";
import OrderStatus from "./componants/user/subpages/OrderStatus";
import Notification from "./componants/user/UI/Notification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  Currentpagehandler,
  LastPageUpdater,
  authVefication,
} from "./store/actions/ui-actions";
import useLoadMenu from "./hooks/useLoadMenu";
import Productpage from "./componants/user/Productpage";
import Profile from "./componants/user/Profile";
import Dashboard from "../src/componants/admin/pages/Dasboard";
import AOrders from "./componants/admin/pages/Orders";
import Login from "./componants/admin/pages/Login";
import SuperAdmin from "./componants/sadmin/pages/SuperAdmin";
import Structure from "./componants/sadmin/Componants/Structure";
import OdersData from "./componants/sadmin/pages/OdersData";
import Admins from "./componants/sadmin/pages/Admins";
import Products from "./componants/sadmin/pages/Products";
import Reports from "./componants/sadmin/pages/Reports";
// Home Components

// User Dashboard Components
const UserProfile = () => <div>User Profile</div>;


function AppRoutes() {
  const dispatch = useDispatch();
  const [start, setstart] = useState(0);
  const auth = useSelector((state) => state.auth.auth);
  const curl = useSelector((state) => state.ui.currentpage);
  const currentUrl = window.location.href;
  const navigate = useNavigate();
  useLoadMenu();

  useEffect(() => {
    dispatch(LastPageUpdater());
    dispatch(authVefication(curl));
  }, []);

  useEffect(() => {
    if (start > 1) {
      dispatch(Currentpagehandler());
    }

    setstart(start + 1);
    // console.log(curl);
  }, [currentUrl, dispatch, curl]);

  const notify = useSelector((state) => state.ui.notification);
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="bg-white w-full h-screen">
          {notify.active && <Notification />}
          <Outlet />

          <div className="md:fixed text-6xl md:bottom-0 md:top-0 flex-col md:left-0 md:right-0 md:bg-black md:h-screen md:w-full invisible md:visible flex justify-center text-white items-center">
            <div class=" flex justify-center h-[300px] w-[160px] border border-4 border-black rounded-2xl bg-gray-50">
              <span class="border border-black bg-black w-20 h-2 rounded-br-xl rounded-bl-xl"></span>

              <span class="absolute -right-2 top-14 border border-4 border-black h-7 rounded-md"></span>
              <span class="absolute -right-2 bottom-36 border border-4 border-black h-10 rounded-md"></span>
            </div>
            <div className="text-white text-xl">MOBILE VIEW ONLY</div>
          </div>

          <Navbar />
          {/* <Notifcation/> */}
        </div>
      ),
      children: [
        {
          path: "",
          element: <Home />,
          // <WebSocketComponent />
        },
        { path: "login", element: <Userlogin /> },
        {
          path: "menu",
          element: (
            <>
              <Outlet />
            </>
          ),
          children: [
            { path: "", element: <Menu /> },
            { path: "search", element: <Search /> },
            { path: "product/:pid", element: <Productpage /> },
          ],
        },
        { path: "dashboard", element: <UserProfile /> },
        { path: "profile", element: <Profile /> },
        {
          path: "wallet",
          element: <Outlet />,
          children: [
            { path: "", element: <Wallet /> },
            { path: "add", element: <Wallet /> },
            { path: "paymentSuccesful", element: <Wallet /> },
          ],
        },
        {
          path: "orders",
          element: <Outlet />,
          children: [
            { path: "", element: <Orders /> },
            { path: "status/:orderId", element: <OrderStatus /> },
          ],
        },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "/admin",
      element: <Outlet />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "Orders", element: <AOrders /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "/superadmin",
      element:<Structure><Outlet /></Structure> ,
      children: [
        { path: "", element: <SuperAdmin /> },
        { path: "profile", element: <Orders /> },
        { path: "orders", element: <OdersData /> },
        { path: "products", element: <Products /> },
        { path: "reports", element: <Reports /> },
        { path: "admins", element: <Admins /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return routes;
}

export default AppRoutes;
