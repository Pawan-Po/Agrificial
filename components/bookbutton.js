import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Button ({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Entypo name={icon} size={35} color={color ? color : '#000000'} style={{paddingLeft:360}}/>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    
  );
}
const styles = StyleSheet.create({
    button: {
        height:50,
    },
    
});