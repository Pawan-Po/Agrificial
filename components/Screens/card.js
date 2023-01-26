import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.cardTitle}>{props.title}</Text>
      <Text style={styles.cardDescription}>{props.description}</Text>
      <Image source={props.image} style={styles.cardImage} resizeMode="contain" />
    </View>
  );
};

const styles = {
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    backgroundColor: '#B3D2B7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 70,
    width: 350,
    height:150,
    alignSelf: 'center',
    overflow:'hidden'
  },
  cardImage: {
    width: '50%',
    height: '100%',
    flex: 0.5,
    padding:40,
    marginTop: -60,
    marginLeft: 200, 
    alignSelf: 'center',
    margin: 5,
    borderRadius: 5,  
  },
  cardTitle: {
    fontSize: 20,
    margin: 5,
    color: '#686963',
    fontWeight:'bold',
    paddingTop: 10,
    paddingLeft:10,
  },
  cardDescription: {
    fontSize: 15,
    margin: 5,
    color: '#4E937A',
    paddingTop: 10,
    paddingLeft:10, 
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

