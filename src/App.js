import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const AppLayout = () => {
   return (
   <div className="app">
     <HeaderComponent />
     <Outlet />
   </div>);
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout />,
    children:[
      {
        path:"/",
        element: <BodyComponent />,
      },

      {
        path:"/about",
        element: <About />,
      },
      {
        path:"/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resId",
        element: <RestaurantMenu />
      }

    ],
    errorElement: <Error />,
  },
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 