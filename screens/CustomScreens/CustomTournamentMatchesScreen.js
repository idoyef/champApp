import React, {useState, useCallback} from 'react';
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
import {futureScoreGroupsMock} from '../../Components/scoreCards/mocks/scoresMock';
import SelectedMatchCard from '../../Components/tournaments/selectedMatchCard';
import {matchStatus} from '../../enum/MatchStatus';
import {tournamentType} from '../../enum/TournamentType';
import {currentTournaments} from '../../mocks/tournaments/tournaments';
import {ScoreCardGroupContainer} from '../ScoreCardGroupContainer';

// const futureMatchesMock = scoreGroupsMock.map(scoreGroup => {
//   console.log('scoreGroup**********', scoreGroup);
//   return scoreGroup.groups.map(group => {
//     console.log('group**********', group);

//     return group.scores.filter(score => {
//       console.log('score.status&&&&&&', score.status);
//       return score.status === 'NotStarted';
//     });
//   });
// });
// console.log('futureMatchesMock', futureMatchesMock);

const checkMark = require('../../icons/check-mark-blue.png');

export function CustomTournamentMatchesScreen({navigation, route}) {
  console.log('*****Matches*****');

  const [selectedMatches, setSelectedMatches] = useState([]);

  const handleMatchClicked = useCallback(
    item => {
      const matchIndex = selectedMatches.findIndex(
        match => match.id === item.id,
      );
      if (matchIndex === -1) {
        setSelectedMatches([...selectedMatches, item]);
      } else {
        const selectedMatchesCopy = [...selectedMatches];
        selectedMatchesCopy.splice(matchIndex, 1);
        setSelectedMatches(selectedMatchesCopy);
      }
    },
    [selectedMatches],
  );

  const removeSelectedMatch = useCallback(
    id => {
      console.log('iddddd', id);
      const matchIndex = selectedMatches.findIndex(match => match.id === id);
      if (matchIndex !== -1) {
        console.log('selectedMatchessssssss', selectedMatches);

        const selectedMatchesCopy = [...selectedMatches];
        selectedMatchesCopy.splice(matchIndex, 1);
        setSelectedMatches(selectedMatchesCopy);
      }
    },
    [selectedMatches],
  );

  const renderSelectedMatch = ({item}) => (
    <SelectedMatchCard match={item} removeMatch={removeSelectedMatch} />
  );

  const renderGroupContainerItem = ({item}) => (
    <ScoreCardGroupContainer
      scoreCardGroupData={item}
      onItemClicked={handleMatchClicked}
    />
  );

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const onLaterSubmit = () => {
    setSelectedMatches([]);
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flow = route?.params.flow;
    const newTournament = route?.params.newTournament;

    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();

    // remove checked
    const newTournamentMatches = selectedMatches.map(match => {
      const {checked, ...matchWithoutChecked} = match;
      return matchWithoutChecked;
    });

    navigation.navigate(nextScreen, {
      flow: flowCopy,
      newTournament: {...newTournament, matches: newTournamentMatches},
    });
  };

  return (
    <View style={styles.matchesContainer}>
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

      {selectedMatches.length ? (
        <>
          <View
            style={{
              height: 30,
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
              Your tournament matches (click to edit):
            </Text>
          </View>
          <FlatList
            data={selectedMatches}
            renderItem={renderSelectedMatch}
            keyExtractor={item => item.id}
          />
        </>
      ) : null}

      <View
        style={{
          height: 30,
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
          Click to add matches:
        </Text>
      </View>

      <FlatList
        onPress={() => {
          selectMatch(item);
        }}
        data={futureScoreGroupsMock}
        renderItem={renderGroupContainerItem}
        keyExtractor={item => item.id}
      />
    </View>
  );

  // // const [matchesOptions, setMatchesOptions] = useState(futureMatchesMock);
  // const [selectedMatches, setSelectedMatches] = useState([]);

  // // const findMatches = text => {
  // //   const matches = futureMatchesMock.filter(match =>
  // //     match.name.toLowerCase().includes(text.toLowerCase()),
  // //   );
  // //   setMatchesOptions(matches);
  // // };

  // const selectMatch = match => {
  //   // handle matchesOptions
  //   const clickedMatchIndex = matchesOptions.findIndex(
  //     item => item.id === match.id,
  //   );
  //   const matchesOptionsCopy = [...matchesOptions];
  //   const clickedMatchCopy = {...matchesOptions[clickedMatchIndex]};
  //   clickedMatchCopy.checked = !clickedMatchCopy.checked;
  //   matchesOptionsCopy[clickedMatchIndex] = clickedMatchCopy;

  //   setMatchesOptions(matchesOptionsCopy);

  //   // handle selectedMatches
  //   if (clickedMatchCopy.checked) {
  //     setSelectedMatches([...selectedMatches, clickedMatchCopy]);
  //   } else {
  //     const selectMatchIndex = selectedMatches.findIndex(
  //       item => item.id === match.id,
  //     );
  //     const selectedMatchesCopy = [...selectedMatches];
  //     selectedMatchesCopy.splice(selectMatchIndex, 1);
  //     setSelectedMatches(selectedMatchesCopy);
  //   }
  // };

  // const getMatchContainerItem = item => (
  //   <TouchableOpacity
  //     key={item.id}
  //     onPress={() => selectMatch(item)}
  //     style={styles.matchContainer}>
  //     <Image
  //       style={{marginRight: 10}}
  //       source={require('../../icons/user.png')}
  //     />
  //     <Text style={{fontSize: 15, flex: 2}}>{item.name}</Text>
  //     {item.checked ? (
  //       <Image style={{marginRight: 10}} source={checkMark} />
  //     ) : null}
  //   </TouchableOpacity>
  // );

  // const renderItem = ({item}) => {
  //   return !item.checked ? getMatchContainerItem(item) : null;
  // };

  // const renderSelectedItem = ({item}) => getMatchContainerItem(item);

  // const onSubmit = () => {
  //   navigateToNextScreen();
  // };

  // const onLaterSubmit = () => {
  //   setSelectedMatches([]);
  //   navigateToNextScreen();
  // };

  // const navigateToNextScreen = () => {
  //   const flow = route?.params.flow;
  //   const newTournament = route?.params.newTournament;

  //   const flowCopy = [...flow];
  //   const nextScreen = flowCopy.shift();

  //   // remove checked
  //   const newTournamentMatches = selectedMatches.map(match => {
  //     const {checked, ...matchWithoutChecked} = match;
  //     return matchWithoutChecked;
  //   });

  //   navigation.navigate(nextScreen, {
  //     flow: flowCopy,
  //     newTournament: {...newTournament, matches: newTournamentMatches},
  //   });
  // };

  // const renderGroupContainerItem = ({item}) => (
  //   <ScoreCardGroupContainer scoreCardGroupData={item} />
  // );

  // return (
  //   <View>
  // <View style={styles.matchesInputContainer}>
  //   <View style={styles.matchesInput}>
  //     <TextInput
  //       onChangeText={textEntry => {
  //         findMatches(textEntry);
  //       }}
  //       placeholder={'Find Match'}
  //       style={{backgroundColor: 'transparent'}}
  //     />
  //   </View>
  //   <View style={{flex: 1}}>
  //     <Button onPress={onSubmit} title="Submit" color="#035690" />
  //   </View>
  // </View>
  //     <View style={{marginBottom: 20}}>
  //       <Text
  //         onPress={onLaterSubmit}
  //         style={{
  //           fontSize: 16,
  //           color: 'blue',
  //           marginTop: 10,
  //           alignSelf: 'center',
  //         }}>
  //         {'Complete later'}
  //       </Text>
  //     </View>

  //     <View>
  //       {selectedMatches.length ? (
  //         <FlatList
  //           onPress={() => selectMatch(item)}
  //           data={selectedMatches}
  //           renderItem={renderSelectedItem}
  //           keyExtractor={item => item.id}
  //         />
  //       ) : null}
  //       {matchesOptions.length ? (
  //         <FlatList
  //           onPress={() => selectMatch(item)}
  //           data={futureScoreGroupsMock}
  //           renderItem={renderGroupContainerItem}
  //           keyExtractor={item => item.id}
  //         />
  //       ) : // <FlatList
  //       //   onPress={() => selectMatch(item)}
  //       //   data={matchesOptions}
  //       //   renderItem={renderItem}
  //       //   keyExtractor={item => item.id}
  //       // />
  //       null}
  //     </View>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  matchesContainer: {flex: 1, backgroundColor: '#000'},
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
