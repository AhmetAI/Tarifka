import React from "react";
import { View, Text, FlatList } from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import envConfig from "../../../envConfig";
import useFetch from "../../hooks/useFetch/useFetch";

import Loading from "../../components/Loading"
import Error from "../../components/Error"

import CategoryCard from "../../components/CategoryCard/CategoryCard";


 
const Categories = ({navigation}) => {
    
    const {loading, data, error} = useFetch(envConfig.API_CATEGORY_URL)
    
    const handleSelect = (strCategory) => {
        navigation.navigate("MealsScreen", {strCategory})
        console.log("SECİLEN KATEGORI " + strCategory)
    }
    
    const renderCategories = ({item}) => <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)} />

    if (loading) { 
        return <Loading/>;
    }
    
    if (error) {
       return  <Error/> ;
    } 

    return(

        <SafeAreaView style={{backgroundColor: "orange"}}  >
            <FlatList
            data={data.categories} 
            renderItem={renderCategories}
            />
        </SafeAreaView>

    )
}
export default Categories;