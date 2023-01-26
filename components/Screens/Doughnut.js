import React from "react";
import {View,StyleSheet} from 'react-native';


const Data=[
  {id:1, name:'pH', value:'7.5'},
  {id:2, name:'Nitrogen', value:'7.5'},
  {id:3, name:'Phosphorus', value:'7.5'},
  {id:4, name:'Potassium', value:'7.5'},
  {id:5, name:'EC', value:'7.5'},
  {id:6, name:'Humidity', value:'7.5'},
];

const Doughnut = () =>{
  return(
    <View style={style.container}>
      <View style={style.sensor}>
        
      </View>
      <View style={style.crop}>

      </View>
    </View>
  );

}
export default Doughnut;

const styles = StyleSheet.create({
 container:{
  flex:1,
  
 },

 sensor:{
  flex:1,
  backgroundColor:'',
 },

 crop:{
  flex:1,
  backgroundColor:'',
 },
});