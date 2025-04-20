import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GettingStarted, Component, NotFound } from "./pages";

const router = createBrowserRouter([
  {
    path: "/docs",
    element: <App />,
    children: [
      {
        path: "/docs/",
        element: <GettingStarted />,
      },
      {
        path: "/docs/components/:componentname",
        element: <Component />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
