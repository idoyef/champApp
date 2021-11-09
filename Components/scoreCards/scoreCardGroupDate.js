import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ScoreCardGroupDate = ({date}) => (
  <View style={styles.dateContainer}>
    <Text style={[styles.whiteText, styles.textSize16]}>
      {date.getDate()}/{date.getMonth()}
    </Text>
    <Text style={[styles.whiteText]}>Today</Text>
  </View>
);

const styles = StyleSheet.create({
  dateContainer: {
    backgroundColor: '#000',
    height: 60,
    marginVertical: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  textSize16: {
    fontSize: 16,
  },
});

export default ScoreCardGroupDate;
