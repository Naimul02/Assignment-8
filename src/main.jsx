import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import Wishlists from "./components/Wishlists/Wishlists.jsx";
import "./index.css";
import MainLayout from "./Layout/MainLayout.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Home from "./Pages/Home/Home.jsx";
import ListedBooks from "./Pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead/PagesToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        loader: () => fetch("/booksInfo.json"),
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/wishlists",
        loader: () => fetch("/booksInfo.json"),
        element: <Wishlists></Wishlists>,
      },
      {
        path: "/pagestoread",
        loader: () => fetch("/booksInfo.json"),
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("/booksInfo.json"),
        element: <BookDetails></BookDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
