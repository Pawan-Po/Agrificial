import React, { useState } from 'react';
import { Alert,TextInput,FlatList,Modal,StyleSheet,Image,View, Text, TouchableOpacity, Pressable } from 'react-native';
import {Button, Icon} from '@rneui/themed';
import Dorji from "../../assets/Dorji.png";
import profile from '../../assets/profile_.png'
import check from '../../assets/check.png'
import checked from '../../assets/checked.png'
import ticked from '../../assets/ticked.png'


const avatarData = [
  { id: 'Broccoli', name: 'Broccoli', image: require('../../assets/broccoli.png') },
  { id: 'Cabbage', name: 'Cabbage', image: require('../../assets/cabbage.png') },
  { id: 'Carrot', name: 'Carrot', image: require('../../assets/carrot.png') },
  { id: 'Corn', name: 'Corn', image: require('../../assets/corn.png') },
  { id: 'Onion', name: 'Onion', image: require('../../assets/onion.png') },
  { id: 'Tomato', name: 'Tomato', image: require('../../assets/tomato.png') },
];
const AvatarPicker =({ava,setAva,getImage})=> {
  
  const [selectedAvatar,setSelectedAvatar]=useState(null);


      return (
          <Modal
          animationType="slide"
          transparent={true}
          visible={ava}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            console.log(selectedAvatar.id);
            setAva();
          }}
          >

          <View style={styles.container}>
              <Text style={{ fontSize:25,fontWeight:'bold', justifyContent:'center',marginLeft:40,}}>Select an Avatar</Text>
              <FlatList
                  numColumns={3}
                  style={{ flexWrap: "wrap" }}
                  data={avatarData}
                  renderItem={({ item }) => (
                      <View style={{ width: 100, height: 100 }}>
                      <TouchableOpacity onPress={() => setSelectedAvatar(item)}>
                          <Image source={item.image} style={styles.avatar} />
                          <Text>{item.name}</Text>
                      </TouchableOpacity>
                      </View>
                  )}
                  keyExtractor={item => item.id}
              />
              <View style={{ flexDirection:'row',justifyContent:'flex-start',alignItems:'flex-end' }}>
                <Text style={{marginRight:10}}>Selected Avatar</Text> 
                {selectedAvatar!=null && <Image source={selectedAvatar.image} style={{ height:50,width:50}} /> }
                </View>
          <Button title=" " type='clear' onPress={()=>{selectedAvatar!=null && getImage(selectedAvatar.image);setAva();}}><Icon name='close'/></Button>
          </View>
          </Modal>
      );
  }

export default function ProfileScreen({ navigation }) {
  const [ava,setAva]=useState(false)
  const [username, setUsername]=useState('');
  const [firstname, setFirstname]=useState('');
  const [lastname, setLastname]=useState('');
  const [dob, setDOB]=useState(new Date());
  const [image,setImage]=useState(avatarData[0].image);

  const getImage =(item)=>{
    console.log(item);
    setImage(item);
  }
  const modelView=()=>{
    setAva(!ava);
  }
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      
      {ava && <AvatarPicker ava={ava} setAva={()=>modelView()} getImage={getImage} />}
      <Text style={{ fontWeight:'bold', fontSize:18, }}>User Profile</Text>
      <Pressable onPress={()=>setAva(!ava)}>
      <Image source={image} style={{height:100,width:100,marginTop:10}}/>
      </Pressable>
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
   
    fontWeight:'bold',
    fontSize:20
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin:10,
    paddingTop:-50

    
},
container:{
 

    backgroundColor:'white',
    width:'90%',
    marginHorizontal:20,
    marginTop:30,
    padding:10,
    justifyContent:'center',
    alignItems:'center'
}
    
})