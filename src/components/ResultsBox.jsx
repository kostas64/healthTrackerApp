import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, WIDTH, colors} from '../assets/constants';

const ResultsBox = ({img, label, value, tintColor}) => {
  return (
    <View style={styles.container}>
      {/* Title & Icon */}
      <View style={styles.rowBetween}>
        <Text style={styles.label}>{label}</Text>
        <Image source={img} style={[styles.img, !!tintColor && {tintColor}]} />
      </View>
      {/* Value */}
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: DimUtils.getDP(2 * L_SPACE),
    borderRadius: DimUtils.getDP(32),
    width: (WIDTH - DimUtils.getDP(64)) / 2,
    height: (WIDTH - DimUtils.getDP(64)) / 2,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    alignSelf: 'flex-start',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    width: (WIDTH - DimUtils.getDP(64)) / 2 - DimUtils.getDP(80),
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
  },
  img: {
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
  },
  valueContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  value: {
    fontSize: DimUtils.getFontSize(20),
    fontFamily: 'Rubik-Regular',
  },
});

export default ResultsBox;
