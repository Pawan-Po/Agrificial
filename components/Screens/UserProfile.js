import React, { useState } from 'react';
import { TextInput,ImageBackground,StyleSheet,Image,View, Text, TouchableOpacity, Pressable } from 'react-native';
import Dorji from "../../assets/Dorji.png";
import profile from '../../assets/profile_.png'
import check from '../../assets/check.png'
import checked from '../../assets/checked.png'
import ticked from '../../assets/ticked.png' 

export default function ProfileScreen({ navigation }) {
  const [username, setUsername]=useState('');
  const [firstname, setFirstname]=useState('');
  const [lastname, setLastname]=useState('');
  const [dob, setDOB]=useState(new Date());
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        <Text>Profile</Text>
      </Pressable> */}
      <Text style={{ fontWeight:'bold', fontSize:18, }}>User Profile</Text>
      <Image source={profile} style={{height:100,width:100,marginTop:10}}/>
      <Text style={styles.TextLabel}>Username</Text>
           <View style={styles.inputView}>
              <TextInput
                value={username}
                style={styles.TextInput}
                placeholder="Your Username"
                placeholderTextColor="#003f5c"
                onChangeText={(username) => setUsername(username)}
              />
              {username.length > 0 &&(
                <Image source={check} style={{marginLeft:280,marginTop:-30, marginBottom:10}}/>
              )}
            </View>
            <Text style={styles.TextLabel}>First Name</Text>
           <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your First Name"
                placeholderTextColor="#003f5c"
                onChangeText={(firstname) => setFirstname(firstname)}
              />
              {firstname.length > 0 &&(
                <Image source={check} style={{marginLeft:280,marginTop:-30, marginBottom:10}}/>
              )}
            </View>
            <Text style={styles.TextLabel}>Last Name</Text>
           <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your Last Name"
                placeholderTextColor="#003f5c"
                onChangeText={(lastname) => setLastname(lastname)}
              />
              {lastname.length > 0 &&(
                <Image source={check} style={{marginLeft:280,marginTop:-30, marginBottom:10}}/>
              )}
            </View>
            <Text style={styles.TextLabel}>Date of Birth</Text>
           <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Your birthday(dd-mm-yyyy)"
                placeholderTextColor="#003f5c"
                onChangeText={(dob) => setDOB(dob)}
              />
              {dob.length > 0 &&(
                <Image source={check} style={{marginLeft:280,marginTop:-30, marginBottom:10}}/>
              )}
              {/* <DatePicker
                style={styles.datePickerStyle}
                date={date} // Initial date from state
                mode="date" // The enum of date, datetime and time
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2016"
                maxDate="01-01-2019"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(date) => {
                  setDate(date);
                }}
              /> */}
              
            </View>
            <Pressable style={styles.btnStyle}>
              <Text style={styles.btnText}>
                Complete 
              </Text>
              <Image source={checked} style={{marginLeft:200,marginTop:-20, marginBottom:10}}/>
              {dob.length > 0 && username.length > 0 && firstname.length > 0 && lastname.length > 0 &&(
                <Image source={ticked} style={{marginLeft:200,marginTop:-30, marginBottom:10}}/>
              )}
            </Pressable>

      
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    borderWidth: 1,
    borderColor: "#ffffff",
    width: "80%",
    height: 55,
    marginBottom: 20,
    alignSelf: "center",
    borderBottomColor:"#03e1ff",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignSelf: "flex-start",
    color: "#676565",
  },
  TextLabel:{
    alignSelf: "flex-start",
    marginLeft: 50,
    fontSize:20,
  },
  btnStyle:{
    marginTop:5,
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    height:50,
    color:'#cccccc',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#14E2BD',
    width:'80%', 
    
  },
  btnText:{
    //color:'#BAB6BE',
    //
    fontWeight:'bold',
    fontSize:20
  }
    
})