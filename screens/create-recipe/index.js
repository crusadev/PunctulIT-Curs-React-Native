import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";

const CreateRecipe = () => {

    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerHeader}>
                <Text style={styles.header}>Posteaza Reteta</Text>
            </View>
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Nume</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Categorie</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Complexitate</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText}>Ingrediente</Text>
                <TextInput style={styles.bigInput} />
            </View>
            <View style={styles.buttonContainer}>
                <Button display={"Post"} />
            </View>
        </ScrollView>
    )
}

export default CreateRecipe;