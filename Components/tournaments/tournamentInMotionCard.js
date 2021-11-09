import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {tournamentTypeToIconMap} from './tournamentHelper';

const TournamentInMotionCard = ({
  data: {name, type, participantsNumber, currentPosition},
}) => {
  return (
    <View style={styles.tournamentInMotionContainer}>
      <View style={{textAlign: 'left'}}>
        <Image
          style={{width: 20, height: 20}}
          source={tournamentTypeToIconMap[type]}
        />
      </View>
      <Text style={[styles.whiteText, {flex: 2, paddingLeft: 12}]}>{name}</Text>
      <Text style={[styles.whiteText, {flex: 1, paddingRight: 10}]}>
        {currentPosition}/{participantsNumber}
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
  teamImage: {width: 20, height: 20, textAlign: 'right'},
});

export default TournamentInMotionCard;
