import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import {getDates} from '../utils/Dates';
import Header from '../components/Header';
import {colors} from '../assets/constants';
import BoxStats from '../components/BoxStats';
import LineChart from '../components/LineChart';
import StepsStats from '../components/StepsStats';
import CalendarList from '../components/CalendarList';

const Stats = () => {
  const data = getDates();

  const scrollY = useSharedValue(0);
  const [selectedDate, setSelectedDate] = useState(data?.[7]);

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
        setSelectedDate={setSelectedDate}
      />

      <Animated.ScrollView
        bounces={false}
        style={styles.container}
        onScroll={scrollHandler}
        showsVerticalScrollIndicator={false}>
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

        {/* Chart */}
        <LineChart
          data={selectedDate?.chart}
          selectedDate={selectedDate?.date}
        />
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
    marginVertical: 24,
    flexDirection: 'row',
  },
});

export default Stats;
