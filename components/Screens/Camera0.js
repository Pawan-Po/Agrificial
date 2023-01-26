import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import Button from '../Button';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';



export default function Scans({navigation}) {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [image, setImage] = useState(null);
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
    const cameraRef = useRef(null);
  
    useEffect(() => {
      (async () => {
        MediaLibrary.requestPermissionsAsync();
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
      })();
    }, []);
  
    const takePicture = async () => {
      if (cameraRef) {
        try {
          const data = await cameraRef.current.takePictureAsync();
          console.log(data);
          setImage(data.uri);
        } catch (error) {
          console.log(error);
        }
      }
    };
  
    const savePicture = async () => {
      if (image) {
        try {
          const asset = await MediaLibrary.createAssetAsync(image);
          alert('Picture saved! 🎉');
          setImage(null);
          console.log('saved successfully');
        } catch (error) {
          console.log(error);
        }
      }
    };

    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
  
    return (
      <View style={styles.container}>
        {!image ? (
          <Camera 
            style={styles.camera}
            // type={type}
            ref={cameraRef}
            flashMode={flash}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
              }}
            >
              <Button
                onPress={() =>
                  setFlash(
                    flash === Camera.Constants.FlashMode.off
                      ? Camera.Constants.FlashMode.on
                      : Camera.Constants.FlashMode.off
                  )
                }
                icon="flash"
                color={flash === Camera.Constants.FlashMode.off ? 'black' : '#fff'}
              />
            </View>
          </Camera>
        ) : (
          <Image source={{ uri: image }} style={styles.camera} />
        )}
  
        <View style={styles.controls}>
          {image ? (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 50,
              }}
            >
              <Button
                title="Re-take"
                onPress={() => setImage(null)}
                icon="retweet"
                color={'black'}
              />
              
              <Button title="Save" onPress={savePicture} icon="check" color={'black'}/>
            </View>
          ) : (
            <View  style={styles.buttonContainer2} >
              <Button onPress={takePicture} icon="circle"/>
              <Button onPress={() => navigation.navigate('Upload')} icon="chevron-left" color={'black'} />
            </View>
          )}
            
          </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      backgroundColor: '#fff',
     
    
    },
    controls: {
      flex:1 ,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    text: {
      fontWeight: 'bold',
      fontSize: 16,
      marginLeft: 10,
    },

    camera: {
      flex:10,
      paddingTop:40

    },
    topControls: {
      flex: 1,

    },
    buttonContainer2: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'white',
      marginBottom:60,
      flex:1,
    },

  });

