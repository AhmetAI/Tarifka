import React from "react";
import { View, Text, FlatList } from "react-native";
import envConfig from "../../../envConfig";
import useFetch from "../../hooks/useFetch/useFetch";

import Loading from "../../components/Loading"
import Error from "../../components/Error"

import MealsCard from "../../components/MealsCard";


const Meals = ({route, navigation}) => {

    const {strCategory} = route.params;
    const {loading, data, error} = useFetch(`${envConfig.API_MEAL_URL}${strCategory}`)
    
    const handleSelect = (idMeal) => {
        navigation.navigate("DetailScreen", {idMeal})
        console.log(idMeal)
    }

    const renderMeals = ({item}) => <MealsCard meal={item} onSelect={() => handleSelect(item.idMeal)} />

    if (loading) {
        return <Loading/>;
    }

    if (error) {
       return  <Error/> ;
    } 


    return ( 
        <FlatList
        data={data.meals}
        renderItem={renderMeals}
        /> 
    
    )
}

export default Meals;