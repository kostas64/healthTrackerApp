import * as shape from 'd3-shape';
import {AreaChart} from 'react-native-svg-charts';
import {StackedBarChart} from 'react-native-svg-charts';
import React, {useContext, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Gradient} from './Gradient';
import BoxFooter from './BoxFooter';
import ProgressBox from './ProgressBox';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import LoadingHeartRate from './LoadingHeartRate';
import {water, waterClrs, waterKeys} from '../assets/data';
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
  const interval = useRef();
  const {bpmState, setBpmState} = useContext(Context);

  const bgColor = isDark ? colors.purple : 'white';
  const textColor = {color: isDark ? 'white' : 'black'};
  const bottomValue = !!hasLinear
    ? bpmState?.[bpmState?.length - 1]
    : bottomTitle;

  const border = !isDark && {
    borderColor: colors.lightGrey,
    borderWidth: 1,
  };

  const showFooter = !hasLinear || bpmState?.length >= 5;

  useEffect(() => {
    if (hasLinear && bpmState?.length === 0) {
      interval.current = setInterval(() => {
        const rand = Math.floor(Math.random() * (125 - 50 + 1)) + 50;

        setBpmState(old => {
          if (old.length <= 19) {
            return [...old, rand];
          } else {
            return [...old.slice(1), rand];
          }
        });
      }, 5000);
    }
  }, []);

  return (
    <View style={[border, {backgroundColor: bgColor}, styles.container]}>
      {/* Label & Icon */}
      <View style={styles.rowBetween}>
        <Text style={[styles.title, textColor]}>{title}</Text>
        <Image source={icon} style={[styles.icon, {tintColor}]} />
      </View>

      {hasLinear && bpmState?.length >= 5 && (
        <AreaChart
          style={styles.lineChart}
          gridMin={4}
          gridMax={200}
          data={bpmState}
          curve={shape.curveNatural}
          svg={styles.svg}>
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
      {showFooter ? (
        <BoxFooter
          textColor={textColor}
          bottomValue={bottomValue}
          bottomSubtitle={bottomSubtitle}
          footerContainer={footerContainer}
        />
      ) : (
        <LoadingHeartRate />
      )}
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
  svg: {
    strokeWidth: 3,
    stroke: colors.lightRed,
    fill: 'url(#gradient)',
  },
});

export default Box;
