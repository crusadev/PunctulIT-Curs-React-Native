import { TouchableOpacity, Text, StyleSheet } from "react-native"

const Button = (props) => {

    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.display}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"blue",
        padding:12
    },
    buttonText:{
        color:"white"
    }
})

export default Button;