import React, {lazy,Suspense} from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
const Grocery = lazy(()=> import("./components/Grocery"));
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const AppLayout = () => {
   return (
    <Provider store={appStore}>
   <div className="app">
     <HeaderComponent />
     <Outlet />
   </div>
   </Provider>);
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
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading .....</h1>}><Grocery /></Suspense>,
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
      },
      {
        path:"/cart",
        element: <Cart />
      },

    ],
    errorElement: <Error />,
  },
  
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); 