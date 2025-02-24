import { Text, TextInput, View, StyleSheet } from "react-native"

const Form = () => {

    return(
        <View>
            <Text>Nume:</Text>
            <TextInput style={styles.input} />
            <Text>Prenume:</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:"gray"
    }
})

export default Form;