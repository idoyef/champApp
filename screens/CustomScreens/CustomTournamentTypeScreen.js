import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {tournamentType} from '../../enum/TournamentType';

const NUM_COLUMNS = 2;

const customTournamentType = {
  firstToScore: 'First To Score',
  batchOfMatches: 'Batch Of Matches',
  singleMatch: 'Single Match',
  builtIn: 'Built it',
};

const flowByType = {
  firstToScore: [
    'CustomTournamentName',
    'CustomTournamentInviteFriends',
    'CustomTournamentMatches',
    'MyTournaments',
  ],
  batchOfMatches: [
    'CustomTournamentName',
    'CustomTournamentInviteFriends',
    'CustomTournamentMatches',
    'MyTournaments',
  ],
  singleMatch: [
    'CustomTournamentName',
    'CustomTournamentInviteFriends',
    'CustomTournamentMatches',
    'MyTournaments',
  ],
  builtIn: [
    'CustomTournamentName',
    'CustomTournamentInviteFriends',
    'CustomBuiltInTournament',
    'MyTournaments',
  ],
};

export function CustomTournamentTypeScreen({navigation}) {
  const types = Object.keys(customTournamentType);
  const [selectedTournamentType, setSelectedTournamentType] = useState();

  const onTypeClicked = type => {
    setSelectedTournamentType(type);

    const flow = [...flowByType[type]];
    const nextScreen = flow.shift();
    navigation.navigate(nextScreen, {flow});
  };

  const renderTypeButton = ({item}) => (
    <TouchableOpacity
      onPress={() => onTypeClicked(item)}
      style={[
        styles.roundButton,
        selectedTournamentType === item && {backgroundColor: '#734d9f'},
      ]}>
      <Text style={styles.buttonText}>{customTournamentType[item]}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.tournamentTypeButtonsContainer}>
      <FlatList
        numColumns={NUM_COLUMNS}
        columnWrapperStyle={styles.row}
        data={types}
        renderItem={renderTypeButton}
        keyExtractor={item => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentTypeButtonsContainer: {
    marginTop: 20,
  },
  row: {
    flex: 1,
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  roundButton: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#2f2f2f',
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});
