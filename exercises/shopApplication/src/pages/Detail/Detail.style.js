import { Dimensions, StyleSheet } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1
    },
    body_container:{
        padding: 10
    },
    image:{
        width:deviceSize.width,
        height:deviceSize.height / 3,
        resizeMode:"contain",
        backgroundColor:"white"
    },
    title:{
        fontWeight:"bold",
        fontSize:25
    },
    desc:{},
    price:{
        fontWeight:"bold",
        fontSize:22,
        textAlign:"right"
    }
});