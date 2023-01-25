import React from "react";
import { Button } from "@rneui/themed";
import { View, Image, Text, ImageBackground } from "react-native";
import slideBg from "../../assets/SliderBackground.png";
import logo from "../../assets/icon.png";
import Icon from "react-native-vector-icons";
import OnBoarding from "./OnBoarding";

const WalkThrough = ({walk,setWalk}) => {
  return (
    <ImageBackground
      source={slideBg}
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      {/* <View>
        
      </View> */}
      <View style={{height:'10%',flexDirection:'row',marginTop:50,marginBottom:20,justifyContent:'space-between',alignItems:'center'}}>
        <Button type="clear" color='black' style={{color:'black'}} title="Back"/>
        <Image source={logo} style={{ height: 150, width: 150 }} />
        <Button title="Skip" onPress={()=>{setWalk(!walk)}} style={{color:'black'}} type="clear" />
      </View>
      <View style={{ height: "70%" }}>
        <OnBoarding />
      </View>
      <View>
        <Text>Bottom</Text>
      </View>
    </ImageBackground>
  );
};

export default WalkThrough;
