import React from 'react';
import {View, FlatList} from 'react-native';
import ScoreCardGroup from '../Components/scoreCards/scoreCardGroup';
import ScoreCardGroupDate from '../Components/scoreCards/scoreCardGroupDate';

export function ScoreCardGroupContainer({scoreCardGroupData}) {
  const renderGroupItem = ({item}) => <ScoreCardGroup scoreGroup={item} />;

  return (
    <View>
      <ScoreCardGroupDate
        id={scoreCardGroupData.id}
        date={scoreCardGroupData.date}
      />
      <FlatList
        data={scoreCardGroupData.groups}
        renderItem={renderGroupItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
