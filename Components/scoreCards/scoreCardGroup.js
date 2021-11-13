import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ScoreCard from './scoreCard';
import ScoreCardGroupTitle from './scoreCardGroupTitle';

const ScoreCardGroup = ({scoreGroup, onItemClicked}) => {
  const renderItem = ({item}) => (
    <ScoreCard match={item} onClick={onItemClicked} />
  );

  return (
    <View style={styles.scoreCardGroupContainer}>
      <ScoreCardGroupTitle
        title={scoreGroup.league}
        icon={scoreGroup.leagueIcon}
      />
      <FlatList
        data={scoreGroup.scores}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scoreCardGroupContainer: {
    marginBottom: 15,
  },
});

export default ScoreCardGroup;
