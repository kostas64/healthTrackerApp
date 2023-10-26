import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from './Button';
import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const DiscardModal = ({onPressDone, cancelModal}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Are you sure you'd like to discard this activity?
      </Text>
      <View style={styles.hr} />

      <View style={styles.row}>
        <Button
          label={'Cancel'}
          onPress={cancelModal}
          buttonContainerStyle={styles.buttonContainer}
        />
        <View style={styles.space} />
        <Button
          secondary
          label={'Yes'}
          onPress={onPressDone}
          buttonContainerStyle={styles.buttonContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  question: {
    textAlign: 'center',
    fontFamily: 'Rubik-Regular',
    fontSize: DimUtils.getFontSize(14),
  },
  buttonContainer: {
    width: (WIDTH - DimUtils.getDP(104)) / 2,
  },
  hr: {
    marginVertical: DimUtils.getDP(16),
    width: WIDTH - DimUtils.getDP(48),
    height: 1,
    backgroundColor: colors.lightGrey,
  },
  space: {
    width: DimUtils.getDP(16),
  },
});

export default DiscardModal;
