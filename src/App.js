import React, { createContext, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../src/components/About";
import Body from "../src/components/Body";
import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Error from "../src/components/Error";
import RestaurantMenu from "../src/components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("../src/components/Grocery"));

const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <>
                <Header />
                <Outlet />
            </>
        </Provider>
    )
}

export const appContext = createContext({
    bData: "B's Data from app context"
})
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
                path: "cart",
                element: <Cart />
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
