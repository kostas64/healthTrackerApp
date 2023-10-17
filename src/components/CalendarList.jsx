import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';

import moment from 'moment';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {getDates, isToday} from '../utils/Dates';
import {DimUtils} from '../utils/DimensionUtils';
import {colors, isIOS} from '../assets/constants';

const CalendarList = ({scrollY, selectedDate, setSelectedDate}) => {
  const data = getDates();
  const listRef = useRef();

  const listAnimStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 30, 60],
        ['rgb(255,255,255)', 'rgb(255,255,255)', 'rgb(82,67,172)'],
      ),
    };
  });

  const isNotTodayColor = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        scrollY.value,
        [0, 30, 60],
        ['rgb(0,0,0)', 'rgb(0,0,0)', 'rgb(255,255,255)'],
      ),
    };
  });

  const animatedDotColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        scrollY.value,
        [0, 60, 80],
        [colors.purple, colors.purple, 'rgb(255,255,255)'],
      ),
    };
  });

  const hasDot = item => {
    return (
      moment(item).year() === moment(selectedDate?.date).year() &&
      moment(item).month() === moment(selectedDate?.date).month() &&
      moment(item).date() === moment(selectedDate?.date).date()
    );
  };

  const getItemLayout = (_, index) => ({
    length: 20,
    offset: 20 * index,
    index: index,
  });

  const renderItem = ({item}) => {
    const isSameDay = isToday(item?.date);

    return (
      <TouchableOpacity
        onPress={() => setSelectedDate(item)}
        style={[
          styles.listItemContainer,
          !isSameDay && {width: 26, alignItems: 'center'},
          isSameDay && styles.todayContainer,
        ]}>
        <Animated.Text
          style={
            isSameDay
              ? styles.isTodayText
              : [styles.isNotToday, isNotTodayColor]
          }>
          {isSameDay
            ? `Today, ${moment(item?.date).format('DD MMM')}`
            : moment(item?.date).format('DD')}
        </Animated.Text>
        {hasDot(item?.date) && (
          <Animated.View
            style={[
              styles.selectedDate,
              isSameDay ? styles.hasDotSameDay : animatedDotColor,
            ]}
          />
        )}
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      listRef.current.scrollToOffset({
        offset: 8 * 30 + 6,
      });
    }, 10);
  }, []);

  return (
    <Animated.View style={[listAnimStyle, {height: 68}]}>
      <Animated.FlatList
        ref={listRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listStyle}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  listItemContainer: {
    margin: DimUtils.getDP(4),
  },
  todayContainer: {
    marginHorizontal: DimUtils.getDP(12),
    paddingVertical: DimUtils.getDP(8),
    paddingHorizontal: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(30),
    backgroundColor: colors.lightestPurple,
  },
  isTodayText: {
    fontSize: DimUtils.getFontSize(18),
    color: colors.purple,
    fontFamily: 'Rubik-Medium',
  },
  isNotToday: {
    fontSize: DimUtils.getFontSize(18),
    fontFamily: 'Rubik-Regular',
  },
  selectedDate: {
    top: isIOS ? 2 : 0,
    height: DimUtils.getDP(6),
    width: DimUtils.getDP(6),
    borderRadius: DimUtils.getDP(3),
  },
  hasDotSameDay: {
    backgroundColor: colors.purple,
    alignSelf: 'center',
  },
});

export default CalendarList;
