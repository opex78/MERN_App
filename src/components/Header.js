import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";
import UserContext from "./UserContext";

const Header = () => {

    const [btnText, setBtnText] = useState("Login")

    // const userData = useContext(UserContext)
    // useEffect would be called after your component renders
    // Empty dependency array [] => component loads => useEffect would be called, but only on initial render => 1 time
    // Do not mention anything in dependency array => component loads => useEffect called on initial render as well as after every re-render of component
    // If you have a variable that is being updated 
    useEffect(() => {
        //console.log("header useEffect is called")
    }, [])
    const cartItems = useSelector((store) => store.cart.items)
    return (
        <div className="flex justify-between bg-amber-100 border-solid border-2 border-amber-700">
            <div>
                <img className="w-24"
                    alt="app-logo"
                    src={LOGO_IMG} />
            </div>
            <div>
                <ul className="flex">
                    <li className="m-4 p-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="m-4 p-4">
                        <Link to="/about">About us</Link></li>
                    <li className="m-4 p-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-4 p-4"><Link to="/contact">Contact us</Link></li>
                    <li className="m-4 p-4"><Link to="/cart">Cart - {cartItems.length}</Link></li>
                    <li className="m-4 p-4" onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>
                        {btnText} -
                        <UserContext.Consumer>{(data) => data.loggedInUser}</UserContext.Consumer>
                    </li>
                </ul>

            </div>
        </div>
    )
}


export default Header;