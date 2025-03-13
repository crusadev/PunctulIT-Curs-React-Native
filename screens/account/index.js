import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useRecipes } from "../../react-logic/context/RecipesContext";
import { useAuth } from "../../react-logic/context/AuthContext";
import { usePoints } from "../../react-logic/context/PointsContext";
import { useNavigation } from "@react-navigation/native";

const Account = () => {
    const {recipes} = useRecipes();
    const {email,name,logout} = useAuth();
    const {points} = usePoints();
    const navigator = useNavigation()
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.accountContainer}>
                <View style={styles.accountImage}></View>
                <View style={styles.accountInfoContainer}>
                    <Text style={styles.accountInfoText}>{name}</Text>
                    <Text style={styles.accountInfoText}>{email}</Text>
                    <Text style={styles.accountInfoText}>Points: {points}</Text>
                </View>
            </View>
            <Text style={styles.recipesTitle}>Retetele mele</Text>
            <View style={styles.recipesContainer}>
                <View style={styles.recipesBoxContainer}>
                    {recipes && recipes.map((recipe,index) => (
                        <RecipeBox key={index} recipe={recipe} />
                    ))}
                </View>
                <View style={styles.recipesButtonContainer}>
                    <Button display={"See more"} />
                </View>
            </View>
            <View style={styles.settingsButtonsContainer}>
                <Button display={"Magazin"} />
                {(name && email) ? 
                <Button display={"Logout"} onPress={() => logout()}/>
                :
                <Button display={"Log In"} onPress={() => navigator.navigate("AccountSettings")}/>
                }
            </View>
        </ScrollView>
    )
}

export default Account;