import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {
    console.log("header called")
    const [btnText, setBtnText] = useState("Login")
    const [btnText1, setBtnText1] = useState("Login1")


    // useEffect would be called after your component renders
    // Empty dependency array [] => component loads => useEffect would be called, but only on initial render => 1 time
    // Do not mention anything in dependency array => component loads => useEffect called on initial render as well as after every re-render of component
    // If you have a variable that is being updated

    let abc = "123"
    abc = "234"
    console.log(abc)

    // const test = "123"
    // test = "234"
    // console.log(abc)

    useEffect(() => {
        console.log("header useEffect is called")
    }, [])

    return (
        <div className="bg-black-300">
            <div className="logo-container">
                <img className="logo-img"
                    alt="app-logo"
                    src={LOGO_IMG} />
            </div>
            <div className="nav-container">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login")
                    }}>
                        {btnText}
                    </button>
                    <button onClick={() => {
                        btnText1 === "Login1" ? setBtnText1("Logout1") : setBtnText1("Login1")
                    }}>{btnText1}</button>
                </ul>

            </div>
        </div>
    )
}


export default Header;