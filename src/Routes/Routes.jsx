import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";
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
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("/booksData.json"),
        element: <BookDetails />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
