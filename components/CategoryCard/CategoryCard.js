import React from "react";
import { View, Text, Image,  TouchableWithoutFeedback } from "react-native";
import styles from "./CategoryCard.style"

const CategoryCard = ({category, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container} >
                <Image style={styles.image} source={{uri: category.strCategoryThumb}} />
                <Text style={styles.text} > {category.strCategory} </Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;