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
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function SignUp({navigation, setModalVisible, modalVisible,setSignVisible,signVisible}) {

    
  //const [modalVisible, setModalVisible] = useState(true);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");


  return (
    
    <View style={styles.container}>

       <Image style={styles.image} source={require("../../assets/adaptive-icon.png")} /> 


      <StatusBar style="auto" />

      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="Enter Username"

          placeholderTextColor="#003f5c"

          onChangeText={(email) => setEmail(email)}

        /> 

      </View> 


      <View style={styles.inputView}>

        <TextInput

          style={styles.TextInput}

          placeholder="Your Email Address"

          placeholderTextColor="#003f5c"

          secureTextEntry={true}

          onChangeText={(password) => setPassword(password)}/> 
      </View>
      <View style={styles.inputView}>

<TextInput

  style={styles.TextInput}

  placeholder="Your Contact Number"

  placeholderTextColor="#003f5c"

  onChangeText={(email) => setEmail(email)}

/> 

</View> 


<View style={styles.inputView}>

<TextInput

  style={styles.TextInput}

  placeholder="Password"

  placeholderTextColor="#003f5c"

  secureTextEntry={true}

  onChangeText={(password) => setPassword(password)}/> 
</View>
<View style={styles.inputView}>

<TextInput

  style={styles.TextInput}

  placeholder="Confirm Password"

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
<Pressable
              style={[styles.loginBtn]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.loginText}>Sign Up</Text>
</Pressable>

<Text style={styles.RememberMe1}>Already have an account?
      <Pressable
              style={[styles.RememberMe2]}
              onPress={() => {setSignVisible(()=>!signVisible)}}>
             <Text style={styles.RememberMe2} >LogIn</Text> 
      </Pressable>
      </Text>


    </View> 


      
      
      // {/* <TouchableOpacity style={styles.loginBtn}>
      //   <Text style={styles.loginText}>LOGIN</Text> 
      // </TouchableOpacity>   */}
    

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
    marginBottom: 10,
    paddingBottom:1,
    paddingTop:3,
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
    paddingTop:10,
    height: 30,
    marginBottom: 10,
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
    paddingTop:-10,
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
  },
  RememberMe1:{
    paddingTop:10,
    height: 30,
    marginBottom: 10,
    color:"#000000",
  },
  RememberMe2:{
    paddingTop:10,
    paddingLeft:5,
    height: 30,
    marginBottom: 10,
    color:"#1DADB6",
  },

});