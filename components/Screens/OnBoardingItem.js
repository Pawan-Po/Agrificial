import React from "react";
import {View, Text, StyleSheet, Image, useWindowDimensions} from "react-native"

const OnBoardingItem = ({Item}) => {
    const {width} = useWindowDimensions();
    return (
        <View style={[styles.container, {width}]}>
            <Image source={Item.image} style={[styles.image, { resizeMode:'contain'}]} />
            <View style={{flex:0.3}}>
                <Text style={styles.title}>{Item.title}</Text>
                <Text style={styles.description}>{Item.description}</Text>

            </View>
        </View>
    );
}

export default OnBoardingItem;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems:'center',
        height:'90%'
    },
    title: {
        fontWeight: '800',
        width:250,
        
        fontSize: 20,
        marginBottom: 10,
        color: '#111111',
        textAlign: 'left',
    },
    description:{
        width:250,
        fontWeight: '300',
        color: '#1DADB6',
        textAlign: 'left',
    },
});