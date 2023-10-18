import React, {useState} from 'react';
import {runOnJS, useSharedValue} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Counter = ({number, setNumber, changeNumber}) => {
  const isAddDisabled = number === 100000;
  const isSubDisabled = number < 60;

  const intervalShared20 = useSharedValue();
  const intervalShared100 = useSharedValue();

  const [buttonPressed, setButtonPressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);

  let interval = action => {
    //Add or remove by 20. If user kepp holding button
    //we add or remove per 100 and clear previous interval
    intervalShared20.value = setInterval(() => {
      if (action === 'add')
        setNumber(old => {
          if (old < 100000) {
            return old + 50;
          } else {
            return old;
          }
        });
      else if (!isSubDisabled) {
        setNumber(old => {
          if (old >= 60) {
            return old - 50 <= 40 ? 50 : old - 50;
          } else {
            return old;
          }
        });
      }
    }, 250);
  };

  const longPressMinGesture = Gesture.LongPress()
    .onBegin(() => {
      runOnJS(setButtonPressed)(true);
      runOnJS(interval)('sub');
    })
    .onFinalize(() => {
      runOnJS(setButtonPressed)(false);
      runOnJS(clearInterval)(intervalShared20.value);
      runOnJS(clearInterval)(intervalShared100.value);
    });

  const longPressAddGesture = Gesture.LongPress()
    .onBegin(() => {
      runOnJS(setButton2Pressed)(true);
      runOnJS(interval)('add');
    })
    .onFinalize(() => {
      runOnJS(setButton2Pressed)(false);
      runOnJS(clearInterval)(intervalShared20.value);
      runOnJS(clearInterval)(intervalShared100.value);
    });

  return (
    <View>
      <View style={styles.counterContainer}>
        <GestureDetector gesture={longPressMinGesture}>
          <TouchableOpacity
            disabled={isSubDisabled}
            onPress={() => changeNumber('sub')}
            style={[
              styles.circle,
              (isSubDisabled || buttonPressed) && styles.lowOpacity,
            ]}>
            <View style={styles.minus} />
          </TouchableOpacity>
        </GestureDetector>
        <View>
          <Text style={styles.number}>{number}</Text>
        </View>
        <GestureDetector gesture={longPressAddGesture}>
          <TouchableOpacity
            disabled={isAddDisabled}
            onPress={() => changeNumber('add')}
            style={[
              styles.circle,
              (isAddDisabled || button2Pressed) && styles.lowOpacity,
            ]}>
            <View style={styles.minus} />
            <View style={[styles.minus, styles.plus]} />
          </TouchableOpacity>
        </GestureDetector>
      </View>
      <Text style={styles.stepsPerDayLabel}>STEPS/DAY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    height: DimUtils.getDP(48),
    width: DimUtils.getDP(48),
    borderRadius: DimUtils.getDP(24),
  },
  minus: {
    backgroundColor: 'white',
    height: DimUtils.getDP(16),
    width: DimUtils.getDP(3),
    transform: [{rotate: '90deg'}],
  },
  plus: {
    position: 'absolute',
    transform: [{rotate: '0deg'}],
  },
  number: {
    color: 'black',
    fontFamily: 'Rubik-SemiBold',
    fontSize: DimUtils.getFontSize(56),
  },
  stepsPerDayLabel: {
    alignSelf: 'center',
    color: 'black',
    fontSize: DimUtils.getFontSize(24),
    fontFamily: 'Rubik-SemiBold',
  },
  lowOpacity: {
    opacity: 0.3,
  },
});

export default Counter;
