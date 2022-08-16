import { useState } from "react";
import { createContext } from "react";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null)

    return (
        <UserContext.Provider value={{
            currentUser, setCurrentUser
        }}>
            { children }
        </UserContext.Provider>
    )
}