import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const RecipeBox = (props) => {
    const navigator = useNavigation()
    return(
        <TouchableOpacity style={styles.mainContainer} onPress={() => navigator.navigate("RecipeScreen",{
            name:props.recipe.name,
            complexity:props.recipe.complexity,
            category:props.recipe.category,
            ingredients:props.recipe.ingredients,
            time:props.recipe.time,
            image:props.recipe.image
        })}>
            <Image source={{uri:props.recipe.image}} style={styles.image}/>
        </TouchableOpacity>
    )
}

export default RecipeBox