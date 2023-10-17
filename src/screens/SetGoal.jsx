import React, {useState} from 'react';
import {runOnJS, useSharedValue} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, M_SPACE, colors} from '../assets/constants';

const SetGoal = () => {
  const insets = useSafeAreaInsets();
  const intervalShared = useSharedValue();
  const [number, setNumber] = useState(100);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [button2Pressed, setButton2Pressed] = useState(false);

  const isAddDisabled = number === 100000;
  const isSubDisabled = number < 60;

  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;
  const paddingBottom =
    insets.bottom > 0 ? insets.bottom + M_SPACE : 2 * L_SPACE;

  const subtitle =
    "Set a goal based on how active you are, or how active you'd like to be, each day.";

  const changeNumber = action => {
    setNumber(old => (action === 'add' ? old + 10 : old - 10));
  };

  let interval = action =>
    (intervalShared.value = setInterval(() => {
      if (action === 'add')
        setNumber(old => {
          if (old < 100000) {
            return old + 20;
          } else {
            return old;
          }
        });
      else if (!isSubDisabled) {
        setNumber(old => {
          if (old >= 60) {
            return old - 20 === 40 ? 50 : old - 20;
          } else {
            return old;
          }
        });
      }
    }, 250));

  const longPressMinGesture = Gesture.LongPress()
    .onBegin(() => {
      runOnJS(setButtonPressed)(true);
      runOnJS(interval)('sub');
    })
    .onFinalize(() => {
      runOnJS(setButtonPressed)(false);
      runOnJS(clearInterval)(intervalShared.value);
    });

  const longPressAddGesture = Gesture.LongPress()
    .onBegin(() => {
      runOnJS(setButton2Pressed)(true);
      runOnJS(interval)('add');
    })
    .onFinalize(() => {
      runOnJS(setButton2Pressed)(false);
      runOnJS(clearInterval)(intervalShared.value);
    });

  return (
    <View style={[styles.container, {paddingTop, paddingBottom}]}>
      {/* Title & Subtitle */}
      <View>
        <Text style={styles.title}>Your Daily Move Goal</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      {/* Counter */}
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

      {/* Button */}
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Change move goal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle: {
    marginTop: DimUtils.getDP(16),
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
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
  buttonContainer: {
    backgroundColor: colors.purple,
    paddingVertical: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(12),
  },
  buttonLabel: {
    alignSelf: 'center',
    fontSize: DimUtils.getDP(16),
    fontFamily: 'Rubik-Medium',
    color: 'white',
  },
  lowOpacity: {
    opacity: 0.3,
  },
});

export default SetGoal;
