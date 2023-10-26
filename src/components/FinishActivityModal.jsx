import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from './Button';
import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const FinishActivityModal = ({onPressDone, onPressFinish}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Are you sure you'd like to complete this activity?
      </Text>
      <View style={styles.hr} />
      <View>
        <Button label={"Yes I'm Done"} onPress={onPressDone} />
        <View style={styles.space} />
        <Button label={'Cancel'} secondary onPress={onPressFinish} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  question: {
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    fontSize: DimUtils.getFontSize(14),
  },
  hr: {
    marginVertical: DimUtils.getDP(16),
    left: -DimUtils.getDP(24),
    width: WIDTH,
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  space: {
    height: DimUtils.getDP(12),
  },
});

export default FinishActivityModal;
