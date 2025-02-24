import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useNavigation } from "@react-navigation/native"

const RecipeBox = (props) => {
    const navigator = useNavigation()
    return(
        <TouchableOpacity style={styles.mainContainer} onPress={() => navigator.navigate("RecipeScreen",{
            name:props.name
        })}>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    )
}

export default RecipeBox