import React from 'react';
import { View, Text, StyleSheet,Image, TouchableOpacity } from 'react-native';
import profile from '../../assets/acorn.png';
import {Icon} from 'react-native-elements';

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.contain}>
            <View style={styles.profContain}>
            <Image source={profile} style={styles.profile}/>
            </View>
            <Text style={styles.userName}>User Profile</Text>
            <Text style={styles.email}>georgeaddams@gmail.com</Text> 
        
        </View>
        <View style={styles.contain2}>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("UserProfile")}}>
           
                <Icon reverse name='user' type='antdesign' />
                <Text style={styles.btnText}>My Profile</Text>
                <Icon name='right' type='antdesign'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("CropRecommendation")}}>

                <Icon reverse name='book' type='antdesign' />
                <Text style={styles.btnText}>Crop Recommendation</Text>
                <Icon name='right' type='antdesign'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} >
                <Icon reverse name='location-pin' type='materialicons' />
                <Text style={styles.btnText}>Location</Text>
                <Icon name='right' type='antdesign'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate("contact")}}>
                <Icon reverse name='contacts' type='antdesign' />
                <Text style={styles.btnText}>Contact</Text>
                <Icon name='right' type='antdesign'/>
            </TouchableOpacity>
            <View style={[styles.btn,{paddingVertical:20,paddingHorizontal:30,backgroundColor:'#B3D2B7',width:200}]}>
                <Text style={[styles.btnText,{color:'white',fontWeight:'bold'}]}>Sign Out</Text>
                <Icon name='log-out' type='feather' color='white'/>
            </View>

        </View>
        <View style={styles.contain3}>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#B3D2B7',},
    contain:{height:'40%',justifyContent:'center',alignItems:'center'},
    contain2:{
        backgroundColor:'white',
        borderTopStartRadius:30,
        borderTopEndRadius:30,
        height:'60%',
        paddingTop:20,
        alignItems:'center',
    },
    
    contain3:{
        backgroundColor:'white',
    },
    userName:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    email:{
        fontSize:12,
        color:'#f1f1f1'
    },
    profContain:{
        marginTop:20,
        height:175,
        width:175,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:100,
        backgroundColor:'white',
    }
    ,
    profile:{
        width:150,
        height:150,      
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderColor:'black',
        borderWidth:1,
        borderRadius:10,
        marginVertical:5,
        width:'90%',
        paddingHorizontal:10,
    },
    btnText:{
        fontSize:20,
    }


});

export default MyProfile