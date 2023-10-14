import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';

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
    fontSize: 18,
    fontFamily: 'Rubik-Medium',
    color: colors.lightGrey,
  },
  value: {
    color: colors.black,
    fontSize: 30,
    fontFamily: 'Rubik-Regular',
  },
  unit: {
    fontSize: 22,
    color: colors.lightGrey,
  },
  dot: {
    width: 16,
    height: 16,
    marginLeft: 8,
    borderRadius: 8,
  },
});

export default BoxStats;
