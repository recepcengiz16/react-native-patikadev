import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        margin:10,
        borderRadius:10
    },
    image:{
        height: Dimensions.get("window").height / 5 //dimensions ile ekranın boyutunu alabiliyoruz.
    },
    title:{
        fontSize:18,
        fontWeight:"bold"
    },
    description:{
        marginTop:3
    },
    author:{
        fontStyle:"italic",
        textAlign:"right"
    },
    inner_container:{
        padding:5
    }
})