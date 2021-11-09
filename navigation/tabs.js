import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {MyTournamentsScreen} from '../screens/MyTournamentsScreen';
import {SystemTournamentsScreen} from '../screens/SystemTournamentsScreen';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {MyTournamentsStackScreen} from '../screens/MyTournamentsStackScreen';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Tournaments"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#121212',
          borderTopWidth: 1,
          borderTopColor: '#000',
        },
        tabBarActiveTintColor: '#528AAE',
      }}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        tabBarShowLabel={false}
        component={HomeScreen}
        // options={{
        //   tabBarLabel: 'Home',
        //   tabBarIcon: ({color, size}) => (
        //     <MaterialCommunityIcons name="home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Champ Tournaments"
        component={SystemTournamentsScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="My Tournaments"
        component={MyTournamentsStackScreen}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
