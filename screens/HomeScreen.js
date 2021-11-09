import React from 'react';
import {SafeAreaView, View, StyleSheet, FlatList} from 'react-native';
import {scoreGroupsMock} from '../Components/scoreCards/mocks/scoresMock';
import {ScoreCardGroupContainer} from './ScoreCardGroupContainer';

export function HomeScreen() {
  const renderGroupContainerItem = ({item}) => (
    <ScoreCardGroupContainer scoreCardGroupData={item} />
  );

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <FlatList
        data={scoreGroupsMock}
        renderItem={renderGroupContainerItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
});
