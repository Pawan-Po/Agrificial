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

import { View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import Button from './ButtonUpload';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import Scans from './Camera0';



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
    <View style={styles.container}>
   
        <View  style={styles.buttonContainer2} >
          <Button title="Take a picture" onPress={() => navigation.navigate('Scans')} icon="camera"  />
        </View>
        
        <View style={styles.buttonContainer}>
          <Button title ="Upload an image "onPress={pickImageAsync} icon="image" />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 8,
  
  },

  buttonContainer: {
    width: 355,
    height: 150,
    marginHorizontal: 20,
    borderRadius:20,
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
  buttonContainer2: {
    width: 355,
    height: 150,
    marginHorizontal: 20,
    borderRadius:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'black',
  },
});