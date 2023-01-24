// import React from 'react';
// import { StyleSheet, View, Text} from 'react-native';
// import PieChart from 'react-native-expo-pie-chart';
// import Button from '../bookbutton';

// const Doughnut = () => (
//   <View style={styles.container}>
//     <PieChart
//       data={[
//         {
//           key: 'First Data',
//           count: 100,
//           color: 'blue',
//         },
//         {
//           key: 'Second Data',
//           count: 25,
//           color: 'red',
//         },
//         {
//           key: 'Third Data',
//           count: 40,
//           color: 'green',
//         },
//         {
//           key: 'Forth Data',
//           count: 35,
//           color: 'orange',
//         },
//         {
//           key:'Fifth Data',
//           count:23,
//           color:'black',
//         }
//       ]}
//       length={350}
      
//     />
    
//       <View>
//         <Text style={{color:'red'}}>
//           pH
//         </Text>
//         <Text style={{color:'blue'}}>
//           Nitrogen
//         </Text>
//         <Text style={{color:'green'}}>
//           Phosphorus
//         </Text>
//         <Text style={{color:'orange'}}>
//           Potassium
//         </Text>
//         <Text style={{color:'black'}}>
//           Humidity
//         </Text>
        
//       </View>

//       <Button onPress={() => {}} icon='bookmark'   />
      
//   </View>
  
  
  
// );

// export default Doughnut;

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
    
//   },
// });

import {PieChart,} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { StyleSheet, View,} from 'react-native';

const screenWidth = Dimensions.get("screen").width;
const data = [
  {
    name: "Seoul",
    population: 215,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 280,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 85,
    color: "#000000",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 119,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];

const Doughnut = () => (
  <View style={styles.container}>
    
    <PieChart
      data={data}
      width={screenWidth}
      height={250}
      chartConfig={chartConfig}
      accessor={"population"}
      backgroundColor={"transparent"}
      paddingLeft={"15"}
      center={[10, 10,]}
      absolute
    />
  </View>
);

export default Doughnut;

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });