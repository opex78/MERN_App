import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
    abc: 213
})

export default UserContext