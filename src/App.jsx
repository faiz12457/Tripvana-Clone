import React from "react";
import Home from "./pages/Home";
import Pacakages from "./pages/Pacakages";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/about",
      element: <About />,
    },

    {
      path: "/pacakges",
      element: <Pacakages />,
    },

    {
      path: "/contact",
      element: <ContactUs />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
