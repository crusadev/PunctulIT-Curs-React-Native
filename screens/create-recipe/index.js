import { StatusBar } from "expo-status-bar";
import { Image, ScrollView,Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles"
import Constants from "expo-constants"
import RecipeBox from "../../components/recipeBox";
import Button from "../../components/button";
import { useReducer, useState } from "react";
import { useRecipes } from "../../react-logic/context/RecipesContext";
import { useNavigation } from "@react-navigation/native";
import { usePoints } from "../../react-logic/context/PointsContext";
import * as ImagePicker from "expo-image-picker"

const CreateRecipe = () => {
    const [name,setName] = useState("");
    const [category,setCategory] = useState("");
    const [complexity,setComplexity] = useState("");
    const [ingredient,setIngredient] = useState("");
    const [iQuantity,setIQuantity] = useState("");
    const [time,setTime] = useState("");
    const {recipes,addRecipe} = useRecipes();
    const {addPoints} = usePoints();
    const navigator = useNavigation();
    const [image,setImage] = useState(null);

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
            complexity,
            time,
            mainImage:image
        }

        addRecipe(recipe);
        addPoints()
        navigator.navigate("Home")
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:['images'],
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })

        if(!result.canceled) setImage(result.assets[0].uri)
    };

    const takePhoto = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes:['images'],
            allowsEditing:false,
            aspect:[4,3],
            quality:1
        })

        if(!result.canceled) setImage(result.assets[0].uri)
    }

    const [ingredients,dispatch] = useReducer(reducer,[]);
    return(
        <ScrollView style={{marginTop:Constants.statusBarHeight}}>
            <StatusBar style="auto" />
            <View style={styles.containerImage}>
                {image ? 
                <Image source={{uri: image}} style={styles.image}/>
                :
                <View style={styles.image}>
                    <TouchableOpacity onPress={() => takePhoto()}>
                        <Text>Facem o poza</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => pickImage()}>
                        <Text>Alege din Galerie</Text>
                    </TouchableOpacity>
                </View>
            }
            <TouchableOpacity onPress={() => setImage(null)}>
                <Text>Remove Image</Text>
            </TouchableOpacity>
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
                <Text style={styles.inputText}>{time}</Text>
                <TextInput style={styles.input} onChangeText={setTime} placeholder="Timp Preparare"/>
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