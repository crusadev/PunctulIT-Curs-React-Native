import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useContext, useDeferredValue, useEffect, useReducer} from "react"

const RecipeContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":{
            return [...state,action.recipe];
        }
        case "REMOVE":
            return state.filter(index => index !== action.index);
    }
}

export const RecipeProvider = ({children}) => {
    const [recipes,dispatch] = useReducer(reducer,[]);
    
    return(
        <RecipeContext.Provider value={{
            recipes,
            dispatch
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipes = () => useContext(RecipeContext);