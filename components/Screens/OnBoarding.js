import React, { useState, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import AIcon from "react-native-vector-icons/AntDesign";
import logo from "../../assets/icon.png";
import slideBg from "../../assets/SliderBackground.png";

import {
  View,
  Image,
  StyleSheet,
  Animated,
  useWindowDimensions,
  FlatList,
  ImageBackground,
} from "react-native";
import { Button } from "@rneui/themed";
import slides from "../slides";
import OnBoardItem from "./OnBoardingItem";

export default OnBoarding = ({ walk, setWalk }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [skip, setSkip] = useState(true);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
    

  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      setBack(true);
      if (currentIndex == slides.length-2) {
        setSkip(false);
      }
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
    if(!skip){
        setWalk(!walk);
    }
  };
  const scrollFrom = () => {
    if (currentIndex > 0) {
      if (currentIndex == 1) {
        setBack(false);
      }
      setSkip(true);

      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    }
  };

  return (
    <ImageBackground
      source={slideBg}
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <View style={[style.container, { height: "90%" }]}>
        <View
          style={{
            height: "10%",
            width: "100%",
            flexDirection: "row",
            marginTop: 50,
            marginBottom: 20,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {back && (
            <Button
              type="clear"
              buttonStyle={{ color: "#111111" }}
              color="black"
              title=""
              onPress={scrollFrom}
              icon={<AIcon name="leftcircleo" size={25} />}
            />
          )}
          <Image source={logo} style={{ height: 150, width: 150 }} />
          <Button
            title={skip ? "Skip" : " "}
            titleStyle={{ color: "#111111" }}
            onPress={() => {
              setWalk(!walk);
            }}
            type="clear"
          />
        </View>
        <View style={{ flex: 3 }}>
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnBoardItem Item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            height: "20%",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Paginator data={slides} scrollX={scrollX} />
          <NextButton scrollTo={scrollTo} bool={skip}/>
        </View>
      </View>
    </ImageBackground>
  );
};
const Paginator = ({ data, scrollX }) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: "row",
        height: "auto",
        justifyContent: "flex-start",
      }}
    >
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[style.dot, { width: dotWidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const NextButton = ({ scrollTo, bool,setWalk,walk }) => {
  return (
    <View>
      <Button
        title={bool ? "Next  " : "Get Started  "}
        onPress={scrollTo}
        iconRight
        icon={<Icon name="arrow-right" size={15} color="#fff" />}
        buttonStyle={{
          borderRadius: 10,
          width: 'auto',
          backgroundColor: "#1Dadb6",
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1Dadb6",
    marginHorizontal: 8,
  },
});
