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
    title:{
        fontWeight:"bold",
        fontSize:24,
        textAlign:"center",
        paddingBottom:24
    },
    recipesContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
        flexWrap:"wrap",
        gap:12,
        alignItems:"center"
    },
    searchBar:{
        width:"70%",
        height:"100%",
        backgroundColor:"gray",
        borderRadius:18,
        marginHorizontal:20
    }
})

export default styles;