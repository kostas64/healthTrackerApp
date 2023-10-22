import React, {useRef} from 'react';
import Animated, {
  interpolate,
  useSharedValue,
  interpolateColor,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const AnimFlashList = Animated.createAnimatedComponent(FlashList);

const CustomPicker = props => {
  const {indexToStart, items, onIndexChange, itemHeight, contHeight} = props;

  const listRef = useRef();
  const scrollY = useSharedValue(0);

  const Item = React.useCallback(({item, index}) => {
    const inputRange = [
      (index - 2) * itemHeight,
      (index - 1) * itemHeight,
      index * itemHeight,
    ];

    const scaleStyle = useAnimatedStyle(() => {
      const scale = interpolate(scrollY.value, inputRange, [0.8, 1, 0.8]);

      return {
        height: itemHeight,
        transform: [{scale}],
      };
    });

    const textStyle = useAnimatedStyle(() => {
      const color = interpolateColor(scrollY.value, inputRange, [
        'rgba(0,0,0,0.5)',
        'rgb(0,0,0)',
        'rgba(0,0,0,0.5)',
      ]);

      return {
        color,
      };
    });

    return (
      <Animated.View style={[scaleStyle, styles.animatedContainer]}>
        <Animated.Text style={[styles.pickerItem, textStyle]}>
          {item}
        </Animated.Text>
      </Animated.View>
    );
  });

  const modifiedItems = ['', ...items, ''];

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  const momentumScrollEnd = event => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);
    !!onIndexChange && onIndexChange(index);
  };

  return (
    <View style={[styles.container, {height: itemHeight * 3}]}>
      <View
        style={[
          styles.indicatorHolder,
          {
            top: itemHeight,
            borderRadius: DimUtils.getDP(8),
            backgroundColor: colors.indicatorGrey,
          },
        ]}>
        <View style={[styles.indicator, {marginTop: itemHeight}]} />
      </View>

      <View style={[styles.listContainer, {height: contHeight}]}>
        <AnimFlashList
          ref={listRef}
          data={modifiedItems}
          estimatedItemSize={32}
          initialScrollIndex={indexToStart}
          renderItem={({item, index}) => (
            <Item item={item} key={`item-${index}`} index={index} />
          )}
          showsVerticalScrollIndicator={false}
          snapToInterval={itemHeight}
          onMomentumScrollEnd={momentumScrollEnd}
          scrollEventThrottle={16}
          onScroll={scrollHandler}
          getItemLayout={(_, index) => ({
            length: itemHeight,
            offset: itemHeight * index,
            index,
          })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  listContainer: {
    width: WIDTH,
  },
  pickerItem: {
    fontSize: DimUtils.getFontSize(22),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  indicatorHolder: {
    position: 'absolute',
  },
  indicator: {
    width: WIDTH - DimUtils.getDP(24),
    backgroundColor: colors.indicatorGrey,
  },
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomPicker;
