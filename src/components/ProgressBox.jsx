import Animated, {
  Easing,
  withTiming,
  useSharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';

import React from 'react';
import {View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Svg, Circle, Text as SVGText} from 'react-native-svg';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const AnimCircle = Animated.createAnimatedComponent(Circle);

const ProgressBox = props => {
  const isFocused = useIsFocused();

  const {size = 100, strokeWidth = 10, progress, textSize} = props;
  const radius = (size - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - progress * 100;
  const text = `${Math.floor(progress * 100)} %`;

  const progressVal = useSharedValue(0);
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: progressVal.value,
    };
  });

  //No need for useEffect
  if (isFocused) {
    progressVal.value = radius * Math.PI * 2 * 0.99;

    setTimeout(() => {
      progressVal.value = withTiming(
        radius * Math.PI * 2 * (svgProgress / 100),
        {
          duration: 500,
          easing: Easing.cubic,
        },
      );
    }, 250);
  }

  return (
    <View style={{margin: DimUtils.getDP(4), alignSelf: 'center'}}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={colors.lightPurple}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          {...{strokeWidth}}
        />

        {/* Progress Circle */}
        <AnimCircle
          stroke={'white'}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          animatedProps={animatedProps}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          {...{strokeWidth}}
        />

        {/* Text */}
        <SVGText
          fontSize={'18'}
          fontFamily="Rubik-Medium"
          fontWeight="600"
          x={size / 2}
          y={size / 1.92 + (!!textSize ? textSize / 2 - 1 : 5)}
          textAnchor="middle"
          fill={'white'}>
          {text}
        </SVGText>
      </Svg>
    </View>
  );
};

export default ProgressBox;
