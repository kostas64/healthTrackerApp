import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const PlayButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.triangle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: DimUtils.getDP(72),
    height: DimUtils.getDP(72),
    backgroundColor: colors.purple,
    borderRadius: DimUtils.getDP(36),
    transform: [{rotate: '90deg'}],
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  triangle: {
    width: 0,
    height: 0,
    bottom: DimUtils.getDP(2),
    borderLeftWidth: DimUtils.getDP(12),
    borderRightWidth: DimUtils.getDP(12),
    borderBottomWidth: DimUtils.getDP(22),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
  },
});

export default PlayButton;
