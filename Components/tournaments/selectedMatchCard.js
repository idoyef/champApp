import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SelectedMatchCard = ({
  match: {id, homeTeam, awayTeam, time, startTime},
  removeMatch,
  onClick,
}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        if (!onClick) return;
        onClick({id, homeTeam, awayTeam, status, time});
      }}>
      <View style={styles.matchContainer}>
        <View style={styles.homeTeamContainer}>
          <Text style={[styles.whiteText, styles.homeTeamText]}>
            {homeTeam.name}
          </Text>
          <Image source={homeTeam.icon} style={styles.teamImage} />
        </View>

        <View style={styles.matchTimeContainer}>
          <Text style={{color: '#fff'}}>
            {startTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              timeStyle: 'short',
            })}
          </Text>
        </View>

        <View style={styles.awayTeamContainer}>
          <Image source={awayTeam.icon} style={styles.teamImage} />
          <Text style={[styles.whiteText, styles.awayTeamText]}>
            {awayTeam.name}
          </Text>

          <TouchableOpacity
            style={{justifyContent: 'flex-end'}}
            onPress={() => removeMatch(id)}>
            <Icon name="trash" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  matchContainer: {
    backgroundColor: '#121212',
    height: 50,
    marginVertical: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  matchStatus: {
    position: 'absolute',
    left: 5,
    fontSize: 10,
  },
  teamImage: {width: 20, height: 20},
  homeTeamContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  homeTeamText: {paddingRight: 5},
  matchTimeContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  homeScoreText: {paddingLeft: 20, paddingRight: 10},
  awayScoreText: {paddingLeft: 10, paddingRight: 20},
  awayTeamContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  awayTeamText: {paddingLeft: 5},
  awayTeamImage: {width: 20, height: 20},
});

export default SelectedMatchCard;
