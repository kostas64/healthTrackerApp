import React, {useRef} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';
import {useIsFocused} from '@react-navigation/native';

const Walking = () => {
  const isFocused = useIsFocused();

  const headOut = useRef(new Animated.Value(5)).current;
  const headIn = useRef(new Animated.Value(5)).current;
  const road = useRef(new Animated.Value(0)).current;

  //No need for useEffect
  if (isFocused) {
    //Animate person
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(headOut, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(headIn, {
            toValue: 0,
            duration: 350,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(headOut, {
            toValue: 5,
            duration: 350,
            useNativeDriver: true,
          }),
          Animated.timing(headIn, {
            toValue: 5,
            duration: 350,
            useNativeDriver: true,
          }),
        ]),
      ]),
    ).start();

    //Animate road
    Animated.loop(
      Animated.sequence([
        Animated.timing(road, {
          toValue: -16,
          duration: 350,
          delay: 350,
          useNativeDriver: true,
        }),
        Animated.timing(road, {
          toValue: 8,
          duration: 350,
          delay: 350,
          useNativeDriver: true,
        }),
        Animated.timing(road, {
          toValue: 0,
          duration: 175,
          delay: 350,
          useNativeDriver: true,
        }),
        Animated.timing(road, {
          toValue: -16,
          duration: 350,
          delay: 350,
          useNativeDriver: true,
        }),
        Animated.timing(road, {
          toValue: 8,
          duration: 350,
          delay: 350,
          useNativeDriver: true,
        }),
        Animated.timing(road, {
          toValue: 0,
          duration: 175,
          delay: 350,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }

  return (
    <View style={styles.container}>
      <View>
        {/* Head */}

        <Animated.View
          style={[styles.headOut, {transform: [{translateY: headOut}]}]}
        />
        {/* Head inside */}
        <Animated.View
          style={[styles.headIn, {transform: [{translateY: headIn}]}]}
        />

        {/* Leg */}
        <Animated.View
          style={[styles.leg, {transform: [{translateY: headIn}]}]}
        />

        {/* Road */}
        <Animated.View
          style={[styles.road, {transform: [{translateX: road}]}]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headOut: {
    left: DimUtils.getDP(19),
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
    borderRadius: DimUtils.getDP(12),
    backgroundColor: 'white',
  },
  headIn: {
    top: DimUtils.getDP(6),
    left: DimUtils.getDP(25),
    position: 'absolute',
    width: DimUtils.getDP(12),
    height: DimUtils.getDP(12),
    borderRadius: DimUtils.getDP(12),
    backgroundColor: colors.purple,
  },
  leg: {
    marginTop: DimUtils.getDP(2),
    left: DimUtils.getDP(28),
    width: DimUtils.getDP(6),
    height: DimUtils.getDP(24),
    borderRadius: DimUtils.getDP(12),
    backgroundColor: 'white',
  },
  road: {
    marginTop: DimUtils.getDP(2),
    left: DimUtils.getDP(9),
    width: DimUtils.getDP(64),
    height: DimUtils.getDP(3),
    borderRadius: DimUtils.getDP(12),
    backgroundColor: 'white',
  },
});

export default Walking;
