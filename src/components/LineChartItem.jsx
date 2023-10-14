import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import React, {useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {WIDTH, colors} from '../assets/constants';

const AnimTouch = Animated.createAnimatedComponent(TouchableOpacity);

const LineChartItem = ({distance, calories, onPress, selectedDate, index}) => {
  const parsedDis = Number(parseInt(distance?.replace(',', ''))) / 100;
  const parsedCal = Number(parseInt(calories?.replace(',', ''))) / 100;

  const distanceHeight =
    parsedDis === 0 ? 16 : parsedDis < 50 ? parsedDis + 16 : parsedDis + 24;
  const caloriesHeight =
    parsedCal === 0 ? 16 : parsedCal < 50 ? parsedCal + 16 : parsedCal + 24;

  const orangeLine = parsedCal === 0 ? colors.lightGrey : colors.orange;
  const purpleLine = parsedDis === 0 ? colors.lightGrey : colors.purple;

  const caloriesText = calories > 0 ? `Calories: ${calories}` : 'No activity';
  const distanceText = distance > 0 ? `Distance: ${distance}m` : 'No activity';

  const calSharedVal = useSharedValue(0);
  const disSharedVal = useSharedValue(0);

  const calAnimStyle = useAnimatedStyle(() => {
    const height = calSharedVal.value;

    return {
      height,
    };
  });

  const disAnimStyle = useAnimatedStyle(() => {
    const height = disSharedVal.value;

    return {
      height,
    };
  });

  useEffect(() => {
    calSharedVal.value = withSpring(caloriesHeight);
    disSharedVal.value = withSpring(distanceHeight);
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <AnimTouch
        hitSlop={styles.hitSlop}
        onPress={e =>
          onPress({
            index,
            text: caloriesText,
            layout: e.nativeEvent,
          })
        }
        style={[styles.orangeLine, calAnimStyle, {backgroundColor: orangeLine}]}
      />
      <View style={styles.spacer} />
      <AnimTouch
        hitSlop={styles.hitSlop}
        onPress={e =>
          onPress({
            index,
            text: distanceText,
            layout: e.nativeEvent,
          })
        }
        style={[styles.purpleLine, disAnimStyle, {backgroundColor: purpleLine}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    height: 200,
    maxHeight: 200,
    justifyContent: 'center',
    width: (WIDTH - 36) / 12,
    alignItems: 'center',
  },
  orangeLine: {
    width: 4,
    borderRadius: 2,
  },
  purpleLine: {
    width: 4,
    borderRadius: 2,
    backgroundColor: colors.purple,
  },
  spacer: {
    height: 8,
  },
  hitSlop: {
    top: 8,
    left: 8,
    right: 8,
    bottom: 8,
  },
});

export default LineChartItem;
