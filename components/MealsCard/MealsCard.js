import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import styles from "./MealsCard.style"

const MealsCard = ({meal, onSelect}) =>{
    return(
    <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: meal.strMealThumb}} />
            <View style={styles.text_container}>
                <Text style={styles.text}> {meal.strMeal} </Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
    )
}

export default MealsCard;