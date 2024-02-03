import { useRoutes, Outlet } from "react-router";
import NotFound from "./componants/NotFound";
import Userlogin from "./componants/user/Userlogin";
import Menu from "./componants/user/Menu";
import Navbar from "./componants/user/UI/Navbar";
import Home from "./componants/user/Home";
import Cart from "./componants/user/Cart";
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
          <Navbar />
        </div>
      ),
      children: [
        { path: "", element: <Home /> },
        { path: "login", element: <Userlogin /> },
        { path: "menu", element: <Menu /> },
        { path: "dashboard", element: <UserProfile /> },
        { path: "profile", element: <UserWallet /> },
        { path: "wallet", element: <UserWallet /> },
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
