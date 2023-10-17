import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const BoxStats = ({label, value, dotColor, unit}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.title}>{label}</Text>
        {!!dotColor && (
          <View style={[styles.dot, {backgroundColor: dotColor}]} />
        )}
      </View>
      <Text>
        <Text style={styles.value}>{value}</Text>
        {!!unit && <Text style={styles.unit}>{` ${unit}`}</Text>}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: DimUtils.getFontSize(20),
    fontFamily: 'Rubik-Medium',
    color: colors.lightGrey,
  },
  value: {
    color: colors.black,
    fontSize: DimUtils.getFontSize(30),
    fontFamily: 'Rubik-Regular',
  },
  unit: {
    fontSize: DimUtils.getFontSize(22),
    color: colors.lightGrey,
  },
  dot: {
    width: DimUtils.getDP(16),
    height: DimUtils.getDP(16),
    marginLeft: DimUtils.getDP(8),
    borderRadius: DimUtils.getDP(8),
  },
});

export default BoxStats;
