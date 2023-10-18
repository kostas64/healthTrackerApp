import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {images} from '../assets/images';
import {colors} from '../assets/constants';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';

const StepsStats = ({numOfSteps}) => {
  const {goalSteps} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Steps</Text>
        <Image source={images.shoe} style={styles.icon} />
      </View>
      <Text>
        <Text style={styles.steps}>{numOfSteps}</Text>
        <Text style={styles.steps2}>{`/${goalSteps}`}</Text>
      </Text>
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
    fontSize: DimUtils.getFontSize(72),
    fontFamily: 'Rubik-Light',
    color: colors.black,
  },
  steps2: {
    fontSize: DimUtils.getFontSize(20),
    fontFamily: 'Rubik-Regular',
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
