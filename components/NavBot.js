import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



// Screens
import HomeScreen from './Screens/HomeScreen';
import UploadScreen from './Screens/UploadScreen';
import TipsFAQ from './Screens/TipsFAQ';
import Profile_1 from './Screens/Profile'
import Camera0 from './Screens/Camera0';
import Doughnut from './Screens/Doughnut';
import CropRecommendation1 from './Screens/CropRecommendation';
import UserProfile from './Screens/UserProfile';
import Contact_1 from './Screens/contact';






//Screen names
const homeName = "Home";
const UploadName = "Upload";
const Profile = "Profile";
const TipsandFAQ = "TipsFAQ";
const samera0 = "Scans";
const doughnut = "Doughnut";
const CropRecommendation_1="CropRecommendation";
const UserProfile_1="UserProfile";
const Contact ="contact";



const Tab = createBottomTabNavigator();

function NavBot() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={homeName}
            screenOptions={({ route }) => ({
              tabBarActiveTintColor: '#75AE7C',
              tabBarInactiveTintColor: 'black',
              tabBarLabelStyle:{fontSize:12},
              tabBarStyle: {padding:10, height:80,},
            tabBarIcon: ({ focused, color}) => {
              let iconName;
              let rn = route.name;
  
              if (rn === homeName) {
                iconName = focused ? 'home' : 'home-outline';
  
              } else if (rn === UploadName) {
                iconName = focused ? 'scan' : 'scan-outline';

              } else if (rn === TipsandFAQ) {
                iconName = focused ? 'help-circle' : 'help-circle-outline';
  
              } else if (rn === Profile) {
                iconName = focused ? 'person' : 'person-outline';
              }
              
              return <Ionicons name={iconName} size={26} color={color} />;
              
            },          
          })}>
  
          <Tab.Screen name={homeName} component={HomeScreen} options={{headerShown:false}}/>
          <Tab.Screen name={UploadName} component={UploadScreen} options={{headerShown:false}}/>
          <Tab.Screen name={TipsandFAQ} component={TipsFAQ} options={{headerShown:false}}/> 
          <Tab.Screen name={Profile} component={Profile_1} options={{headerShown:false}}/>
          <Tab.Screen name={doughnut} component={Doughnut} options={{headerShown:false,
          tabBarButton: () => null,
          tabBarVisible: false,}} />
          <Tab.Screen name={CropRecommendation_1} component={CropRecommendation1} options={{headerShown:false,
          tabBarButton: () => null,
          tabBarVisible: false,}} />
          <Tab.Screen name ={samera0} component={Camera0} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            headerShown:false,}}
    />
          <Tab.Screen name ={Contact} component={Contact_1} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            headerShown:false,}}/>
          <Tab.Screen name ={UserProfile_1} component={UserProfile} options={{
            tabBarButton: () => null,
            tabBarVisible: false,
            headerShown:false,}}/>
          
        </Tab.Navigator>
        
      </NavigationContainer>
    );
  }
  
  export default NavBot;