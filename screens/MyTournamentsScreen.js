import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import TournamentInMotionCard from '../Components/tournaments/tournamentInMotionCard';
import {tournamentType} from '../enum/TournamentType';

const myTournamentCardsMock = [
  {
    id: '1',
    name: 'Ultras',
    type: tournamentType.Custom,
    participantsNumber: 6,
    currentPosition: 3,
  },
  {
    id: '2',
    name: 'Premier League',
    type: tournamentType.System,
    participantsNumber: 12598,
    currentPosition: 1758,
  },
  {
    id: '3',
    name: 'Dual - Barcelona VS Real Madrid',
    type: tournamentType.Dual,
    participantsNumber: 2,
    currentPosition: 1,
  },
];

export function MyTournamentsScreen({navigation, route}) {
  const newTournament = route?.params?.newTournament;

  const [expanded, setExpanded] = useState(false);
  const [myTournaments, setMyTournaments] = useState(myTournamentCardsMock);

  useEffect(() => {
    if (!newTournament) return;

    setMyTournaments([
      ...myTournaments,
      {
        // return from server after saving new tournament
        id: '4',
        name: newTournament.name,
        participantsNumber: newTournament.friends?.length ?? 0,
        currentPosition: 0,
        type: tournamentType.Custom,
      },
    ]);
    console.log('newTournamentChanged: ', newTournament);
  }, [newTournament]);

  const expandAddPopup = () => {
    setExpanded(!expanded);
  };

  const navigateTo = screenName => {
    navigation.navigate(screenName);
    setExpanded(false);
  };

  const hidePopup = () => {
    setExpanded(false);
  };

  const renderTournamentCard = ({item}) => (
    <TournamentInMotionCard data={item} />
  );

  return (
    <TouchableHighlight onPress={hidePopup}>
      <View style={styles.tournamentScreenContainer}>
        <View>
          <FlatList
            onPress={() => selectMatch(item)}
            data={myTournaments}
            renderItem={renderTournamentCard}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.addTournamentContainer}>
          {expanded ? (
            <View style={styles.expandedPopUp}>
              <TouchableOpacity
                onPress={() => navigateTo('CustomTournamentStack')}
                style={styles.customButton}>
                <Text style={styles.customButtonText}>
                  {'Custom Tournament'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigateTo('ChampTournaments')}
                style={styles.customButton}>
                <Text style={styles.customButtonText}>
                  {'Champ Tournaments'}
                </Text>
              </TouchableOpacity>
            </View>
          ) : undefined}

          <TouchableOpacity onPress={expandAddPopup} style={styles.roundButton}>
            <Text style={styles.plusButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tournamentScreenContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    height: '100%',
  },
  addTournamentContainer: {
    alignSelf: 'flex-end',
    marginTop: 'auto',
    marginRight: 10,
    marginBottom: 20,
    width: 195,
    height: 140,
  },
  expandedPopUp: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 150,
    height: 90,
  },
  roundButton: {
    bottom: 0,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 100,
    backgroundColor: '#2f2f2f',
    marginTop: 'auto',
  },
  plusButton: {
    fontSize: 25,
  },
  customButton: {
    height: 30,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  customButtonText: {
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
