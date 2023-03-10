import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import SignUp from "./SignUp";
import { ImageBackground } from "react-native";
import { Avatar } from "@rneui/themed";
import google from "../../assets/icons8-google-48.png";
import OnBoarding from "./OnBoarding";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({}) {
  const [modalVisible, setModalVisible] = useState(true);
  const [signVisible, setSignVisible] = useState(false);

  const setModel =()=>{
    setModalVisible(!modalVisible);
  }
  const [walk,setWalk]=useState(true);
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        style={{ImageBackground}}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      {walk && <OnBoarding setWalk={setWalk} walk={walk}/>}
        {!walk && !signVisible && (
          <View style={styles.container}>
            <Image
              style={styles.image}
              source={require("../../assets/adaptive-icon.png")}
            />

            <StatusBar style="auto" />

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter your Email Address"
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
              />
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <Pressable
              style={[styles.loginBtn]}
              onPress={() => setModel()}
            >
              <Text style={styles.loginText}>Login</Text>
            </Pressable>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent:'space-evenly',
                padding:10,
                borderRadius: 30,
                width:'auto',
                borderWidth: 1,
                borderColor: "#33ddff",
              }}
            >
              
                  <Avatar size={32} rounded source={google} />
            
                  <Text style={{fontSize:16 ,marginHorizontal:20}}>Log In With Google</Text>
              </TouchableOpacity>
            <Text style={styles.RememberMe1}>
              Don't Have an Account? 
              <Text style={[styles.RememberMe2]}
                onPress={() => {
                  setSignVisible(!signVisible);
                }}
              >
                <Text style={styles.RememberMe2}> SignUp</Text>
              </Text>
            </Text>
          </View>
        )}
        {!walk && signVisible && (
          <SignUp
            setModalVisible={() => {setModel()}}
            setSignVisible={() => {setSignVisible()}}
            modalVisible={modalVisible}
            signVisible={signVisible}
          />
        )}

      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
    marginBottom: 50,
    paddingBottom: 1,
    paddingTop: 3,
  },
  inputView: {
    backgroundColor: "#fff9f9",
    borderWidth: 1,
    borderColor: "#03e1ff",
    borderRadius: 30,
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignSelf: "flex-start",
    color: "#676565",
  },
  forgot_button: {
    paddingTop: 10,
    height: 30,
    marginBottom: 10,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    paddingTop: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#1dadb6",
  },
  loginBtn1: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingTop: -10,
    backgroundColor: "#4285f4",
  },
  loginBtn2: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#294B7D",
  },
  loginText: {
    color: "white",
  },
  RememberMe1: {
    paddingTop: 10,
    height: 30,
    color: "#000000",
  },
  RememberMe2: {
  
    paddingTop: 10,
    paddingLeft: 5,
    height: 30,
    marginBottom: 10,
    color: "#1DADB6",
  },
});
