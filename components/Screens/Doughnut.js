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

// import {ProgressChart} from "react-native-chart-kit";
// import { Dimensions } from "react-native";
// import { StyleSheet, View,Text} from 'react-native';

// const screenWidth = Dimensions.get("screen").width;
// const data = [
//   {
//     name: "Seoul",
//     population: 215,
//     color: "rgba(131, 167, 234, 1)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Toronto",
//     population: 280,
//     color: "#F00",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Beijing",
//     population: 527,
//     color: "red",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "New York",
//     population: 85,
//     color: "#000000",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   },
//   {
//     name: "Moscow",
//     population: 119,
//     color: "rgb(0, 0, 255)",
//     legendFontColor: "#7F7F7F",
//     legendFontSize: 15
//   }
// ];

// const data = {
//   labels: ["Swim", "Bike", "Run", "Climb", "Dance"], // optional
//   data: [0.4, 0.6, 0.8, 0.2, 0.4]
// }; 
// const Doughnut = () => (
// <View style={styles.container}>

//   <ProgressChart
//     data={data}
//     // width={screenWidth}
//     width={screenWidth}
//     height={400}
//     strokeWidth={10}
//     radius={30}
//     chartConfig={chartConfig}
//     hideLegend={true}
//   />

// </View>
  
  // <View style={styles.container}>
    
  //   <PieChart
  //     data={data}
  //     width={screenWidth}
  //     height={250}
  //     chartConfig={chartConfig}
  //     accessor={"population"}
  //     backgroundColor={"transparent"}
  //     paddingLeft={"15"}
  //     center={[10, 10,]}
  //     absolute
      
  //   />
  // </View>
// );

// export default Doughnut;

// const chartConfig = {
//   backgroundGradientFrom: "#fff",
//   backgroundGradientTo: "#fff",
//   color: (opacity = 1) => `rgba(27, 255, 146, ${opacity})`,

  
// };

// const styles = StyleSheet.create({
//     container: {
//       flex:1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
      
//     },
//   });
import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Button from '../bookbutton';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'pH',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Nitrogen',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Potassium',
  },
  {
    id: '231d1411-2311fjckx=0',
    title: 'Phosphorus',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145321wss234',
    title: 'Humidity',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Doughnut = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
       <Button onPress={() => {}} icon='bookmark'   />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#39e75f',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Doughnut;