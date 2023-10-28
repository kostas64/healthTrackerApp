import Animated, {
  withSpring,
  withTiming,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React from 'react';
import {StyleSheet, View} from 'react-native';

import PlayButton from './PlayButton';
import StopButton from './StopButton';
import PauseButton from './PauseButton';
import {DimUtils} from '../utils/DimensionUtils';

const TimerButtons = ({onPress, disabledPause, onPressFinish}) => {
  const scalePause = useSharedValue(1);
  const scalePlay = useSharedValue(0);

  const animPauseStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scalePause.value,
        },
      ],
    };
  });

  const animPlayStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scalePlay.value,
        },
      ],
    };
  });

  const fadeOutPause = () => {
    onPress();

    scalePause.value = withTiming(
      0,
      {duration: 250},
      () => (scalePlay.value = withSpring(1)),
    );
  };

  const fadeInPause = () => {
    onPress();

    scalePlay.value = withTiming(
      0,
      {duration: 250},
      () => (scalePause.value = withSpring(1)),
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.absoluteRow, animPlayStyle]}>
        <PlayButton onPress={fadeInPause} />
        <View style={styles.space} />
        <StopButton onPress={onPressFinish} />
      </Animated.View>
      <Animated.View style={animPauseStyle}>
        <PauseButton disabled={disabledPause} onPress={fadeOutPause} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  absoluteRow: {
    position: 'absolute',
    flexDirection: 'row',
  },
  space: {
    width: DimUtils.getDP(16),
  },
});

export default TimerButtons;
