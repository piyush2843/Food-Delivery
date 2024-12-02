import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Add from "./pages/Add";
import Orders from "./pages/Orders.jsx";
import List from './pages/List';

const url = "http://localhost:4000";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/add",
        element: <Add url={url}/>,
      },
      {
        path:"/list",
        element:<List url={url}/>
      },
      {
        path:"/orders",
        element:<Orders url={url}/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
