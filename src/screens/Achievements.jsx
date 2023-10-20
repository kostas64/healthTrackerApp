import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import Badge from '../components/Badge';
import Header from '../components/Header';
import {badges} from '../assets/badgeData';
import {DimUtils} from '../utils/DimensionUtils';

const Achievements = () => {
  const renderItem = ({item, index}) => {
    return <Badge key={index} item={item} />;
  };

  return (
    <View style={styles.container}>
      <Header title={'Your achievements'} subtitle={'Check your badges'} />

      <FlatList
        data={badges}
        numColumns={2}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: DimUtils.getDP(24),
          paddingBottom: 8,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Achievements;
