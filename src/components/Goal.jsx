import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {images} from '../assets/images';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, XL_SPACE, colors} from '../assets/constants';

const Goal = () => {
  const navigation = useNavigation();
  const {goalSteps} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={styles.rowCenter}>
        <Text style={styles.title}>Current Goal</Text>
        <Image source={images.target} style={styles.icon} />
      </View>
      <Text style={styles.stepsLabel}>{`${goalSteps} steps`}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SetGoal')}
        style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Set new goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 36,
    borderRadius: XL_SPACE,
    backgroundColor: colors.purple,
  },
  title: {
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
  icon: {
    tintColor: 'white',
    width: DimUtils.getDP(20),
    height: DimUtils.getDP(20),
    marginLeft: DimUtils.getDP(8),
  },
  stepsLabel: {
    color: 'white',
    fontFamily: 'Rubik-Medium',
    marginTop: 8,
    fontSize: DimUtils.getFontSize(24),
  },
  buttonContainer: {
    marginTop: 16,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: L_SPACE,
  },
  buttonLabel: {
    alignSelf: 'center',
    fontFamily: 'Rubik-Medium',
    color: colors.purple,
    fontSize: DimUtils.getFontSize(16),
  },
});

export default Goal;
