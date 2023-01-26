import React from 'react';
import { View,ScrollView, StyleSheet,Text, TouchableOpacity } from 'react-native';
import {Icon} from 'react-native-elements';

const dataDisp=[
    {id:1,name:'Nitrogen',value:7.5,color:'#2E9598'},
    {id:2,name:'Phosphorus',value:7.5,color:'#F7DB69'},
    {id:3,name:'Potassium',value:7.5,color:'#E68E65'},
    {id:4,name:'pH',value:7.5,color:'#AEC77B'},
    {id:5,name:'Humidity',value:7.5,color:'#C6A779'},
    {id:6,name:'EC',value:7.5,color:'#E2BEF1'},
  ]

const Doughnut = () => {
  const [bMark,setbMark]=React.useState(false);
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
      <View style={style.contain_2}>
        <TouchableOpacity onPress={()=>{setbMark(!bMark)}} style={{justifyContent:'flex-start',alignItems:'flex-end',marginRight:10,marginTop:10}}>
          <Icon name='bookmark' type='fontawesome'  reverse reverseColor={bMark?'#58AD9A':'white'} color={!bMark?'#58AD9A':'white'}/>
        </TouchableOpacity>
        <ScrollView contentContainerStyle={{justifyContent:'center',alignItems:'center',marginTop:10}}>
          <View style={{width:'90%',backgroundColor:'white',minHeight:200,borderRadius:10,justifyContent:'flex-start',alignItems:'center'}}>
          <Text style={{fontSize:18,marginTop:15,fontWeight:'bold'}}>Crop Recommendation</Text>
          <Text style={{fontSize:15,marginTop:10,fontWeight:'300',paddingHorizontal:25}}>Crop Recommendation </Text>

          </View>
        </ScrollView>
      </View>
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
    backgroundColor:'#B3D2B7',
    borderTopStartRadius:30,
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