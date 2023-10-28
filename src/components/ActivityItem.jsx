import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const ActivityItem = ({item, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected]}>
      <Image source={item.img} style={styles.img} />
      <Text style={styles.label}>{item.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: DimUtils.getDP(8),
    padding: DimUtils.getDP(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: (WIDTH - 80) / 2,
    height: DimUtils.getDP(180),
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: DimUtils.getDP(32),
  },
  label: {
    color: 'black',
    marginTop: DimUtils.getDP(16),
    textAlign: 'center',
    width: DimUtils.getDP(110),
    fontFamily: 'Rubik-Medium',
  },
  img: {
    tintColor: colors.purple,
    width: DimUtils.getDP(40),
    height: DimUtils.getDP(40),
  },
  selected: {
    borderWidth: 1,
    borderColor: colors.purple,
  },
});

export default ActivityItem;
