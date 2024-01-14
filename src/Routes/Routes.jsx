import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Layout from '../Routes/Layout'
import Login from "../components/login";
import Register from "../components/Register";
import Orders from "../components/Orders";
import Profile from "../components/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout /> ,
      children : [
        {
            path: '/',
            element: <Home /> 
        },
        {
            path: '/register',
            element: <Register /> 
        },
        {
            path: '/login',
            element: <Login /> 
        },
        {
            path: '/orders',
            element: <PrivateRoute><Orders /> </PrivateRoute>
        },
        {
            path: '/profile',
            element: <PrivateRoute><Profile /> </PrivateRoute>
        },
      ]
    },
  ]);
  export default router;