import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {images} from '../assets/images';
import {DimUtils} from '../utils/DimensionUtils';

const BackButton = ({label}) => {
  const navigation = useNavigation();

  const onPress = () => navigation.pop();

  return (
    <TouchableOpacity
      hitSlop={styles.hitslop}
      style={styles.container}
      onPress={onPress}>
      <Image source={images.arrow} style={styles.icon} />
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingVertical: DimUtils.getDP(8),
    marginBottom: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(20),
  },
  hitslop: {
    top: DimUtils.getDP(12),
    bottom: DimUtils.getDP(12),
    right: DimUtils.getDP(12),
    left: DimUtils.getDP(12),
  },
  icon: {
    width: DimUtils.getDP(16),
    height: DimUtils.getDP(16),
  },
  label: {
    marginLeft: DimUtils.getDP(8),
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getFontSize(16),
  },
});

export default BackButton;
