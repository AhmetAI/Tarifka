import { StyleSheet,  } from "react-native";

export default StyleSheet.create({

    seperator: {
        height: 0.5,
        backgroundColor: 'gray',
        margin: 5,
    },

    container: {
        margin: 5,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 10,
    },

    image: {
        height: 200,
        marginBottom: 10,
        borderRadius: 10,
        
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    
    description: {
        fontSize: 18,
        margin: 10,
    },

    youtube_container: {
        alignItems: "center",
    },
    
    youtube_text: {
        borderRadius: 10,
        backgroundColor:"red",
        padding: 10,
        paddingHorizontal: 80,
        margin: 10,
        color: "white",
    }


})