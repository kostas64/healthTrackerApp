import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {images} from '../assets/images';
import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const NoData = () => {
  const label = `No data to process.\nCheck again when it's time`;

  return (
    <View style={styles.container}>
      <Image source={images.calendar} style={styles.img} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: DimUtils.getDP(96),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginBottom: DimUtils.getDP(8),
    width: DimUtils.getDP(42),
    height: DimUtils.getDP(42),
    tintColor: colors.lightGrey,
  },
  label: {
    color: colors.lightGrey,
    fontSize: DimUtils.getFontSize(18),
    fontFamily: 'Rubik-Medium',
    textAlign: 'center',
  },
});

export default NoData;
