import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    theme: "light",
    settings: "",
})

export default UserContext