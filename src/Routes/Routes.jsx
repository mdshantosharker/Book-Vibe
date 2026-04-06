import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/books/Books";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, Component: Homepage },
      {
        path: "/books",
        element: <Books />,
      },
    ],
  },
]);
