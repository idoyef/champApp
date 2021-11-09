import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import TournamentInMotionCard from '../../Components/tournaments/tournamentInMotionCard';
import {tournamentType} from '../../enum/TournamentType';
import {currentTournaments} from '../../mocks/tournaments/tournaments';

export function CustomTournamentNameScreen({navigation, route}) {
  const flow = route?.params.flow;
  const [selectedTournamentName, setSelectedTournamentName] =
    useState(undefined);

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();
    navigation.navigate(nextScreen, {flow: flowCopy});
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        width: window.width,
        margin: 10,
        padding: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: '#888',
        borderRadius: 10,
        backgroundColor: '#fff',
      }}>
      <View style={{flex: 4}}>
        <TextInput
          onChangeText={textEntry => {
            setSelectedTournamentName(textEntry);
          }}
          placeholder={'Tournament Name'}
          style={{backgroundColor: 'transparent'}}
        />
      </View>
      <View style={{flex: 1}}>
        <Button onPress={onSubmit} title="Submit" color="#035690" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tournamentTypeButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  roundButton: {
    bottom: 0,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    borderRadius: 100,
    backgroundColor: '#2f2f2f',
    marginTop: 'auto',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});
