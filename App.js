import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "grocery",
                element: <Suspense fallback={<div>Loading...</div>}><Grocery businessName="Burger Grocery" /></Suspense>
            },
            {
                path: "restaurantMenu/:resId",
                element: <RestaurantMenu />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
