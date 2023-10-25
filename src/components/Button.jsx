import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Button = ({
  label,
  onPress,
  disabled,
  buttonLabelStyle,
  buttonContainerStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.buttonContainer, buttonContainerStyle]}>
      <Text style={[styles.buttonLabel, buttonLabelStyle]}>{label}</Text>
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
