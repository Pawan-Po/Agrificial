import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';


export default function Button({ title, onPress, icon, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <FontAwesome name={icon} size={53} color={color ? color : 'black'} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    padding:10,
  
  },
  
});