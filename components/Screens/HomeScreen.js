import * as React from 'react';
import {ImageBackground,StyleSheet,TouchableOpacity } from 'react-native';
import Dorji from "../../assets/Dorji.png";
import vegetable from "../../assets/organic-food.png";
import tips from "../../assets/question.png";
import disease from "../../assets/disease.png";
import Card from './card';
import Login from './Login';
export default function HomeScreen({ navigation }) {
    return(
        <ImageBackground source={Dorji} style={styles.container}>
            <Login/>
            <TouchableOpacity onPress={()=>{navigation.navigate("Doughnut")}}>

                <Card
                    title="Crop Recommendations"
                    description={"Always plant the best crops\nas per your soil quality."}
                    image={vegetable}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("Upload")}}>
                
                <Card
                    title="Plant Disease Detection"
                    description={"Know what disease your\ncrops are suffering from."}
                    image={disease}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("TipsFAQ")}}>  
                <Card
                    title="Tips and FAQ"
                    description={"Learn from the best."}
                    image={tips}
                />
            </TouchableOpacity>
            
       </ImageBackground>  
    );
}

const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignItems:'center',
    },
});

