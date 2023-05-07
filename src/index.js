import React from "react";
import ReactDOM from "react-dom/client";
import { Form, useLoaderData } from "react-router-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Layof/Home";
import Orders from "./components/Orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "orders",
    element: <Orders></Orders>,
    loader: () => fetch("products.json"),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
