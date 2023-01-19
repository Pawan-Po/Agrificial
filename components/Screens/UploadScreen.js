// import * as React from 'react';
// import { View, Text } from 'react-native';

// import { Camera } from 'expo-camera';



// export default function UploadScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text
//                 onPress={() => navigation.navigate('Home')}
//                 style={{ fontSize: 26, fontWeight: 'bold', }}> Plant Disease Detection</Text>
                
//         </View>
//     );
// }

import { View, StyleSheet, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import Button from './ButtonUpload';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Dorji from "../../assets/Dorji.png";



export default function UploadScreen({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  };

  return (
    <ImageBackground source={Dorji} style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      
   
        <View  style={styles.buttonContainer2} >
          <Button title="Take a picture" onPress={() => navigation.navigate('Scans')} icon="camera"  />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title ="Upload an image "onPress={pickImageAsync} icon="image" />
        </View>
      
      
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
 


  buttonContainer: {
    width: 200,
    height: 200,
    marginHorizontal: 20,
    borderRadius:350,
    marginTop:40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    opacity:0.75
  },
  buttonContainer2: {
    width: 200,
    height: 200,
    marginHorizontal: 20,
    borderRadius:100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
    opacity:0.75

  },
});