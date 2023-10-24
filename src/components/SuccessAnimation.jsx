import Animated, {
  runOnJS,
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const SuccessAnimation = React.forwardRef((props, ref) => {
  const opacity = useSharedValue(0);

  const animStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const animateSuccess = () => {
    opacity.value = withSpring(1, {duration: 1200}, () => {
      !!props?.onFinish && runOnJS(props?.onFinish)();
    });
  };

  //No need for useEffect
  animateSuccess();

  return (
    <Animated.View style={[styles.container, animStyle]}>
      <View style={styles.innerContainer}>
        <View style={styles.line1} />
        <View style={styles.line2} />
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    left: -2,
    height: DimUtils.getDP(18),
    width: DimUtils.getDP(18),
    borderWidth: DimUtils.getDP(2),
    borderRadius: DimUtils.getDP(10),
    borderColor: colors.lightPurple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    left: 1,
    flexDirection: 'row',
    transform: [{rotate: '40deg'}],
  },
  line1: {
    borderRadius: DimUtils.getDP(2),
    backgroundColor: colors.lightPurple,
    transform: [{rotate: '90deg'}],
    top: 5,
    left: -1,
    height: 4,
    width: 2,
  },
  line2: {
    height: 8,
    width: 2,
    left: -1,
    borderRadius: DimUtils.getDP(2),
    backgroundColor: colors.lightPurple,
  },
});

export default SuccessAnimation;
