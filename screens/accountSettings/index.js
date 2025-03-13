import { TextInput, View,Text } from "react-native"
import styles from "./styles"
import Constants from "expo-constants"
import Button from "../../components/button"
import { useState } from "react"
import { useAuth } from "../../react-logic/context/AuthContext"
import { useNavigation } from "@react-navigation/native"

export const AccountSettings = () => {
    const [name,setName] = useState("");
    const [surname,setSurname] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login,register} = useAuth();
    const navigator = useNavigation();

    return(
        <View style={{marginTop:Constants.statusBarHeight}}>
            <Text>Log In:</Text>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail}/>
            <Text>Parola</Text>
            <TextInput style={styles.input} onChangeText={setPassword}/>
            <Button display={"Log in"} onPress={async () => {
                await login(email,password);
                navigator.goBack()
                }}/>

            <Text>Register:</Text>
            <Text>Nume</Text>
            <TextInput style={styles.input} onChangeText={setName}/>
            <Text>Prenume</Text>
            <TextInput style={styles.input} onChangeText={setSurname}/>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={setEmail}/>
            <Text>Parola</Text>
            <TextInput style={styles.input} onChangeText={setPassword}/>
            <Button display={"Register"} onPress={async () => {
                await register(name,surname,email,password);
                navigator.goBack()
                }} />
        </View>
    )
}