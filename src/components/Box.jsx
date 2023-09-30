import React from 'react';
import * as shape from 'd3-shape';
import {StackedBarChart} from 'react-native-svg-charts';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AreaChart, ProgressCircle} from 'react-native-svg-charts';

import {Gradient} from './Gradient';
import {L_SPACE, WIDTH, XL_SPACE, colors} from '../assets/constants';
import {bpm, water, waterClrs, waterKeys} from '../assets/data';

const Box = ({
  isDark = false,
  hasLinear = false,
  hasStackBar = false,
  title,
  footerContainer,
  bottomTitle,
  bottomSubtitle,
  icon,
  tintColor,
}) => {
  const bgColor = isDark ? colors.purple : 'white';
  const textColor = {color: isDark ? 'white' : 'black'};

  const border = !isDark && {
    borderColor: colors.lightGrey,
    borderWidth: 1,
  };

  return (
    <View style={[border, {backgroundColor: bgColor}, styles.container]}>
      {/* Label & Icon */}
      <View style={styles.rowBetween}>
        <Text style={[styles.title, textColor]}>{title}</Text>
        <Image source={icon} style={[styles.icon, {tintColor}]} />
      </View>

      {hasLinear && (
        <AreaChart
          style={styles.lineChart}
          gridMin={4}
          gridMax={200}
          data={bpm}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 3,
            stroke: colors.lightRed,
            fill: 'url(#gradient)',
          }}>
          <Gradient />
        </AreaChart>
      )}

      {hasStackBar && (
        <StackedBarChart
          spacingInner={0.7}
          style={styles.chartHeight}
          keys={waterKeys}
          colors={waterClrs}
          data={water}
          contentInset={{top: XL_SPACE, bottom: XL_SPACE}}
        />
      )}

      {isDark && (
        <View style={{marginVertical: XL_SPACE}}>
          <ProgressCircle
            style={styles.chartHeight}
            progress={0.5}
            backgroundColor={colors.lightPurple}
            progressColor={'white'}
            startAngle={0}
            strokeWidth={10}
          />
          <Text style={styles.percentageLabel}>{`50%`}</Text>
        </View>
      )}

      {/* Bottom Part */}
      <View style={footerContainer}>
        <Text style={[styles.title, textColor]}>{bottomTitle}</Text>
        <Text style={styles.footerSubtitle}>{bottomSubtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'space-between',
    width: (WIDTH - 48 - 16) / 2,
    padding: 2 * L_SPACE,
    borderRadius: 2 * XL_SPACE,
    overflow: 'hidden',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  footerSubtitle: {
    fontWeight: '400',
    color: colors.lightGrey,
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
  icon: {
    width: 22,
    height: 22,
  },
  lineChart: {
    height: 106,
    position: 'absolute',
    top: 90,
    width: (WIDTH - 48 - 10) / 2,
    alignSelf: 'center',
  },
  chartHeight: {
    height: 106,
  },
});

export default Box;
