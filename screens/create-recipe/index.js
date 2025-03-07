import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useReducer, useState } from "react";
import { useRecipes } from "../../react-logic/context/RecipesContext";
import { useNavigation } from "@react-navigation/native";

const CreateRecipe = () => {
    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [complexity,setComplexity] = useState("");
    const [ingredient,setIngredient] = useState("");
    const [iQuantity,setIQuantity] = useState("");
    const {recipes,addRecipe} = useRecipes();
    const navigator = useNavigation();

    const reducer = (state,action) => {
        switch(action.type){
            case "ADD":{
                setIngredient("");
                setIQuantity("");
                return [...state,action.ingredient];
            }
            case "REMOVE":
                return state.filter((ing,index) => index !== action.index);
        }
    }

    const postRecipe = () => {
        const recipe = {
            name,
            category,
            ingredients,
            complexity
        }

        addRecipe(recipe);
        navigator.navigate("Home")
    }

    const [ingredients,dispatch] = useReducer(reducer,[]);
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            {recipes.map((recipe,index) => (
                <View key={index}>
                    <Text>{recipe.name}</Text>
                    <Text>{recipe.category}</Text>
                </View>
            ))}
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>{name}</Text>
                <TextInput style={styles.input} onChangeText={setName} placeholder="Nume"/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>{category}</Text>
                <TextInput style={styles.input} onChangeText={setCategory} placeholder="Categorie"/>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>{complexity}</Text>
                <TextInput style={styles.input} onChangeText={setComplexity} placeholder="Complexitate"/>
            </View>
            <View style={styles.inputContainer}>
                {
                    ingredients.map((i,index) => (
                        <View key={index}>
                            <Text>{i.name}</Text>
                            <Text>{i.quantity}</Text>
                            <TouchableOpacity>
                                <Text onPress={() => dispatch({
                                    type:"REMOVE",
                                    index
                                })}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }
                <TextInput style={styles.input} placeholder="Nume Ingredient" onChangeText={setIngredient} value={ingredient}/>
                <TextInput style={styles.input} placeholder="Cantitate" onChangeText={setIQuantity} value={iQuantity}/>
                <Button display={"Adaugam Ingredient"} onPress={() => dispatch({
                    type:"ADD",
                    ingredient:{
                        name:ingredient,
                        quantity:iQuantity,
                    }
                })}></Button>
            </View>
            <View style={styles.buttonContainer}>
                <Button display={"Post"} onPress={() => postRecipe()} />
            </View>
        </ScrollView>
    )
}

export default CreateRecipe;