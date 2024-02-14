import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import BookContextProvider from "./contexts/BookContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from "./components/BookDetails";
import BookForm from "./components/BookForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "book/:id",
    element: <BookDetails/>
  },
  {
    path: "upload",
    element: <BookForm/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BookContextProvider>
      <RouterProvider router={router} />
    </BookContextProvider>
);
