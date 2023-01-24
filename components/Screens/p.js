import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TextInput,ImageBackground,StyleSheet,Image,View, Text, TouchableOpacity, Pressable } from 'react-native';
import Dorji from "../../assets/Dorji.png";
import bg_ from "../../assets/bgg.png"
import contact from '../../assets/contact.png'
import profile from '../../assets/user_profile.png'
import crop from '../../assets/crops_recommended.png'
import arrow from '../../assets/arrow.png'
import signout from '../../assets/signout.png'
import { Avatar } from "@rneui/themed"; 




export default function ProfileScreen({ navigation }) {
  return (
    <ImageBackground
      source={bg_}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        <Text>Profile</Text>
      </Pressable> */}
            <Text style={{fontSize:18, fontWeight:'bold',paddingTop:50,paddingBottom:20 }}> User Profile</Text>
            <Image
              source={Dorji}
              style={{width: 100, height: 100, borderRadius: 50, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#000000'}}
              PlaceholderContent={<Ionicons name="md-person" size={100} color="gray" />}
            />
            <Text style={{fontSize:20, fontWeight:'bold',paddingTop:20, color:'white'}}> Profile Name</Text>
            <Text style={{fontSize:10, fontWeight:'bold',paddingTop:10, color:'white'}}> Email</Text>
            <View  style={styles.cardContainer}>
                <TouchableOpacity onPress={()=>{navigation.navigate('UserProfile');}}>
                <Text style={{paddingVertical: 6,paddingHorizontal: 10,}}>
                    <Image source={profile} />
                    <Avatar size={32} rounded source={profile} style={{ borderRadius:25,backgroundColor:'#FEDDE9', }}/>{"    "}
                    <Text  style={styles.cardTitle}>User Profile</Text>
                    {"                                          "}
                    <Image source={arrow} />
                </Text> 
                </TouchableOpacity>
            </View>
            <View  style={styles.cardContainer2}>
              <TouchableOpacity onPress={() =>navigation.navigate('CropRecommendation')}>
                <Text style={{paddingVertical: 6,paddingHorizontal: 10,}}>
                    <Image source={crop} style={{ backgroundColor:'#E3E4FF' }} />
                    <Avatar size={32} rounded source={crop} style={{ borderRadius:25,backgroundColor:'#E3E4FF', }} />{"    "}
                    <Text  style={styles.cardTitle}>Crop Recommended</Text>
                    {"                        "}
                    <Image source={arrow} />
                </Text>

              </TouchableOpacity>

            </View>
            <View  style={styles.cardContainer2}>
            <Text style={{paddingVertical: 6,paddingHorizontal: 10,}}>
                    <Image source={profile} />
                    <Avatar size={32} rounded source={profile} style={{ borderRadius:25,backgroundColor:'#FFE0E0', }} />{"    "}
                    <Text  style={styles.cardTitle}>Location</Text>
                    {"                                                  "}
                    <Image source={arrow} />
                </Text>
                
            </View>
            <View  style={styles.cardContainer2}>
            <Text style={{paddingVertical: 6,paddingHorizontal: 10}}>
                    <Image source={contact} />
                    <Avatar size={32} rounded source={contact} style={{ borderRadius:25,backgroundColor:'#E7D3FF' }} />
                    {"    "}
                    <Text  style={styles.cardTitle}>Contact</Text>
                    {"                                                    "}
                    <Image source={arrow} />
                </Text>
     
            </View>
            
            <TouchableOpacity style={styles.cardButton} onPress={() => alert('Card pressed!')}>
                <Text style={styles.cardButtonText}>Sign Out
                {'     '}
                <Image source={signout}/>
                </Text>
            </TouchableOpacity>
      
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  
  bg:{
    //alignSelf:'center',
    height:'30%',
    width:'100%',
    position:'absolute',
    //paddingTop:500,
    marginTop:-10,
    marginStart:0
},
cardContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 50,
    width: 350,
    height:60,
    alignSelf: 'center',
    //position:'absolute'
  },
  cardContainer2: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    width: 350,
    height:60,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 18,
    margin: 15,
    color: 'black',
    alignContent:'center',
  },
  cardButton: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 18,
    borderWidth:3,
    borderColor:'#14e2bd',
    alignSelf: 'center',
    marginTop:20,
    margin: 5,
    width:300,
    height:60,
  },
  cardButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize:20
  },
    
})