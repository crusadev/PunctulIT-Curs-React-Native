import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState("");
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        (async () => {
            const securedEmail = await SecureStore.getItemAsync("email");
            const securedName = await SecureStore.getItemAsync("name");
            if (securedEmail && securedName){
                setEmail(securedEmail);
                setName(securedName);
            }
        })()
    },[])

    const login = async (email,password) => {
        const securedEmail = await SecureStore.getItemAsync("email");
        const securedPassword = await SecureStore.getItemAsync("password");
        if( (email === securedEmail) && (password === securedPassword)){
            console.log("success")
        }else{
            console.log("error")
        }
    }

    const register = async (name,email,password) => {
        await SecureStore.setItemAsync("email",email);
        await SecureStore.setItemAsync("password",password);
        await SecureStore.setItemAsync("name",name);
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync("email")
        await SecureStore.deleteItemAsync("password")
    }

    return(
        <AuthContext.Provider value={{
            email,
            login,
            register,
            logout,
            name
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)