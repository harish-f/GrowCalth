import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Run from './screens/Run';
// import Home from './screens/Home';
import Challenges from './screens/Challenges';
import Settings from './screens/Settings'
import Workouts from './screens/Workouts';
import {Image} from 'react-native';
import Insights from './screens/Insights';
import Stacks from './screens/Home';
import { Stackz } from './screens/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import Announcements from './screens/Announcements';
import Forgot from './screens/AuthScreens/Forgot';
import { app, storage} from "./firebase";

function HomeScreen() {
  return(
    <Stacks />
  )
}
function WorkoutsScreen() {
  return (
    <Workouts />
  );
}
function SettingsScreen() {
  return (
    <Stackz />
    );
}
function RunScreen() {
  return (
      <Run />
  );
}
function ChallengesScreen() {
  return (
    <Challenges />
  );
}
function AnnouncementsScreen() {
  return (
    <Announcements />
  );
}
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Tab" component={Tabs} />
        <Stack.Screen name="Forgot Password" component={Forgot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function Tabs() {
  return (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("./assets/HomeIcon.png")} style={{ width: 30, height: 30 }} />)
          }} />
    <Tab.Screen
          name="Announcements"
          component={AnnouncementsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("./assets/announcement-icon.png")} style={{ width: 29, height: 29 }} />)
          }}
        />
    <Tab.Screen
          name="Challenges"
          component={ChallengesScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("./assets/ChallengeIcon.png")} style={{ width: 29, height: 29 }} />)
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("./assets/SettingsIcon.jpeg")} style={{ width: 25, height: 25 }} />)
          }}
        />
      </Tab.Navigator>
  )
}
