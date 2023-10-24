import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const TrainButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('TrainMe')}
      style={styles.container}>
      <Text style={styles.label}>GO</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -DimUtils.getDP(20),
    width: DimUtils.getDP(52),
    height: DimUtils.getDP(52),
    borderRadius: DimUtils.getDP(26),
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
  },
  label: {
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
});

export default TrainButton;
