import * as React from 'react';
import { View, Text, ImageBackground,StyleSheet,TouchableOpacity,Alert } from 'react-native';
import Dorji from "../../assets/Dorji.png";
import crop_recommendations from "../../assets/cropRecommendations.png";
import plant_disease_detection from "../../assets/plant-disease-detection.png";
import tips_and_FAQ from "../../assets/tips-and-FAQ.png";
import Card from './card';
import Login from './Login';

export default function HomeScreen({navigation}){
    return(
        <ImageBackground source={Dorji} style={styles.container}>
            <Login/>
            <TouchableOpacity onPress={() => {console.log("Touch opacity")}}>

                <Card
                    title="Crop Recommendations"
                    description={"Always plant the best crops\nas per your soil quality."}
                    // buttonText="Learn More"
                     onPress={() => Alert('Card pressed!')}
                    image={crop_recommendations}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                
                <Card
                    title="Plant Disease Detection"
                    description={"Know what disease your\ncrops are suffering from."}
                    buttonText="Learn More"
                    onPress={() => Alert('Card pressed!')}
                    image={plant_disease_detection }
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>  
                <Card
                    title="Tips and FAQ"
                    description={"Learn from the best."}
                    
                    image={tips_and_FAQ}
                />
            </TouchableOpacity>
            
       </ImageBackground>  
    );
}
// import * as React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import PieChart from 'react-native-pie-chart';

// const HomeScreen = () => {
//   const widthAndHeight = 250;
//   const series = [123, 321, 123, 789, 537];
//   const sliceColor = ['#F44336', '#2196F3', '#FFEB3B', '#4CAFr50', '#FF9800'];
//   return (
//     <View>
//         <Text style={styles.title}>Doughnut</Text>
//         <PieChart
//           widthAndHeight={widthAndHeight}
//           series={series}
//           sliceColor={sliceColor}
//           doughnut={true}
//           coverRadius={0.45}
//           coverFill={'#FFF'}
//         />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     margin: 10,
//   },
// });
// export default HomeScreen;

const styles = StyleSheet.create({
    container: {
       flex:1,
       
    },
});

