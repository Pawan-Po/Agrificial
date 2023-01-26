import React from "react";
import { ImageBackground } from "react-native";
import Dorji from "../../assets/Dorji.png";
import { View, Text, ScrollView } from "react-native";

const data = [
  { date: "3 Jan , 2023", dataSet: "Crop Recommendation" },
  ,
  { date: "1 Jan , 2023", dataSet: "Crop Recommendation" },
];
const CardView = ({ date, dataSet }) => {
  return (
    <View
      style={{
        backgroundColor: "#649068",
        color: "white",
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        opacity: 0.8,
      }}
    >
      <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>
        {date}
      </Text>
      <View
        style={{
          padding: 5,
          margin: 3,
          minHeight: 200,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold",textAlign:'center' }}>
          Crop Recommendation
        </Text>
        <Text style={{ fontSize: 14, fontWeight: '200',margin:5 }}>{dataSet}</Text>
      </View>
    </View>
  );
};
const CropRecommendation = () => {
  return (
    <ImageBackground
      source={Dorji}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ marginTop: 45, fontSize: 20, fontWeight: "bold" }}>
        Crop Recommended
      </Text>
      <ScrollView style={{ marginTop: 20, width: 350 }}>
        {data.map((item, index) => {
          return (
            <CardView key={index} date={item.date} dataSet={item.dataSet} />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default CropRecommendation;
