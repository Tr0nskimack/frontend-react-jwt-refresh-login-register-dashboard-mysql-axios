import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Login } from "./Pages/Login";
import { Home } from "./Pages/Home";
import { Register } from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";


const Layout = () => {
  return (
    <div>
      
        
        <ScrollRestoration />
        <Outlet />
        
      
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      
    ],
  },
]);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App