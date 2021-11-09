import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ScoreCardGroupTitle = ({title, icon}) => (
  <View style={styles.matchContainer}>
    <Image source={icon} style={styles.icon} />
    <Text style={[styles.whiteText, styles.matchStatus]}>{title} </Text>
  </View>
);

const styles = StyleSheet.create({
  matchContainer: {
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
  icon: {height: 20, width: 20, marginRight: 5},
});

export default ScoreCardGroupTitle;
