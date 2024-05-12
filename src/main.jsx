import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './Routes.jsx';
import AuthProvider from './Authentication/AuthProvider.jsx';
import { Helmet } from 'react-helmet';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
)
