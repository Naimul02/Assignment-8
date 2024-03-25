import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import "./index.css";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import ListedBooks from "./Pages/ListedBooks/ListedBooks.jsx";
import PagesToRead from "./Pages/PagesToRead/PagesToRead.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/bookdetails/:id",
        loader : () => fetch("/booksInfo.json"),
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
