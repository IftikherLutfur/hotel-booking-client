import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Book from "./Components/Book/Book";
import BookDetails from "./Components/Book/BookDetails";

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
        },
        {
            path:'/room',
            element:<Book></Book>,
            loader: ()=> fetch('http://localhost:5000/room')
        },
        {
            path:'/room/:id',
            element:<BookDetails></BookDetails>,
            loader:()=>fetch('http://localhost:5000/room')
        }
      ]
    },
  ]);

  export default router;