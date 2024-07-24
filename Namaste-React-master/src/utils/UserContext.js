import { createContext } from "react";

const UserContext = createContext({user: {
    name: "Deepak Urs",
    email: "temp@gmail.com"
}});

export default UserContext;
