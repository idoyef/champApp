import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MyTournamentsScreen} from './MyTournamentsScreen';
import {CustomTournamentTypeScreen} from './CustomScreens/CustomTournamentTypeScreen';
import {CustomTournamentStackScreen} from './CustomScreens/CustomTournamentStackScreen';

const MyTournamentsStackNavigator = createNativeStackNavigator();

export function MyTournamentsStackScreen() {
  return (
    <MyTournamentsStackNavigator.Navigator initialRouteName={'MyTournaments'}>
      <MyTournamentsStackNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="MyTournaments"
        component={MyTournamentsScreen}
      />
      <MyTournamentsStackNavigator.Screen
        options={{
          headerShown: false,
        }}
        name="CustomTournamentStack"
        component={CustomTournamentStackScreen}
      />
    </MyTournamentsStackNavigator.Navigator>
  );
}
