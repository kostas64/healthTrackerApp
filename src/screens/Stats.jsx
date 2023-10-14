import {
  View,
  Text,
  Animated,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';

import Header from '../components/Header';
import BoxStats from '../components/BoxStats';
import LineChart from '../components/LineChart';
import {getDates, isToday} from '../utils/Dates';
import StepsStats from '../components/StepsStats';
import {WIDTH, colors} from '../assets/constants';

const Stats = () => {
  const data = getDates();
  const listRef = useRef();

  const [selectedDate, setSelectedDate] = useState(data?.[7]);

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
        style={[styles.listItemContainer, isSameDay && styles.todayContainer]}>
        <Text style={isSameDay ? styles.isTodayText : styles.isNotToday}>
          {isSameDay
            ? `Today, ${moment(item?.date).format('DD MMM')}`
            : moment(item?.date).format('DD')}
        </Text>
        {hasDot(item?.date) && <View style={styles.selectedDate} />}
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      listRef.current.scrollToIndex({index: 8});
    }, 10);
  }, []);

  return (
    <View style={styles.container}>
      <Header title={'Your activity'} subtitle={'Today'} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Dates */}
        <View style={{height: 78}}>
          <Animated.FlatList
            ref={listRef}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listStyle}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
          />
        </View>

        {/* Steps */}
        <StepsStats numOfSteps={selectedDate?.steps} />

        {/* Distance & Calories */}
        <View style={styles.boxContainer}>
          <BoxStats
            unit={'m'}
            value={selectedDate?.distance}
            label={'Distance'}
            dotColor={colors.purple}
          />
          <BoxStats
            label={'Calories'}
            value={selectedDate?.calories}
            dotColor={colors.orange}
          />
        </View>

        {/* Chart */}
        <LineChart
          data={selectedDate?.chart}
          selectedDate={selectedDate?.date}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 24,
    paddingHorizontal: 16,
  },
  todayContainer: {
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    backgroundColor: colors.lightestPurple,
  },
  listItemContainer: {
    padding: 4,
    margin: 4,
  },
  isTodayText: {
    fontSize: 18,
    color: colors.purple,
    fontFamily: 'Rubik-Medium',
  },
  isNotToday: {
    fontSize: 18,
    color: colors.black,
    fontFamily: 'Rubik-Regular',
  },
  selectedDate: {
    top: 2,
    height: 6,
    width: 6,
    borderRadius: 3,
    alignSelf: 'center',
    backgroundColor: colors.purple,
  },
  boxContainer: {
    marginVertical: 24,
    flexDirection: 'row',
  },
  barChart: {
    marginVertical: 16,
    height: 144,
    width: WIDTH - 48,
    alignSelf: 'center',
  },
});

export default Stats;
