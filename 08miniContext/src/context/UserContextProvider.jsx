// ye kind of fragment hoga jo ki top level pe hoga aur iss sare nested wla chiz access kar sakta hai 
import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
const [user, setUser] = React.useState(null)

    return(

    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>

    )

}

export default UserContextProvider