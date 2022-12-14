import React, { useState, createContext } from 'react'
const UserContext = createContext();
export default UserContext;

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        phoneNo: '',
        email: '',
        location: '',
        age: '',
        university: '',
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}