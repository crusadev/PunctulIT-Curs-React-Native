import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";

const Homepage = () => {

    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerHeader}>
                <Text style={styles.header}>Home</Text>
            </View>
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
            <Text style={styles.title}>Retele noastre:</Text>
            <View style={styles.recipesContainer}>
                <RecipeBox name={"Sarmale"} />
                <RecipeBox name={"Ciorba"} />
                <RecipeBox name={"Pizza"} />
            </View>
            <View style={{flexDirection:"row",marginVertical:24}}>
                <TextInput style={styles.searchBar}/>
                <Button display={"Search"} />
            </View>
            <View style={styles.recipesContainer}>
                <RecipeBox name={"Sarmale"} />
                <RecipeBox name={"Ciorba"} />
                <RecipeBox name={"Pizza"} />
                <RecipeBox name={"Burger"} />
                <RecipeBox name={"Fleica de porc"} />
                <RecipeBox name={"Nuggets"} />
                <RecipeBox name={"Nuggets"} />
            </View>
        </ScrollView>
    )
}

export default Homepage;