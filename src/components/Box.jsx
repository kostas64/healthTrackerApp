import React from 'react';
import * as shape from 'd3-shape';
import {AreaChart} from 'react-native-svg-charts';
import {StackedBarChart} from 'react-native-svg-charts';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Gradient} from './Gradient';
import ProgressBox from './ProgressBox';
import {DimUtils} from '../utils/DimensionUtils';
import {bpm, water, waterClrs, waterKeys} from '../assets/data';
import {L_SPACE, WIDTH, XL_SPACE, colors} from '../assets/constants';

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
  progress,
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
          <ProgressBox progress={progress} />
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
    padding: DimUtils.getDP(2 * L_SPACE),
    borderRadius: DimUtils.getDP(32),
    overflow: 'hidden',
  },
  title: {
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Medium',
  },
  footerSubtitle: {
    fontSize: DimUtils.getFontSize(14),
    fontFamily: 'Rubik-Regular',
    color: colors.lightGrey,
  },
  percentageLabel: {
    fontSize: DimUtils.getFontSize(18),
    fontWeight: '700',
    textAlign: 'center',
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    top: 42,
  },
  icon: {
    width: DimUtils.getDP(24),
    height: DimUtils.getDP(24),
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
