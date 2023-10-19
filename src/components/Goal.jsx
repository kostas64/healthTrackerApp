import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet} from 'react-native';

import Button from './Button';
import Walking from './Walking';
import {images} from '../assets/images';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import {XL_SPACE, colors} from '../assets/constants';

const Goal = () => {
  const navigation = useNavigation();
  const {goalSteps} = useContext(Context);

  return (
    <View style={styles.container}>
      <View style={[styles.rowCenter]}>
        <View>
          <View style={styles.rowCenter}>
            <Text style={styles.title}>Current Goal</Text>
            <Image source={images.target} style={styles.icon} />
          </View>
          <Text style={styles.stepsLabel}>{`${goalSteps} steps`}</Text>
        </View>
        {/* Animation */}
        <Walking />
      </View>

      <Button
        label={'Set new goal'}
        onPress={() => navigation.navigate('SetGoal')}
        buttonLabelStyle={styles.buttonLabel}
        buttonContainerStyle={styles.buttonContainer}
      />
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
    padding: DimUtils.getDP(16),
    marginHorizontal: DimUtils.getDP(24),
    marginTop: DimUtils.getDP(8),
    marginBottom: DimUtils.getDP(36),
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
    marginTop: DimUtils.getDP(8),
    fontSize: DimUtils.getFontSize(24),
  },
  buttonContainer: {
    backgroundColor: 'white',
    marginTop: DimUtils.getDP(16),
  },
  buttonLabel: {
    color: colors.purple,
  },
});

export default Goal;
