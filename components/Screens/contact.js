import React from "react";
import { ImageBackground } from "react-native";
import Dorji from "../../assets/Dorji.png";
import { View, Text, ScrollView, Image } from "react-native";

const data = [
  {
    company: require("../../assets/dhiLogo.png"),
    contact_details: [
      "+975-02-336257",
      "ThimphuTechPark, Thimphu, Bhutan",
      "dhi@dhi.bt",
    ],
  },
  ,
];
const CardView = ({ company, contact_details }) => {
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={company} style={{ height: 150, width: 150 }} />
      </View>
      <View
        style={{
          paddingVertical: 25,
          paddingHorizontal: 25,

          margin: 3,
          borderRadius: 10,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: "500" }}>
          Contact No :{" "}
          <Text style={{ fontWeight: "300" }}>{contact_details[0]}</Text>
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: "500" }}>
          Address :{" "}
          <Text style={{ fontWeight: "300", textAlign:'right' }}>{contact_details[1]}</Text>
        </Text>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: "500" }}>
          email :{" "}
          <Text style={{ fontWeight: "300" }}>{contact_details[2]}</Text>
        </Text>
      </View>
    </View>
  );
};
const Contact = () => {
  return (
    <ImageBackground
      source={Dorji}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text style={{ marginTop: 45, fontSize: 20, fontWeight: "bold" }}>
        Contact
      </Text>
      <ScrollView style={{ marginTop: 20, width: 350 }}>
        {data.map((item, index) => {
          return (
            <CardView
              key={index}
              company={item.company}
              contact_details={item.contact_details}
            />
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
};

export default Contact;
