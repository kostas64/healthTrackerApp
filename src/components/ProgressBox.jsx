import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {ProgressCircle} from 'react-native-svg-charts';

import {colors} from '../assets/constants';

const ProgressBox = () => {
  return (
    <>
      <ProgressCircle
        style={styles.chartHeight}
        progress={0.5}
        backgroundColor={colors.lightPurple}
        progressColor={'white'}
        startAngle={0}
        strokeWidth={10}
      />
      <Text style={styles.percentageLabel}>{`50%`}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  chartHeight: {
    height: 106,
  },
  percentageLabel: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    top: 42,
  },
});

export default ProgressBox;
