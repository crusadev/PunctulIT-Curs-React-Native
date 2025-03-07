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
        case "SET":
            return action.recipes
    }
}

export const RecipeProvider = ({children}) => {
    const [recipes,dispatch] = useReducer(reducer,[]);

    useEffect(() => {
        (async () => {
            const intRecipes = await AsyncStorage.getItem("recipes");
            if (intRecipes){
                const finalRecipes = JSON.parse(intRecipes);
                dispatch({type:"SET",recipes:finalRecipes});
            }
        })()
    },[])

    useEffect(() => {
        (async () => {
            if(recipes.length > 0){
                await AsyncStorage.setItem("recipes",JSON.stringify(recipes));
            }
        })()
    },[recipes])

    const addRecipe = (recipe) => {
        dispatch({
            type:"ADD",
            recipe
        })
    }

    const removeRecipe = (index) => {
        dispatch({
            type:"REMOVE",
            index
        })
    }

    return(
        <RecipeContext.Provider value={{
            recipes,
            dispatch,
            addRecipe,
            removeRecipe
        }}>
            {children}
        </RecipeContext.Provider>
    )
}

export const useRecipes = () => useContext(RecipeContext);