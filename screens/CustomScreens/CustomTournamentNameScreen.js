import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

export function CustomTournamentNameScreen({navigation, route}) {
  const [selectedTournamentName, setSelectedTournamentName] =
    useState(undefined);

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flow = route?.params.flow;
    const newTournament = route?.params.newTournament;

    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();
    navigation.navigate(nextScreen, {
      flow: flowCopy,
      newTournament: {...newTournament, name: selectedTournamentName},
    });
  };

  return (
    <View style={styles.nameInputContainer}>
      <View style={styles.nameInput}>
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
  nameInputContainer: {
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
  },
  nameInput: {flex: 4},
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
});
