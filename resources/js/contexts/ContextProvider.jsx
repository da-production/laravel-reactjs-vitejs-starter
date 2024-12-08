import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    token:null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = (({children}) => {

    const key_name = 'ACCESS_TOKEN';

    const [user,setUser]    = useState({});
    const [token, _setToken]  = useState(localStorage.getItem(key_name));

    const setToken = (token) => {
        _setToken(token);
        if(token){
            localStorage.setItem(key_name,token);
        }else{
            localStorage.removeItem(key_name);
        }
    }

    return (
        <StateContext.Provider value={{user,token,setUser,setToken}}>
            { children }
        </StateContext.Provider>
    )
});

export const useStateContext = () => useContext(StateContext);