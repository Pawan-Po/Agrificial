import React from "react";
import { ImageBackground } from "react-native";
import Dorji from "../../assets/Dorji.png";
import { View, Text, ScrollView } from "react-native";

const data = [
  { date: "3 Jan , 2023", veggies: ["Potato", "Chilli", "Cauliflower"] },
  ,
  { date: "1 Jan , 2023", veggies: ["Potato", "Tomato", "Cabbage"] },
];
const CardView = ({ date, veggies }) => {
  return (
    <View
      style={{
        backgroundColor: "#111111",
        color: "white",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        opacity:0.8
      }}
    >
      <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
        {date}
      </Text>
      {veggies.map((item, index) => {
        return (
          <Text
            style={{
              padding: 5,
              margin: 3,
              fontSize: 20,
              textAlign: "center",
              borderRadius: 10,
              backgroundColor: "white",
            }}
            key={index}
          >
            {item}
          </Text>
        );
      })}
    </View>
  );
};
const CropRecommendation = () => {
  return (
    <ImageBackground
      source={Dorji}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{marginTop:20,fontSize:20,fontWeight:'bold' }}>Crop Recommended</Text>
      <ScrollView style={{ marginTop: 20, width: 350 }}>
        {data.map((item, index) => {
          return (
            <CardView key={index} date={item.date} veggies={item.veggies} />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default CropRecommendation;
