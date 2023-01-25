import React from "react";
import { Button } from "@rneui/themed";
import { View, Image,Text, ImageBackground } from "react-native";
import slideBg from "../../assets/SliderBackground.png";
import logo from "../../assets/LOGO SAA.svg";
import Icon from "react-native-vector-icons";
import OnBoarding from "./OnBoarding";

const WalkThrough = () => {
  return (
    <ImageBackground source={slideBg} style={{ flex: 1 ,justifyContent:'center',alignItems:'center'}}>
      {/* <View>
        <Button title=" " type="clear" icon={<Icon name="left" />}>
          
        </Button>
        <Image source={logo} style={{ height: 20, width: 20 }} />
        <Button title="Skip" type="clear" />
      </View> */}
      <View><Text>Title</Text></View>
      <View style={{height:'70%'}}><OnBoarding/></View>
      <View><Text>Bottom</Text></View>
    </ImageBackground>
  );
};

export default WalkThrough;
