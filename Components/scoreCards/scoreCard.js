import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import {matchStatus} from '../../enum/MatchStatus';

const getStatusToDisplay = (status, time) => {
  switch (status) {
    case matchStatus.HalfTime:
      return 'Half Time';
      break;
    case matchStatus.Final:
      return 'Final';
      break;
    case matchStatus.Started:
      return time;
      break;
    default:
      break;
  }
};

const ScoreCard = ({
  match: {id, homeTeam, awayTeam, status, time, startTime},
  onClick,
}) => (
  <TouchableHighlight
    onPress={() => {
      console.log(onClick);
      if (!onClick) return;
      onClick({id, homeTeam, awayTeam, status, startTime, time});
    }}>
    <View style={styles.matchContainer}>
      <Text style={[styles.whiteText, styles.matchStatus]}>
        {getStatusToDisplay(status, time)}
      </Text>

      <View style={styles.homeTeamContainer}>
        <Text style={[styles.whiteText, styles.homeTeamText]}>
          {homeTeam.name}
        </Text>
        <Image source={homeTeam.icon} style={styles.teamImage} />
      </View>
      <View style={styles.scoreContainer}>
        {status === matchStatus.NotStarted ? (
          <Text style={{color: '#fff'}}>
            {startTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
              timeStyle: 'short',
            })}
          </Text>
        ) : (
          <>
            <Text style={[styles.homeScoreText, styles.whiteText]}>
              {homeTeam.score}
            </Text>
            <Text style={styles.whiteText}>-</Text>
            <Text style={[styles.awayScoreText, styles.whiteText]}>
              {awayTeam.score}
            </Text>
          </>
        )}
      </View>

      <View style={styles.awayTeamContainer}>
        <Image source={awayTeam.icon} style={styles.teamImage} />
        <Text style={[styles.whiteText, styles.awayTeamText]}>
          {awayTeam.name}
        </Text>
      </View>
    </View>
  </TouchableHighlight>
);

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
  scoreContainer: {
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

export default ScoreCard;
