import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Dorji from "../../assets/Dorji.png";
import crop_recommendations from "../../assets/cropRecommendations.png";
import plant_disease_detection from "../../assets/plant-disease-detection.png";
import tips_and_FAQ from "../../assets/tips-and-FAQ.png";
import Card from './card';





export default function Dashboard(){
    
    return(
        <ImageBackground source={Dorji} style={styles.container}>
                <Card
                    title="Crop Recommendations"
                    description={"Always plant the best crops\nas per your soil quality."}
                    // buttonText="Learn More"
                    // onPress={() => alert('Card pressed!')}
                    image={crop_recommendations}
                />
                <Card
                    title="Plan Disease Detection"
                    description={"Know what disease your\ncrops are suffering from."}
                    buttonText="Learn More"
                    onPress={() => alert('Card pressed!')}
                    image={plant_disease_detection}
                />
                <Card
                    title="Tips and FAQ"
                    description={"Learn from the best."}
                    buttonText="Learn More"
                    onPress={() => alert('Card pressed!')}
                    image={tips_and_FAQ}
                />
            
       </ImageBackground>  
    );
} 

const styles = StyleSheet.create({
    container: {
       
    },
    Dorji: {
        flex: 1,
        justifyContent: 'center',
      },
    tips_and_FAQ:{
        height: '100',
        width:'100'
    },
    
});




