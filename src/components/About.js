import { useContext } from "react";
import UserContext from "./UserContext";

const About = () => {
    const userData = useContext(UserContext)
    console.log("userData", userData)
    return (
        <div>
            Logged in user : {userData.loggedInUser}
        </div>
    )
}

export default About;