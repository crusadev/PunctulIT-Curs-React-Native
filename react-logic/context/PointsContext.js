import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {createContext, useContext, useDeferredValue, useEffect, useReducer,useState} from "react"
import { useAuth } from "./AuthContext";

const PointsContext = createContext();

export const PointsProvider = ({children}) => {
    const [points,setPoints] = useState(0);
    const {userId,token} = useAuth()

    useEffect(() => {
        (async () => {
            const intPoints = await AsyncStorage.getItem("points");
            if (intPoints){
                setPoints(parseInt(intPoints))
            }
        })()
    },[])

    useEffect(() => {
        (async () => {
            await AsyncStorage.setItem("points",points);
        })()
    },[points])
    
    const addPoints = async () => {
        try{
            const response = await axios.post("http://10.0.2.2:8080/users/points",{
                value:5
            },{
                params:{
                    userId
                },
                headers:{
                    Authorization:token
                }
            })
            setPoints(points+5)
        }catch(err){
            console.log(err.message);
            console.log(err.response.data)
        }
    }

    const buyItem = (value) => {
        if(points > value){
            setPoints(points - value)
        }
    }

    return(
        <PointsContext.Provider value={{
            points,
            addPoints,
            buyItem
        }}>
            {children}
        </PointsContext.Provider>
    )
}

export const usePoints = () => useContext(PointsContext);