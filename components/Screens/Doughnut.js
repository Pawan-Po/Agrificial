import React from 'react';
import { View, StyleSheet,Text, ImageBackground } from 'react-native';
import Dorji from '../../assets/Dorji.png'

// const dataDisp=[
//   {id:1,name:'Nitrogen',value:7.5,color:'#FBF7D5'},
//   {id:2,name:'Phosphorus',value:7.5,color:'#CCE1F2'},
//   {id:3,name:'Potassium',value:7.5,color:'#F9DED7'},
//   {id:4,name:'pH',value:7.5,color:'#C6F8E5'},
//   {id:5,name:'Humidity',value:7.5,color:'#F5CDDE'},
//   {id:6,name:'EC',value:7.5,color:'#E2BEF1'},
// ]

const dataDisp=[
    {id:1,name:'Nitrogen',value:7.5,color:'#2E9598'},
    {id:2,name:'Phosphorus',value:7.5,color:'#F7DB69'},
    {id:3,name:'Potassium',value:7.5,color:'#E68E65'},
    {id:4,name:'pH',value:7.5,color:'#AEC77B'},
    {id:5,name:'Humidity',value:7.5,color:'#C6A779'},
    {id:6,name:'EC',value:7.5,color:'#E2BEF1'},
  ]

const Doughnut = () => {
  return (
    <ImageBackground source={Dorji} style={style.container}>
    <View style={style.container}>
      <View style={style.contain_1}>
        {dataDisp.map((item,index)=>{
          return(
            <View key={index} style={[style.dataView,{backgroundColor:item.color}]}>
              <Text style={{color:'#383632',fontSize:16, fontWeight:'600'}}>{item.name}</Text>
              <Text style={{color:'383632',fontSize:15}}>{item.value}</Text>
            </View>
          )
        })}

      </View>
      <View style={style.contain_2}></View>
    </View>
    </ImageBackground>
    );
}

const style = StyleSheet.create({
  container: {
    flex:1, 
   
  },
  contain_1:{
    flex:1,
    paddingVertical:60,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    
  },
  contain_2:{
    flex:1,
    
  },
  dataView:{
    height:100,
    width:100,
    borderRadius:15,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
  }
    
});

export default Doughnut