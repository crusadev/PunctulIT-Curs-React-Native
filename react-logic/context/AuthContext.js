import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store"
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token,setToken] = useState("");
    const [email,setEmail] = useState("");
    const [name,setName] = useState("");
    const [userId,setUserId] = useState("");
    const [password,setPassword] = useState("");

    useEffect(() => {
        (async () => {
            const securedEmail = await SecureStore.getItemAsync("email");
            const securedName = await SecureStore.getItemAsync("name");
            const securedToken = await SecureStore.getItemAsync("token");
            const securedUserId = await SecureStore.getItemAsync("userId");
            if (securedEmail && securedName && securedToken && securedUserId){
                setEmail(securedEmail);
                setName(securedName);
                setToken(securedToken)
                setUserId(securedUserId)
            }
        })()
    },[])

    const login = async (email,password) => {
        try{
            const response = await axios.post("http://10.0.2.2:8080/users/login",{
                email,
                password
            })
            await SecureStore.setItemAsync("email",response.data.email);
            await SecureStore.setItemAsync("token",response.data.accessToken);
            await SecureStore.setItemAsync("name",response.data.name);
            await SecureStore.setItemAsync("userId",response.data._id);
            await SecureStore.setItemAsync("points",response.data.points);
            setEmail(response.data.email)
            setToken(response.data.accessToken)
            setName(response.data.name)
            setUserId(response.data._id)
        }catch(err){
            console.log(err.message)
            console.log(err.response.data)
        }
    }

    const register = async (firstName,lastName,email,password) => {
        try{
            const response = await axios.post("http://10.0.2.2:8080/users/register",{
                firstName,
                lastName,
                email,
                password
            })
            if(response.status == 200) login(email,password)
        }catch(err){
            console.log(err.message)
            console.log(err.response.data)
        }
    }

    const logout = async () => {
        await SecureStore.deleteItemAsync("email")
        await SecureStore.deleteItemAsync("password")
        await SecureStore.deleteItemAsync("name")
        await SecureStore.deleteItemAsync("userId")
        setEmail("");
        setName("")
        setToken("")
        setUserId("")
    }

    return(
        <AuthContext.Provider value={{
            email,
            login,
            register,
            logout,
            name,
            userId,
            token
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)