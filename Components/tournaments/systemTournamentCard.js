import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {tournamentTypeToIconMap} from './tournamentHelper';

const leagueIconMock = require('../../icons/liverpool.png');

const SystemTournamentCard = ({
  data: {name, startDate, participantsNumber},
}) => {
  return (
    <View style={styles.tournamentInMotionContainer}>
      <View style={{textAlign: 'left'}}>
        <Image style={{width: 20, height: 20}} source={leagueIconMock} />
      </View>
      <Text style={[styles.whiteText, {flex: 2, paddingLeft: 12}]}>{name}</Text>
      <Text style={[styles.whiteText, {flex: 1, paddingLeft: 12}]}>
        {startDate.getDate()}/{startDate.getMonth()}
      </Text>
      <Text style={[styles.whiteText, {flex: 1, paddingRight: 10}]}>
        {participantsNumber}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tournamentInMotionContainer: {
    backgroundColor: '#121212',
    height: 50,
    marginVertical: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  teamImage: {width: 20, height: 20},
});

export default SystemTournamentCard;
