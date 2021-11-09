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

const matchesMock = [
  {
    id: '1',
    name: 'Match 1',
  },
  {
    id: '2',
    name: 'Match 2',
  },
  {
    id: '3',
    name: 'Match 3',
  },
  {
    id: '4',
    name: 'Match 4',
  },
];

const checkMark = require('../../icons/check-mark-blue.png');

export function CustomTournamentMatchesScreen({navigation, route}) {
  const flow = route?.params.flow;

  const [matchesOptions, setMatchesOptions] = useState(matchesMock);
  const [selectedMatches, setSelectedMatches] = useState([]);

  const findMatches = text => {
    const matches = matchesMock.filter(match =>
      match.name.toLowerCase().includes(text.toLowerCase()),
    );
    setMatchesOptions(matches);
  };

  const selectMatch = match => {
    // handle matchesOptions
    const clickedMatchIndex = matchesOptions.findIndex(
      item => item.id === match.id,
    );
    const matchesOptionsCopy = [...matchesOptions];
    const clickedMatchCopy = {...matchesOptions[clickedMatchIndex]};
    clickedMatchCopy.checked = !clickedMatchCopy.checked;
    matchesOptionsCopy[clickedMatchIndex] = clickedMatchCopy;

    setMatchesOptions(matchesOptionsCopy);

    // handle selectedMatches
    if (clickedMatchCopy.checked) {
      setSelectedMatches([...selectedMatches, clickedMatchCopy]);
    } else {
      const selectMatchIndex = selectedMatches.findIndex(
        item => item.id === match.id,
      );
      const selectedMatchesCopy = [...selectedMatches];
      selectedMatchesCopy.splice(selectMatchIndex, 1);
      setSelectedMatches(selectedMatchesCopy);
    }
  };

  const getMatchContainerItem = item => (
    <TouchableOpacity
      key={item.id}
      onPress={() => selectMatch(item)}
      style={styles.matchContainer}>
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
    return !item.checked ? getMatchContainerItem(item) : null;
  };

  const renderSelectedItem = ({item}) => getMatchContainerItem(item);

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const onLaterSubmit = () => {
    setSelectedMatches([]);
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();
    navigation.navigate(nextScreen, {flow: flowCopy});
  };

  return (
    <View>
      <View style={styles.matchesInputContainer}>
        <View style={styles.matchesInput}>
          <TextInput
            onChangeText={textEntry => {
              findMatches(textEntry);
            }}
            placeholder={'Find Match'}
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
        {selectedMatches.length ? (
          <FlatList
            onPress={() => selectMatch(item)}
            data={selectedMatches}
            renderItem={renderSelectedItem}
            keyExtractor={item => item.id}
          />
        ) : null}
        {matchesOptions.length ? (
          <FlatList
            onPress={() => selectMatch(item)}
            data={matchesOptions}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  matchesInputContainer: {
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
  matchesInput: {
    flex: 4,
  },
  matchContainer: {
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
