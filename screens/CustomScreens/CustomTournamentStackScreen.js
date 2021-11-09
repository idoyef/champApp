import React, {useState} from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomTournamentTypeScreen} from './CustomTournamentTypeScreen';
import {CustomTournamentNameScreen} from './CustomTournamentNameScreen';
import {CustomTournamentInviteFriendsScreen} from './CustomTournamentInviteFriendsScreen';
import {CustomTournamentMatchesScreen} from './CustomTournamentMatchesScreen';
import {CustomBuiltInTournamentScreen} from './CustomBuiltInTournamentScreen';

const CustomTournamentStackNavigator = createNativeStackNavigator();

export function CustomTournamentStackScreen() {
  return (
    <CustomTournamentStackNavigator.Navigator
      initialRouteName={'CustomTournamentType'}>
      <CustomTournamentStackNavigator.Screen
        options={{
          title: 'Back',
          headerTitleStyle: {fontSize: 18},
          // headerRight: () => (
          //   <Button
          //     onPress={() => alert('This is a button!')}
          //     title="Next"
          //     color="#035690"
          //   />
          // ),
        }}
        name="CustomTournamentType"
        component={CustomTournamentTypeScreen}
      />
      <CustomTournamentStackNavigator.Screen
        options={{
          title: 'Back',
          headerTitleStyle: {fontSize: 18},
        }}
        name="CustomTournamentName"
        component={CustomTournamentNameScreen}
      />
      <CustomTournamentStackNavigator.Screen
        options={{
          title: 'Back',
          headerTitleStyle: {fontSize: 18},
        }}
        name="CustomTournamentInviteFriends"
        component={CustomTournamentInviteFriendsScreen}
      />
      <CustomTournamentStackNavigator.Screen
        options={{
          title: 'Back',
          headerTitleStyle: {fontSize: 18},
        }}
        name="CustomTournamentMatches"
        component={CustomTournamentMatchesScreen}
      />
      <CustomTournamentStackNavigator.Screen
        options={{
          title: 'Back',
          headerTitleStyle: {fontSize: 18},
        }}
        name="CustomBuiltInTournament"
        component={CustomBuiltInTournamentScreen}
      />
    </CustomTournamentStackNavigator.Navigator>
  );
}
