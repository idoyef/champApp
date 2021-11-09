import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TournamentInMotionCard from '../../Components/tournaments/tournamentInMotionCard';
import {tournamentType} from '../../enum/TournamentType';
import {currentTournaments} from '../../mocks/tournaments/tournaments';

const builtInMock = [
  {
    id: '1',
    name: 'Tournament 1',
  },
  {
    id: '2',
    name: 'Tournament 2',
  },
  {
    id: '3',
    name: 'Tournament 3',
  },
  {
    id: '4',
    name: 'Tournament 4',
  },
];

const checkMark = require('../../icons/check-mark-blue.png');

export function CustomBuiltInTournamentScreen({navigation, route}) {
  const flow = route?.params.flow;

  const [builtInOptions, setBuiltInOptions] = useState(builtInMock);
  const [selectedBuiltIn, setSelectedBuiltIn] = useState([]);

  const findBuiltIns = text => {
    const builtIns = builtInMock.filter(builtIn =>
      builtIn.name.toLowerCase().includes(text.toLowerCase()),
    );
    setBuiltInOptions(builtIns);
  };

  const selectBuiltIn = builtIn => {
    // handle builtInsOptions
    const clickedBuiltInIndex = builtInOptions.findIndex(
      item => item.id === builtIn.id,
    );
    const builtInsOptionsCopy = [...builtInOptions];
    const clickedBuiltInCopy = {...builtInOptions[clickedBuiltInIndex]};
    clickedBuiltInCopy.checked = !clickedBuiltInCopy.checked;
    builtInsOptionsCopy[clickedBuiltInIndex] = clickedBuiltInCopy;

    setBuiltInOptions(builtInsOptionsCopy);

    // handle selectedBuiltIns
    if (clickedBuiltInCopy.checked) {
      setSelectedBuiltIn([...selectedBuiltIn, clickedBuiltInCopy]);
    } else {
      const selectBuiltInIndex = selectedBuiltIn.findIndex(
        item => item.id === builtIn.id,
      );
      const selectedBuiltInsCopy = [...selectedBuiltIn];
      selectedBuiltInsCopy.splice(selectBuiltInIndex, 1);
      setSelectedBuiltIn(selectedBuiltInsCopy);
    }
  };

  const getBuiltInContainerItem = item => (
    <TouchableOpacity
      key={item.id}
      onPress={() => selectBuiltIn(item)}
      style={styles.builtInContainer}>
      <Image
        style={{marginRight: 10}}
        source={require('../../icons/user.png')}
      />
      <Text style={{fontSize: 15, flex: 2}}>{item.name}</Text>
      {item.checked ? (
        <Image style={{marginRight: 10}} source={checkMark} />
      ) : null}
    </TouchableOpacity>
  );

  const renderItem = ({item}) => {
    return !item.checked ? getBuiltInContainerItem(item) : null;
  };

  const renderSelectedItem = ({item}) => getBuiltInContainerItem(item);

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const onLaterSubmit = () => {
    setSelectedBuiltIn([]);
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();
    navigation.navigate(nextScreen, {flow: flowCopy});
  };

  return (
    <View>
      <View style={styles.builtInsInputContainer}>
        <View style={styles.builtInsInput}>
          <TextInput
            onChangeText={textEntry => {
              findBuiltIns(textEntry);
            }}
            placeholder={'Find Tournament'}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
        <View style={{flex: 1}}>
          <Button onPress={onSubmit} title="Submit" color="#035690" />
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <Text
          onPress={onLaterSubmit}
          style={{
            fontSize: 16,
            color: 'blue',
            marginTop: 10,
            alignSelf: 'center',
          }}>
          {'Complete later'}
        </Text>
      </View>

      <View>
        {selectedBuiltIn.length ? (
          <FlatList
            onPress={() => selectBuiltIn(item)}
            data={selectedBuiltIn}
            renderItem={renderSelectedItem}
            keyExtractor={item => item.id}
          />
        ) : null}
        {builtInOptions.length ? (
          <FlatList
            onPress={() => selectBuiltIn(item)}
            data={builtInOptions}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  builtInsInputContainer: {
    flexDirection: 'row',
    margin: 10,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#888',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  builtInsInput: {
    flex: 4,
  },
  builtInContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    marginLeft: 15,
    paddingLeft: 10,
    marginBottom: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});
