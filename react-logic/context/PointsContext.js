import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useContext, useDeferredValue, useEffect, useReducer,useState} from "react"

const PointsContext = createContext();

export const PointsProvider = ({children}) => {
    const [points,setPoints] = useState(0);

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
    
    const addPoints = () => {
        setPoints(points+5)
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