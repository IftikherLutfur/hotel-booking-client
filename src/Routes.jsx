import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Root";
import Home from "./Home/Home";
import Register from "./Authentication/Register";
import Login from "./Authentication/Login";
import Book from "./Components/Book/Book";
import BookDetails from "./Components/Book/BookDetails";
import Error from "./Home/Error";
import MyList from "./Components/MyList/MyList";
import PrivateRoutes from "./Authentication/PrivateRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
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
            element:<PrivateRoutes><BookDetails></BookDetails></PrivateRoutes>,
            loader:()=>fetch('http://localhost:5000/room')
        },
        {
          path:'/list',
          element:<PrivateRoutes><MyList></MyList></PrivateRoutes>,
          loader: ()=>fetch('http://localhost:5000/post')
        }
        // {
        //   path:'/confirm/:id',
        //   element:<ConfirmBook></ConfirmBook>,
        //   loader:()=>fetch('http://localhost:5000/room')
        // }
      ]
    },
  ]);

  export default router;