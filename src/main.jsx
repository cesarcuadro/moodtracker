import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Posts from "./routes/Posts.jsx";
import Tracker from "./routes/Tracker.jsx";
import Lists from "./routes/Lists.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/lists",
    element: <Lists />,
  },
  {
    path: "/tracker",
    element: <Tracker />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
