import { Button } from '@rneui/base';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';

const Doughnut = () => (
  <View style={styles.container}>
    <PieChart
      data={[
        {
          key: 'First Data',
          count: 20,
          color: 'blue',
        },
        {
          key: 'Second Data',
          count: 25,
          color: 'red',
        },
        {
          key: 'Third Data',
          count: 40,
          color: 'green',
        },
        {
          key: 'Forth Data',
          count: 35,
          color: 'orange',
        },
        {
          key:'Fifth Data',
          count:23,
          color:'black'
        }
      ]}
      length={350}
      
    />
    <Button icon="image"/>
    <View style={{alignItems:'center', justifyContent:'center',}}>
      <Text style={{color:'red'}}>
        pH
      </Text>
      <Text style={{color:'blue'}}>
        Nitrogen
      </Text>
      <Text style={{color:'green'}}>
        Phosphorus
      </Text>
      <Text style={{color:'orange'}}>
        Potassium
      </Text>
      <Text style={{color:'black'}}>
        Humidity
      </Text>
    

    </View>
  
  </View>
  
  
);

export default Doughnut;

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1:{
  
    backgroundColor: '#fff',
    
  }
});

