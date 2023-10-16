import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet />
        </>
      ),
      children: [
        { index: true, element: <Homepage /> },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
