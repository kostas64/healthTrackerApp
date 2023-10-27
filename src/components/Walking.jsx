import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import {images} from '../assets/images';
import {WIDTH} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Walking = () => {
  return (
    <View style={styles.container}>
      <Image source={images.personWalk} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH - DimUtils.getDP(224),
    alignItems: 'center',
  },
  img: {
    width: DimUtils.getDP(48),
    height: DimUtils.getDP(48),
  },
});

export default Walking;
