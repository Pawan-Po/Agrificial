import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/HomeScreen';
import UploadScreen from './Screens/UploadScreen';
import TipsFAQ from './Screens/TipsFAQ';
import ProfileScreen from './Screens/ProfileScreen';


//Screen names
const homeName = "Home";
const UploadName = "Upload";
const ProfileName = "Profile";
const TipsandFAQ = "TipsFAQ";

const Tab = createBottomTabNavigator();

function NavBot() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === UploadName) {
                iconName = focused ? 'scan' : 'scan-outline';

              } else if (rn === TipsandFAQ) {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
  
              } else if (rn === ProfileName) {
                iconName = focused ? 'person' : 'person-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={32} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 2, fontSize: 10 },
            style: { padding: 10, height: 50}
          }}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={UploadName} component={UploadScreen} />
          <Tab.Screen name={TipsandFAQ} component={TipsFAQ}/> 
          <Tab.Screen name={ProfileName} component={ProfileScreen} />
          
  
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  
  export default NavBot;