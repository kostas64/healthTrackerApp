import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {images} from '../assets/images';
import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, M_SPACE, colors, isIOS} from '../assets/constants';

const Header = ({title, subtitle, scrollY}) => {
  const insets = useSafeAreaInsets();
  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;

  if (!scrollY) {
    return (
      <View
        style={[
          styles.rowBetween,
          {
            paddingTop,
            paddingBottom: M_SPACE,
          },
        ]}>
        <View>
          <Text style={[styles.title, {height: 30}]}>{title}</Text>
          {!!subtitle && (
            <Text style={[styles.subtitle, {height: 20}]}>{subtitle}</Text>
          )}
        </View>
        <Image source={images.me} style={styles.headerImg} />
      </View>
    );
  }

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      paddingTop: interpolate(
        scrollY.value,
        [0, 80, 100],
        [paddingTop, paddingTop, insets.top > 0 ? insets.top - 8 : 28],
        Extrapolate.CLAMP,
      ),
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 30, 60],
        ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(82,67,172)'],
      ),
    };
  });

  const animatedTitleStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [40, 80], [30, 0], Extrapolate.CLAMP),
    };
  });

  const animatedSubStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(scrollY.value, [0, 40], [20, 0], Extrapolate.CLAMP),
    };
  });

  const animatedImgStyle = useAnimatedStyle(() => {
    return {
      borderRadius: interpolate(
        scrollY.value,
        [0, 80],
        [26, 0],
        Extrapolate.CLAMP,
      ),
      height: interpolate(scrollY.value, [0, 80], [52, 0], Extrapolate.CLAMP),
      width: interpolate(scrollY.value, [0, 80], [52, 0], Extrapolate.CLAMP),
      transform: [
        {
          translateX: interpolate(
            scrollY.value,
            [0, 80],
            [0, -20],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            scrollY.value,
            [0, 80],
            [0, 12],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });

  return (
    <Animated.View
      style={[
        styles.rowBetween,
        animatedHeaderStyle,
        {paddingBottom: M_SPACE},
      ]}>
      <View>
        <Animated.Text style={[styles.title, animatedTitleStyle]}>
          {title}
        </Animated.Text>
        {!!subtitle && (
          <Animated.Text style={[styles.subtitle, animatedSubStyle]}>
            {subtitle}
          </Animated.Text>
        )}
      </View>
      <Animated.Image source={images.me} style={animatedImgStyle} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    fontFamily: 'Rubik-SemiBold',
    fontSize: DimUtils.getFontSize(26),
  },
  subtitle: {
    color: colors.lightGrey,
    fontFamily: 'Rubik-Regular',
    fontSize: DimUtils.getFontSize(16),
    marginTop: DimUtils.getDP(isIOS ? 4 : 0),
  },
  headerImg: {
    height: 52,
    width: 52,
    borderRadius: 26,
  },
});

export default Header;
