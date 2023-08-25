import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeConfig } from "./config/theme.config.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./pages/dashboard/index.jsx";
import ErrorPage from "./pages/error/index.jsx";
import AddTablePage from "./pages/addTable/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DashboardPage />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "add-table",
        element: <AddTablePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeConfig>
      <RouterProvider router={router} />
      <App />
    </ThemeConfig>
  </React.StrictMode>
);
