import { StatusBar } from "expo-status-bar";
//import NavBot from 'r/NavBot';
//import * as ImagePicker from 'expo-image-picker';
import React, { useState } from "react";


import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal,
  Image,
  Alert,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function Login() {

    
  const [modalVisible, setModalVisible] = useState(true);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  return (<Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}> 
    
    <View style={styles.container}>

      {/* <Image style={styles.image} source={require("../../assets/log2.png")} />  */}


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

          onChangeText={(password) => setPassword(password)}/> 
      </View>

      
      {/* <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity>   */}
      <Pressable
              style={[styles.loginBtn]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.loginText}>Login</Text>
      </Pressable>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn1}>
        <Text style={styles.loginText}>Google</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn2}>
        <Text style={styles.loginText}>Facebook</Text> 
      </TouchableOpacity> 
    </View> 
    
    </Modal>
    

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
    height:250,
    width:250, 
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#fff9f9",
    borderWidth:1,
    borderColor:"#03e1ff",
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
    alignSelf:'flex-start',
    color:'#676565'
  },
  forgot_button: {
    paddingTop:15,
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    paddingTop:5,
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
    color:"white",
  }

});