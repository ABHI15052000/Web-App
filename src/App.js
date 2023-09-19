import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import "./styles/global.scss";
import Footer from "./components/footer/Footer";
import Users from "./pages/users/Users";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import "./styles/global.scss";
import SignUp from "./pages/signup/SignUp";
import ChangePassword from "./pages/changePassword/ChangePassword";
import ForgetPassword from "./pages/fogetPassword/ForgetPassword";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/changepassword",
      element: <ChangePassword />,
    },
    {
      path: "/forgetpassword",
      element: <ForgetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
