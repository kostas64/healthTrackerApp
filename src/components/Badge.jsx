import Animated, {
  withSpring,
  withTiming,
  interpolate,
  withSequence,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {WIDTH} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Badge = ({item}) => {
  const scale = useSharedValue(1);
  const rotateY = useSharedValue(0);

  const animStyle = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotateY.value,
      [0, 1, 2, 3, 4, 5, 6],
      [0, 180, 0, 180, 0, 180, 0],
    );

    return {
      transform: [
        {
          rotateY: `${rotate}deg`,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const animStyle2 = useAnimatedStyle(() => {
    const rotate = interpolate(
      rotateY.value,
      [0, 1, 2, 3, 4, 5, 6],
      [180, 360, 180, 360, 180, 360, 180],
    );

    return {
      transform: [
        {
          rotateY: `${rotate}deg`,
        },
        {
          scale: scale.value,
        },
      ],
    };
  });

  const onItemPress = () => {
    rotateY.value = 0;
    rotateY.value = withTiming(
      6,
      {
        duration: 2400,
      },
      () => {
        scale.value = withSequence(
          withTiming(0.7),
          withTiming(1.3),
          withSpring(1),
        );
      },
    );
  };

  //No need for useEffect
  item?.complete && onItemPress();

  return (
    <TouchableOpacity
      disabled={!item.complete}
      onPress={onItemPress}
      style={[styles.container, !item.complete && {opacity: 0.3}]}>
      <View>
        <Animated.Image
          source={item.img}
          style={[animStyle2, styles.img, styles.absolute]}
        />
        <Animated.Image source={item.img} style={[animStyle, styles.img]} />
      </View>
      <Text numberOfLines={2} style={styles.label}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: DimUtils.getDP(8),
    padding: DimUtils.getDP(12),
    alignItems: 'center',
    justifyContent: 'center',
    width: (WIDTH - 80) / 2,
    height: DimUtils.getDP(180),
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: DimUtils.getDP(32),
  },
  img: {
    width: DimUtils.getDP(64),
    height: DimUtils.getDP(64),
    backfaceVisibility: 'hidden',
  },
  absolute: {
    position: 'absolute',
  },
  label: {
    color: 'black',
    marginTop: DimUtils.getDP(16),
    textAlign: 'center',
    width: DimUtils.getDP(100),
    fontFamily: 'Rubik-Medium',
  },
});

export default Badge;
