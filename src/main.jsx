import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./routes/error-page.jsx";
import Posts from "./routes/Posts.jsx";
import Tracker from "./routes/Tracker.jsx";
import Lists from "./routes/Lists.jsx";
import { StyledEngineProvider } from "@mui/material";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts",
    element: (
      <Layout>
        <Posts />
      </Layout>
    ),
  },
  {
    path: "/lists",
    element: (
      <Layout>
        <Lists />
      </Layout>
    ),
  },
  {
    path: "/tracker",
    element: (
      <Layout>
        <Tracker />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <RouterProvider router={router} />
    </StyledEngineProvider>
  </React.StrictMode>
);
