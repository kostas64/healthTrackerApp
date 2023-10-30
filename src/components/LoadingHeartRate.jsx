import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, StyleSheet, Image} from 'react-native';

import {images} from '../assets/images';
import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const AnimImage = Animated.createAnimatedComponent(Image);

const LoadingHeartRate = () => {
  const minValue = 0.75;
  const maxValue = 1;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: minValue,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: maxValue,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: minValue,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: maxValue,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <AnimImage
        source={images.heart}
        tintColor={colors.lightRed}
        style={{alignSelf: 'center', transform: [{scale}]}}
      />
      <Text style={styles.label}>
        Wait for the app to collect your heart rate
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: DimUtils.getDP(8),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    fontSize: DimUtils.getDP(14),
  },
});

export default LoadingHeartRate;
