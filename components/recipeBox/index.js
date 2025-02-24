import { Text, View } from "react-native"
import styles from "./styles"

const RecipeBox = (props) => {

    return(
        <View style={styles.mainContainer}>
            <Text>{props.name}</Text>
        </View>
    )
}

export default RecipeBox