import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerHeader:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    header:{
        paddingVertical:32,
        paddingHorizontal:90,
        borderRadius:18,
        backgroundColor:"gray"
    },
    containerImage:{
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    image:{
        backgroundColor:"gray",
        borderRadius:18,
        width:"95%",
        height:400,
        marginVertical:24
    },
    inputContainer:{
        padding:12,
        gap:12
    },
    inputText:{

    },
    input:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:12
    },
    bigInput:{
        borderColor:"black",
        borderWidth:1,
        borderRadius:12,
        height:300
    },
    buttonContainer:{
        paddingHorizontal:"10%",
        alignItems:"stretch",
        paddingVertical:18
    }
})

export default styles;