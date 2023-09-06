import React from "react";
import LottieView from "lottie-react-native";

const Loading = () =>{
    return <LottieView style={{flex: 1}} loop autoPlay source={require('../../assets/loading.json')} />;
    
}

export default Loading;