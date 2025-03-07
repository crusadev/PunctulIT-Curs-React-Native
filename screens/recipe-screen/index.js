import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useState } from "react";

const RecipeScreen = ({route}) => {
    const {name,category,complexity,ingredients} = route.params
    const [counter,setCounter] = useState(0);
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
            <View>
                <Text>{counter}</Text>
            </View>
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                <Text>Add to counter</Text>
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <View style={styles.smallInputsContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Nume</Text>
                        <Text style={styles.input}>{name}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Categorie</Text>
                        <Text style={styles.input}>{category}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Complexitate</Text>
                        <Text style={styles.input} >{complexity}</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Timp Pregatire</Text>
                        <Text style={styles.input} />
                    </View>
                </View>
                <View style={styles.bigInputContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Ingrediente</Text>
                        <Text style={styles.bigInput} >{ingredients}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button display={"Return"} />
            </View>
        </ScrollView>
    )
}

export default RecipeScreen;