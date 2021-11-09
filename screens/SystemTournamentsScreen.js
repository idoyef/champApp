import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import SystemTournamentCard from '../Components/tournaments/systemTournamentCard';

const systemTournamentCardsMock = [
  {
    id: '1',
    name: 'Premier League - Season',
    participantsNumber: 12598,
    startDate: new Date(),
  },
  {
    id: '2',
    name: 'La Liga - Weekend Matches',
    participantsNumber: 1485,
    startDate: new Date(new Date().getDate() + 1000000000000),
  },
];

export function SystemTournamentsScreen() {
  const renderItem = ({item}) => <SystemTournamentCard data={item} />;

  return (
    <View style={styles.tournamentScreenContainer}>
      <FlatList
        data={systemTournamentCardsMock}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    height: '100%',
  },
});
