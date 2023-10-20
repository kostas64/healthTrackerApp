import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import moment from 'moment';
import {View, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';

import Goal from '../components/Goal';
import {getDates} from '../utils/Dates';
import Header from '../components/Header';
import NoData from '../components/NoData';
import {colors} from '../assets/constants';
import BoxStats from '../components/BoxStats';
import LineChart from '../components/LineChart';
import {DimUtils} from '../utils/DimensionUtils';
import StepsStats from '../components/StepsStats';
import CalendarList from '../components/CalendarList';

const Stats = () => {
  const data = getDates();
  const scrollRef = useRef();

  const scrollY = useSharedValue(0);
  const [selectedDate, setSelectedDate] = useState(data?.[7]);

  const isNotInFuture = moment(selectedDate.date)
    .set({hour: 0, minute: 0, second: 0, millisecond: 0})
    .add(0, 'd')
    .isSameOrBefore(moment());

  const scrollHandler = useAnimatedScrollHandler(e => {
    scrollY.value = e.contentOffset.y;
  });

  return (
    <View style={styles.container}>
      <Header title={'Your activity'} subtitle={'Today'} scrollY={scrollY} />

      {/* Dates */}
      <CalendarList
        scrollY={scrollY}
        selectedDate={selectedDate}
        setSelectedDate={value => {
          setSelectedDate(value);
          scrollRef.current?.scrollTo({y: 0, animated: true});
        }}
      />

      <Animated.ScrollView
        ref={scrollRef}
        bounces={false}
        style={styles.container}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
        {isNotInFuture ? (
          <>
            <StepsStats numOfSteps={selectedDate?.steps} />
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
            <LineChart
              data={selectedDate?.chart}
              selectedDate={selectedDate?.date}
            />
            <Goal />
          </>
        ) : (
          <NoData />
        )}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxContainer: {
    marginVertical: DimUtils.getDP(24),
    flexDirection: 'row',
  },
});

export default Stats;
