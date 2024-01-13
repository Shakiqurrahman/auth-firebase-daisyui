import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Layout from '../Routes/Layout'
import Login from "../components/login";
import Register from "../components/Register";

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
      ]
    },
  ]);
  export default router;