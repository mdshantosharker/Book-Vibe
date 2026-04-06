import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./Layout/MainLayout";
import Homepage from "./Pages/homepage/Homepage";
const router = createBrowserRouter([
  {
    path: "/",
    element: MainLayout,
    children: [{ index: true, Component: Homepage }],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
