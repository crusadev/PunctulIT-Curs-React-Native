import { StatusBar } from "expo-status-bar";
import { ScrollView,Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const RecipeScreen = ({route}) => {
    const {name,category,complexity,ingredients,time} = route.params
    const navigator = useNavigation();
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerImage}>
                <View style={styles.image}></View>
            </View>
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
                        <Text style={styles.input}>{time}</Text>
                    </View>
                </View>
                <View style={styles.bigInputContainer}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>Ingrediente</Text>
                        <Text style={styles.bigInput} >
                            {
                                ingredients.map((ing,index) => (
                                    <View key={index}>
                                        <Text>{ing.name}</Text>
                                        <Text>{ing.quantity}</Text>
                                    </View>
                                ))
                            }
                            </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Button display={"Return"} onPress={() => navigator.navigate("Home")}/>
            </View>
        </ScrollView>
    )
}

export default RecipeScreen;