import React from "react";
import { View, Text, Linking, Image, ScrollView, TouchableOpacity } from "react-native";
import envConfig from "../../../envConfig";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Detail.style"

import Loading from "../../components/Loading"
import Error from "../../components/Error"


const Detail = ({route}) => {

    const {idMeal} = route.params;
    const {loading, error, data} = useFetch(`${envConfig.API_MEAL_DETAILS_URL}${idMeal}`)

    if (loading) {
        return <Loading/>;
    }
    
    if (error) {
        return  <Error/> ;
    } 

    const meal = data.meals[0];

    console.log(meal.strMeal)

    const handleLinking = (meal) => {
        console.log(meal.strYoutube)
        Linking.openURL(meal.strYoutube)
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:"#e0e0e0"}} >

        <View style={styles.container} >
            <Image style={styles.image} source={{uri:meal.strMealThumb}} />
            <Text style={styles.title}> {meal.strMeal} </Text>
            <View style={styles.seperator} />
            <Text style={styles.description}> {meal.strInstructions} </Text>
            <TouchableOpacity style={styles.youtube_container} onPress={() => handleLinking(meal)}>
                <Text style={styles.youtube_text}>Watch on Youtube!</Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
    )
}

export default Detail;