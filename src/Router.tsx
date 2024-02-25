import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { AboutPage } from "./pages/About";

export function Router() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
  ]);
  return <RouterProvider router={router} />;
}
