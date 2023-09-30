import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {colors} from '../assets/constants';

const TrainButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>Go</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -20,
    width: 52,
    height: 52,
    borderRadius: 26,
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
    fontSize: 18,
    fontWeight: '700',
    color: 'white',
  },
});

export default TrainButton;
