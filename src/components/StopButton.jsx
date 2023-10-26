import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const StopButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.square} />
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
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  square: {
    width: DimUtils.getDP(20),
    height: DimUtils.getDP(20),
    backgroundColor: 'white',
    borderRadius: DimUtils.getDP(4),
  },
});

export default StopButton;
