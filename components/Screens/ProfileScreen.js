import * as React from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Dorji from "../../assets/Dorji.png";

export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={Dorji}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        <Text>Profile</Text>
      </Pressable>
      
    </ImageBackground>
  );
}
