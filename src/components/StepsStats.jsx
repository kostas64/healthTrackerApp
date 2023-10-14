import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {images} from '../assets/images';
import {colors} from '../assets/constants';

const StepsStats = ({numOfSteps}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Steps</Text>
        <Image source={images.shoe} style={styles.icon} />
      </View>
      <Text style={styles.steps}>{numOfSteps}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Rubik-Medium',
    color: colors.lightGrey,
  },
  steps: {
    fontSize: 90,
    fontFamily: 'Rubik-Light',
    color: colors.black,
  },
  icon: {
    tintColor: colors.lightGrey,
    width: 20,
    height: 20,
    marginLeft: 8,
  },
});

export default StepsStats;
