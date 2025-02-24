import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";

const Account = () => {

    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.accountContainer}>
                <View style={styles.accountImage}></View>
                <View style={styles.accountInfoContainer}>
                    <Text style={styles.accountInfoText}>Nume Complet</Text>
                    <Text style={styles.accountInfoText}>email@gmail.com</Text>
                </View>
            </View>
            <Text style={styles.recipesTitle}>Retetele mele</Text>
            <View style={styles.recipesContainer}>
                <View style={styles.recipesBoxContainer}>
                    <RecipeBox name={"Sarmale"} />
                    <RecipeBox name={"Ciorba"} />
                    <RecipeBox name={"Pizza"} />
                </View>
                <View style={styles.recipesButtonContainer}>
                    <Button display={"See more"} />
                </View>
            </View>
            <View style={styles.settingsButtonsContainer}>
                <Button display={"Magazin"} />
                <Button display={"Setari Cont"} />
            </View>
        </ScrollView>
    )
}

export default Account;