 import React, {useState,useRef} from "react";
 import {View, Text, StyleSheet,Animated ,useWindowDimensions,FlatList} from "react-native";
import slides from '../slides';
import OnBoardItem from './OnBoardingItem';

 export default OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemChanged = useRef(({ viewableItems}) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
    
    return (
        <View style={style.container}>
            <View style={{flex:3}}>
            <FlatList 
            data={slides} 
            renderItem={({item}) => <OnBoardItem Item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
                useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
            </View>
            <Paginator data={slides} scrollX={scrollX}/>
        </View>
    );
 }
 const Paginator = ({data,scrollX}) => {
    const {width} = useWindowDimensions();
    return(
        <View style={{flexDirection:'row',height:64}}>
            {data.map((_,i)=>{
                const inputRange=[(i-1)*width,i*width,(i+1)*width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange:[10,20,10],
                    extrapolate:'clamp',
                });
                return (<Animated.View style={[style.dot,{width: dotWidth}]} key={i.toString()}/>);
            })}
        </View>
    );
 }
 const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    dot:{height:10, borderRadius:5, backgroundColor:'#493d8a', marginHorizontal:8}
 });
