import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restuarants from "./components/Restuarants";
import { useState } from "react";
import { useEffect } from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";

const Applayout = () => {
  const [userName, setUserName] = useState();

  //authentication
  useEffect(()=>{
    const data = {
      name:"Shivam Pandey"
    }
    setUserName(data.name);
  },[]);

  // wrapping the whole app into Provider
  return (
    <Provider store={appStore}>
    <UserContext.Provider value ={{loggedInUser: userName, setUserName}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const Grocery = lazy(()=>import("./components/Grocery"))
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
      },
      {
        path: "/restuarants/:resId",
        element:<Restuarants/>
      },
      {
        path: "/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
