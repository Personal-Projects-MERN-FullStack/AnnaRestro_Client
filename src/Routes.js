import { useRoutes, Outlet } from "react-router";
import NotFound from "./componants/NotFound";
import Userlogin from "./componants/user/Userlogin";
import Menu from "./componants/user/Menu";
import Navbar from "./componants/user/UI/Navbar";
import Home from "./componants/user/Home";
import Cart from "./componants/user/Cart";
import Wallet from "./componants/user/Wallet";
// Home Components

const AdminLogin = () => <div>Admin Login</div>;

// User Dashboard Components
const UserHome = () => <div>User Home</div>;
const UserProfile = () => <div>User Profile</div>;
const UserWallet = () => <div>User Wallet</div>;

// Admin Dashboard Components
const AdminHome = () => <div>Admin Home Page</div>;
const AdminProfile = () => <div>Admin Profile</div>;

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <Outlet />
    </div>
  );
}

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <Outlet />
    </div>
  );
}

function AppRoutes() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div className="bg-white w-full h-screen">
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
        </div>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Userlogin /> },
        { path: "menu", element: <Menu /> },
        { path: "dashboard", element: <UserProfile /> },
        { path: "profile", element: <UserWallet /> },
        { path: "wallet", element: <Wallet /> },
        { path: "orders", element: <UserWallet /> },
        { path: "cart", element: <Cart /> },
      ],
    },
    {
      path: "/admin",
      element: <Outlet />,
      children: [
        { path: "", element: <AdminHome /> },
        { path: "profile", element: <AdminProfile /> },
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
