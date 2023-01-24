import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardDescription}>{props.description}</Text>
      <Image source={props.image} style={styles.cardImage} resizeMode="contain" />
      {/* <TouchableOpacity style={styles.cardButton} onPress={props.onPress}>
        <Text style={styles.cardButtonText}>{props.buttonText}</Text>
      </TouchableOpacity> */}
      
    </View>
  );
};

const styles = {
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#212121',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
   
    marginTop: 50,
    width: 350,
    alignSelf: 'center',
    overflow:'hidden'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    flex: 0.5,
    padding:40,
    marginTop: -40,
    marginLeft: 200, 
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,  
    
  },
  cardTitle: {
    fontSize: 18,
    margin: 5,
    color: '#fff',
  },
  cardDescription: {
    fontSize: 14,
    margin: 5,
    color: '#fff',
    paddingTop: 10, 
  },
  cardButton: {
    backgroundColor: '#0288D1',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    margin: 5,
  },
  cardButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

export default Card;

