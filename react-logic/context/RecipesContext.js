import AsyncStorage from "@react-native-async-storage/async-storage";
import {createContext, useContext, useDeferredValue, useEffect, useReducer,useState} from "react"
import { useAuth } from "./AuthContext";
import axios from "axios";

const RecipeContext = createContext();

const reducer = (state,action) => {
    switch(action.type){
        case "ADD":{
            return [...state,action.recipe];
        }
        case "REMOVE":
            return state.filter(index => index !== action.index);
        case "SET":
            return action.recipes
    }
}

export const RecipeProvider = ({children}) => {
    const [recipes,dispatch] = useReducer(reducer,[]);
    const {userId,token} = useAuth()

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://10.0.2.2:8080/recipes/all",{
                params:{
                    userId
                },
                headers:{
                    Authorization:token
                }
            })
            dispatch({type:"SET",recipes:response.data.recipes})
        })()
    },[])

    const addRecipe = async (recipe) => {
        try{
            const response = await axios.post("http://10.0.2.2:8080/recipes/",recipe,{
                params:{
                    userId
                },
                headers:{
                    Authorization:token
                },
            })
            dispatch({
                type:"ADD",
                recipe
            })
        }catch(err){
            console.log(err.message)
            console.log(err.response.data)
        }
    }


    return(
        <RecipeContext.Provider value={{
            recipes,
            dispatch,
            addRecipe,
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipes = () => useContext(RecipeContext);