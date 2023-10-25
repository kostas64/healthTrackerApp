import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const PauseButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.line, styles.space]} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: DimUtils.getDP(72),
    height: DimUtils.getDP(72),
    backgroundColor: colors.purple,
    borderRadius: DimUtils.getDP(36),
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  line: {
    width: DimUtils.getDP(8),
    height: DimUtils.getDP(24),
    backgroundColor: 'white',
    borderRadius: DimUtils.getDP(4),
  },
  space: {
    marginRight: DimUtils.getDP(6),
  },
});

export default PauseButton;
