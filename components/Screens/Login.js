import { StatusBar } from "expo-status-bar";
//import NavBot from 'r/NavBot';
//import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";
import SignUp from "./SignUp";
import Dorji from "../../assets/Dorji.png";
import { ImageBackground } from "react-native";
import { Avatar, Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';
import google from "../../assets/icons8-google-48.png";
import WalkThrough from "./WalkThrough";

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

export default function Login({ navigation }) {
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
      {walk && <WalkThrough setWalk={setWalk} walk={walk}/>}
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
                paddingRight:10,
              
                borderRadius: 30,
                width:'auto',
                borderWidth: 1,
                borderColor: "#33ddff",
              }}
            >
              
                <Text
                  style={{
                    paddingVertical: 4,
                    paddingHorizontal: 10,
                  }}
                >
                  <Avatar size={32} rounded source={google} />{" "}
                </Text>
                  <Text style={{fontSize:16 ,marginRight:30}}>Log In With Google</Text>
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
