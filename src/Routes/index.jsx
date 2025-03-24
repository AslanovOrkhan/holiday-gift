// client pages
import ClientLayout from "../Layout/Client";
import Home from "../Pages/Client/Home";
import Cars from "../Pages/Client/Cars";
import CarDetail from "../Pages/Client/CarDetail";
import Register from "../Pages/Client/Register";
import User from "../Pages/Client/User";
import NotFound from "../Pages/Common/NotFound";
import Login from "../Pages/Common/Login";

// admin pages
import AdminLayout from "../Layout/Admin";
import Dashboard from "../Pages/Admin/Dashboard";
import CarManagement from "../Pages/Admin/CarManagement";
import RentalManagement from "../Pages/Admin/RentalManagement";
import UserManagement from "../Pages/Admin/UserManagement";
const Routes = [
  // client pages
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "cars/:id",
        element: <CarDetail />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  // admin pages
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "carManagement",
        element: <CarManagement />,
      },
      {
        path: "rentalManagement",
        element: <RentalManagement />,
      },
      {
        path: "userManagement",
        element: <UserManagement />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  },
];

export default Routes;