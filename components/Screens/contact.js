import React from "react";
import { ImageBackground } from "react-native";
import Dorji from "../../assets/Dorji.png";
import { View, Text, ScrollView } from "react-native";

const data = [
  { company: "DHI", contact_details: ["00975-02-336257", "336258", "dhi@dhi.btr"] },
  ,
  { company: "DHI", contact_details: ["00975-02-336257", "336258", "dhi@dhi.btr"] },
];
const CardView = ({ company, contact_details }) => {
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
        {company}
      </Text>
      {contact_details.map((item, index) => {
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
const Contact = () => {
  return (
    <ImageBackground
      source={Dorji}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{marginTop:20,fontSize:20,fontWeight:'bold' }}>Contact</Text>
      <ScrollView style={{ marginTop: 20, width: 350 }}>
        {data.map((item, index) => {
          return (
            <CardView key={index} company={item.company} contact_details={item.contact_details} />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default Contact;
