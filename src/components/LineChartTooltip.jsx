import {Animated, Text, StyleSheet} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import {colors, isAndroid} from '../assets/constants';

const LineChartTooltip = ({tooltip}) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const [text, setText] = useState(tooltip?.text);
  const [borderColor, setBorderColor] = useState(colors.lightGrey);

  const border = tooltip?.text?.includes('Distance')
    ? colors.purple
    : tooltip?.text?.includes('Calories')
    ? colors.orange
    : colors.lightGrey;

  useEffect(() => {
    if (!tooltip?.text) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -6,
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start();
    } else if (!!tooltip.text) {
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -6,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 75,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setText(tooltip?.text);
        setBorderColor(border);

        Animated.parallel([
          Animated.timing(translateY, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }
  }, [tooltip?.text]);

  return (
    <Animated.View
      style={[
        {borderColor, opacity, transform: [{translateY}]},
        styles.tooltip,
      ]}>
      <Text style={styles.label}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tooltip: {
    zIndex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 32,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  label: {
    top: isAndroid ? 1 : 0,
    color: colors.black,
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
  },
});

export default LineChartTooltip;
