import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Button = ({
  label,
  onPress,
  disabled,
  secondary,
  buttonLabelStyle,
  buttonContainerStyle,
}) => {
  const containerStyle = secondary
    ? styles.secondaryButtonContainer
    : styles.buttonContainer;

  const labelStyle = secondary
    ? styles.secondaryButtonLabel
    : styles.buttonLabel;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[containerStyle, buttonContainerStyle]}>
      <Text style={[labelStyle, buttonLabelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.purple,
    paddingVertical: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(12),
  },
  secondaryButtonContainer: {
    borderWidth: 1,
    borderColor: colors.purple,
    backgroundColor: 'white',
    paddingVertical: DimUtils.getDP(15),
    borderRadius: DimUtils.getDP(12),
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
  secondaryButtonLabel: {
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
    color: colors.purple,
  },
});

export default Button;
