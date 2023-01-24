import React, { useState } from 'react';
import { View,Modal, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import {Button, Icon} from '@rneui/themed';


const avatarData = [
    { id: 'Broccoli', name: 'Broccoli', image: require('../../assets/broccoli.png') },
    { id: 'Cabbage', name: 'Cabbage', image: require('../../assets/cabbage.png') },
    { id: 'Carrot', name: 'Carrot', image: require('../../assets/carrot.png') },
    { id: 'Corn', name: 'Corn', image: require('../../assets/corn.png') },
    { id: 'Onion', name: 'Onion', image: require('../../assets/onion.png') },
    { id: 'Tomato', name: 'Tomato', image: require('../../assets/tomato.png') },
];


const AvatarPicker =(props)=> {
    
    const [modalVisible,setModalVisible]=useState(true);
    const [selectedAvatar,setSelectedAvatar]=useState(null);
  
        return (
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              this.setState({modalVisible: !modalVisible});
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
                        <TouchableOpacity onPress={() => setSelectedAvatar(item.id)}>
                            <Image source={item.image} style={styles.avatar} />
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.id}
                />
                <Text style={{ justifyContent:'flex-start',alignItems:'flex-end' }}>Selected Avatar: {selectedAvatar}</Text>
            <Button title=" " type='clear' onPress={()=>setModalVisible(!modalVisible)}><Icon name='close'/></Button>
            </View>
            </Modal>
        );
    }




export default AvatarPicker;
const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin:10,
        paddingTop:-50

        
    },
    container:{
     
    
        backgroundColor:'white',
        height: 320 ,
        width:'90%',
        marginHorizontal:20,
        marginTop:30,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    }
});
