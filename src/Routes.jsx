import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/signUp',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;