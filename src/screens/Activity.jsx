import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

import Screen from '../components/Screen';
import StopWatch from '../components/StopWatch';
import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';
import useBackAction from '../hooks/useBackAction';
import TimerButtons from '../components/TimerButtons';
import CustomBottomSheet from '../components/CustomBottomSheet';
import FinishActivityModal from '../components/FinishActivityModal';

const Activity = ({navigation, route}) => {
  //Disable back button from Android
  useBackAction();

  const {activity} = route?.params || {};

  const interval = useRef();
  const watchRef = useRef();
  const bottomSheetRef = useRef();

  const [speeds, setSpeeds] = useState([]);
  const [curSpeed, setCurSpeed] = useState('0,00');
  const [avgSpeed, setAvgSpeed] = useState('0,00');
  const [distance, setDistance] = useState(0);

  const [isRunning, setIsRunning] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  const distanceFormated = distance.toFixed(2)?.replace('.', ',');

  const onPress = () => {
    if (watchRef?.current?.isRunning) {
      watchRef?.current?.pause();
      setIsRunning(false);
    } else {
      watchRef?.current?.resume();
      setIsRunning(true);
    }
  };

  const onPressFinish = () => {
    const onPressDone = () => {
      const time = watchRef?.current?.extractTime();

      onCloseBottomSheet();
      setTimeout(
        () =>
          navigation.navigate('Results', {
            activity,
            avgSpeed,
            distance,
            time,
          }),
        200,
      );
    };

    setModalContent(
      <FinishActivityModal
        onPressDone={onPressDone}
        onPressFinish={onCloseBottomSheet}
      />,
    );
  };

  const onCloseBottomSheet = React.useCallback(() => {
    !!bottomSheetRef?.current && bottomSheetRef?.current?.close();
    setModalContent(null);
  }, []);

  //No need for useEffect
  if (modalContent) {
    bottomSheetRef.current.expand();
  }

  useEffect(() => {
    watchRef.current?.start();
  }, []);

  useEffect(() => {
    if (isRunning) {
      interval.current = setInterval(() => {
        setCurSpeed(() => {
          const value = Number(Math.random() * 15)?.toFixed(2);
          const valueFormatted = `${value}`?.replace('.', ',');
          setSpeeds(old => [...old, Number(value)]);
          setDistance(old => Number(old) + Number(value) * 0.001);
          return valueFormatted;
        });
      }, 3600);
    } else {
      clearInterval(interval.current);
      interval.current = null;
    }
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      setAvgSpeed(() => {
        const value = Number(
          speeds?.reduce((acc, cur) => acc + cur, 0) / speeds?.length || 0,
        )?.toFixed(2);

        return `${value}`?.replace('.', ',');
      });
    }
  }, [curSpeed]);

  return (
    <Screen noHeader renderInsetPaddings containerStyle={styles.screen}>
      {/* Timer */}
      <View style={styles.timeContainer}>
        <StopWatch ref={watchRef} />
        <Text style={styles.sectionLabel}>TIME</Text>
      </View>

      {/* Distance */}
      <View style={styles.disContainer}>
        <Text style={styles.distance}>{distanceFormated}</Text>
        <Text style={styles.sectionLabel}>KILOMETERS</Text>
      </View>

      <View>
        {/* Current speed | Avg Speed */}
        <View style={styles.speedsContainer}>
          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>{curSpeed}</Text>
            <Text style={styles.sectionLabel}>CUR SPEED</Text>
          </View>
          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>{avgSpeed}</Text>
            <Text style={styles.sectionLabel}>AVG SPEED</Text>
          </View>
        </View>

        {/* Pause button */}
        <View style={styles.pauseBtnContainer}>
          <TimerButtons
            onPress={onPress}
            disabledPause={!isRunning}
            onPressFinish={onPressFinish}
          />
        </View>
      </View>

      {/* Finish modal */}
      <CustomBottomSheet
        ref={bottomSheetRef}
        snapPoints={[220]}
        modalContent={modalContent}
        onCloseBottomSheet={onCloseBottomSheet}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    paddingHorizontal: DimUtils.getDP(24),
  },
  timeContainer: {
    alignItems: 'center',
    borderRadius: DimUtils.getDP(32),
    paddingVertical: DimUtils.getDP(24),
  },
  disContainer: {
    borderRadius: DimUtils.getDP(32),
    paddingVertical: DimUtils.getDP(16),
    alignItems: 'center',
  },
  speedsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  speedContainer: {
    width: (WIDTH - DimUtils.getDP(64)) / 2,
    padding: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(32),
    alignItems: 'center',
  },
  sectionLabel: {
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
    fontSize: DimUtils.getFontSize(18),
  },
  distance: {
    color: colors.purple,
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getFontSize(86),
  },
  speedLabel: {
    color: colors.purple,
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getFontSize(42),
  },
  pauseBtnContainer: {
    marginTop: DimUtils.getDP(8),
    alignItems: 'center',
  },
});

export default Activity;
