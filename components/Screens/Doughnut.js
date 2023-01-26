import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const dataDisp=[
  {id:1,name:'Nitrogen',value:7.5,color:'#0081B1'},
  {id:2,name:'Phosphorus',value:7.5,color:'#007CC8'},
  {id:3,name:'Potassium',value:7.5,color:'#5D70C3'},
  {id:4,name:'pH',value:7.5,color:'#9E63AA'},
  {id:5,name:'Humidity',value:7.5,color:'#BB5D86'},
  {id:6,name:'EC',value:7.5,color:'#C06565'},
]

const Doughnut = () => {
  return (
    <View style={style.container}>
      <View style={style.contain_1}>
        {dataDisp.map((item,index)=>{
          return(
            <View key={index} style={[style.dataView,{backgroundColor:item.color}]}>
              <Text style={{color:'white',fontSize:15}}>{item.name}</Text>
              <Text style={{color:'#cccccc',fontSize:12}}>{item.value}</Text>
            </View>
          )
        })}

      </View>
      <View style={style.contain_2}></View>
    </View>
    );
}

const style = StyleSheet.create({
  container: {
    flex:1, 
   
  },
  contain_1:{
    height:'50%',
    paddingVertical:60,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    
  },
  contain_2:{
    height:'50%',
    backgroundColor:'#B3D2B7'
  },
  dataView:{
    height:100,
    width:100,
    borderRadius:10,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'green'
  }
    
});

export default Doughnut
