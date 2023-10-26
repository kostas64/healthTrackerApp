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

const Activity = ({navigation}) => {
  //Disable back button from Android
  useBackAction();

  const watchRef = useRef();
  const bottomSheetRef = useRef();
  const [modalContent, setModalContent] = useState(null);

  const onPress = () => {
    if (watchRef?.current?.isRunning) {
      watchRef?.current?.pause();
    } else {
      watchRef?.current?.resume();
    }
  };

  const onPressFinish = () => {
    const onPressDone = () => {
      onCloseBottomSheet();
      setTimeout(() => navigation.navigate('Results'), 200);
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

  return (
    <Screen noHeader renderInsetPaddings containerStyle={styles.screen}>
      {/* Timer */}
      <View style={styles.timeContainer}>
        <StopWatch ref={watchRef} />
        <Text style={styles.sectionLabel}>TIME</Text>
      </View>

      {/* Distance */}
      <View style={styles.disContainer}>
        <Text style={styles.distance}>0,00</Text>
        <Text style={styles.sectionLabel}>KILOMETERS</Text>
      </View>

      <View>
        {/* Current speed | Avg Speed */}
        <View style={styles.speedsContainer}>
          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>0,00</Text>
            <Text style={styles.sectionLabel}>CUR SPEED</Text>
          </View>
          <View style={styles.speedContainer}>
            <Text style={styles.speedLabel}>0,00</Text>
            <Text style={styles.sectionLabel}>AVG SPEED</Text>
          </View>
        </View>

        {/* Pause button */}
        <View style={styles.pauseBtnContainer}>
          <TimerButtons onPress={onPress} onPressFinish={onPressFinish} />
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
