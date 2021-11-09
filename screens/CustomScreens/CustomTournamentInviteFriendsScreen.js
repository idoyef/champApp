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

const friendsMock = [
  {
    id: '1',
    name: 'Or Levy Yeffet',
  },
  {
    id: '2',
    name: 'Yuval Yeffet',
  },
  {
    id: '3',
    name: 'Roni Mana',
  },
  {
    id: '4',
    name: 'Bibi Netanyau',
  },
];

const checkMark = require('../../icons/check-mark-blue.png');

export function CustomTournamentInviteFriendsScreen({navigation, route}) {
  const flow = route?.params.flow;

  const [friendsOptions, setFriendsOptions] = useState(friendsMock);
  const [selectedFriends, setSelectedFriends] = useState([]);

  const findFriends = text => {
    const friends = friendsMock.filter(friend =>
      friend.name.toLowerCase().includes(text.toLowerCase()),
    );
    setFriendsOptions(friends);
  };

  const selectFriend = friend => {
    // handle friendsOptions
    const clickedFriendIndex = friendsOptions.findIndex(
      item => item.id === friend.id,
    );
    const friendsOptionsCopy = [...friendsOptions];
    const clickedFriendCopy = {...friendsOptions[clickedFriendIndex]};
    clickedFriendCopy.checked = !clickedFriendCopy.checked;
    friendsOptionsCopy[clickedFriendIndex] = clickedFriendCopy;

    setFriendsOptions(friendsOptionsCopy);

    // handle selectedFriends
    if (clickedFriendCopy.checked) {
      setSelectedFriends([...selectedFriends, clickedFriendCopy]);
    } else {
      const selectFriendIndex = selectedFriends.findIndex(
        item => item.id === friend.id,
      );
      const selectedFriendsCopy = [...selectedFriends];
      selectedFriendsCopy.splice(selectFriendIndex, 1);
      setSelectedFriends(selectedFriendsCopy);
    }
  };

  const getFriendContainerItem = item => (
    <TouchableOpacity
      key={item.id}
      onPress={() => selectFriend(item)}
      style={styles.friendContainer}>
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
    return !item.checked ? getFriendContainerItem(item) : null;
  };

  const renderSelectedItem = ({item}) => getFriendContainerItem(item);

  const onSubmit = () => {
    navigateToNextScreen();
  };

  const onLaterSubmit = () => {
    setSelectedFriends([]);
    navigateToNextScreen();
  };

  const navigateToNextScreen = () => {
    const flowCopy = [...flow];
    const nextScreen = flowCopy.shift();
    navigation.navigate(nextScreen, {flow: flowCopy});
  };

  return (
    <View>
      <View style={styles.inviteFriendsInputContainer}>
        <View style={styles.inviteFriendsInput}>
          <TextInput
            onChangeText={textEntry => {
              findFriends(textEntry);
            }}
            placeholder={'Find Friends'}
            style={{backgroundColor: 'transparent'}}
          />
        </View>
        <View style={{flex: 1}}>
          <Button onPress={onSubmit} title="Submit" color="#035690" />
        </View>
      </View>
      <View style={{marginBottom: 20}}>
        <Text onPress={onLaterSubmit} style={styles.onLaterSubmitLink}>
          {'Complete later'}
        </Text>
      </View>

      <View>
        {selectedFriends.length ? (
          <FlatList
            onPress={() => selectFriend(item)}
            data={selectedFriends}
            renderItem={renderSelectedItem}
            keyExtractor={item => item.id}
          />
        ) : null}
        {friendsOptions.length ? (
          <FlatList
            onPress={() => selectFriend(item)}
            data={friendsOptions}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inviteFriendsInputContainer: {
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
  inviteFriendsInput: {
    flex: 4,
  },
  friendContainer: {
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
  onLaterSubmitLink: {
    fontSize: 16,
    color: 'blue',
    marginTop: 10,
    alignSelf: 'center',
  },
});
