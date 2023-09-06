import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window');


export default StyleSheet.create({

    container: {
        margin: 10,
    },
    
    image: {
        height: 200,
        borderRadius: 10,
    },

    text_container: {
        borderRadius: 10,
        backgroundColor: "rgba(0,0,0,0.4)",
        bottom:0,
        padding: 10,
        position: "absolute",
        alignItems: "flex-end"
    },

    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }

})