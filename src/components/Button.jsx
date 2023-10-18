import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.purple,
    paddingVertical: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(12),
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
});

export default Button;
