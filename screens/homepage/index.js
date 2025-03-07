import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useReducer } from "react";
import { useRecipes } from "../../react-logic/context/RecipesContext";

const Homepage = () => {
    const {recipes} = useRecipes();
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
            <Text style={styles.title}>Retele noastre:</Text>
            <View style={styles.recipesContainer}>
                {recipes.map((recipe,index) => (
                    <RecipeBox key={index} name={recipe.name} />
                ))}
            </View>
            <View style={{flexDirection:"row",marginVertical:24}}>
                <TextInput style={styles.searchBar}/>
                <Button display={"Search"} />
            </View>
            <View style={styles.recipesContainer}>
            {recipes.map((recipe,index) => (
                    <RecipeBox key={index} name={recipe.name} />
                ))}
            </View>
        </ScrollView>
    )
}

export default Homepage;