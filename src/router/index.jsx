import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/", element: <App/>,
    children: [
      { path: "about", element: <App /> },
      { path: "portfolio", element: <App /> },
      { path: "contact", element: <App /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ]
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);