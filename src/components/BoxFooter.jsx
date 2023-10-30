import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const BoxFooter = ({
  footerContainer,
  textColor,
  bottomValue,
  bottomSubtitle,
}) => {
  return (
    <View style={footerContainer}>
      <Text style={[styles.title, textColor]}>{bottomValue}</Text>
      <Text style={styles.footerSubtitle}>{bottomSubtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
  },
  footerSubtitle: {
    fontSize: DimUtils.getFontSize(14),
    fontFamily: 'Rubik-Regular',
    color: colors.lightGrey,
  },
});

export default BoxFooter;
