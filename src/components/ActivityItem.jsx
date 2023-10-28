import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const ActivityItem = ({item, onPress, isSelected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, isSelected && styles.selected]}>
      <Image
        source={item.img}
        style={[styles.img, isSelected && styles.selectedTint]}
      />
      <Text style={[styles.label, isSelected && styles.selectedLabel]}>
        {item.label}
      </Text>
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
    borderWidth: 1,
    borderColor: colors.lightGrey,
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
    backgroundColor: colors.purple,
  },
  selectedTint: {
    tintColor: 'white',
  },
  selectedLabel: {
    color: 'white',
  },
});

export default ActivityItem;
