import React from 'react';
import {StyleSheet, FlatList} from 'react-native';

import Badge from '../components/Badge';
import Screen from '../components/Screen';
import {badges} from '../assets/badgeData';
import {DimUtils} from '../utils/DimensionUtils';

const Achievements = () => {
  const renderItem = ({item, index}) => {
    return <Badge key={index} item={item} />;
  };

  return (
    <Screen title={'Your achievements'} subtitle={'Check your badges'}>
      <FlatList
        data={badges}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: DimUtils.getDP(24),
    paddingBottom: DimUtils.getDP(8),
  },
});

export default Achievements;
