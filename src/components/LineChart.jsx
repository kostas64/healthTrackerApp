import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {WIDTH} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';
import LineChartTooltip from './LineChartTooltip';
import ListChartSquadItem from './ListChartSquadItem';

const LineChart = ({data, selectedDate}) => {
  const isFocused = useIsFocused();
  const [tooltip, setTooltip] = useState('');

  useEffect(() => {
    if (!isFocused || selectedDate) {
      setTooltip('');
    }
  }, [isFocused, selectedDate]);

  return (
    <View style={styles.chartContainer}>
      <View style={styles.tooltipContainer}>
        <LineChartTooltip tooltip={tooltip} />
      </View>
      <ListChartSquadItem
        index={0}
        data={data?.morning}
        selectedDate={selectedDate}
        onPress={value => setTooltip(value)}
      />
      <ListChartSquadItem
        index={1}
        data={data?.noon}
        selectedDate={selectedDate}
        onPress={value => setTooltip(value)}
      />
      <ListChartSquadItem
        index={2}
        data={data?.afternoon}
        selectedDate={selectedDate}
        onPress={value => setTooltip(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    marginTop: DimUtils.getDP(24),
    marginBottom: DimUtils.getDP(32),
    marginHorizontal: DimUtils.getDP(16),
    flexDirection: 'row',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -24,
    width: WIDTH - 40,
    alignItems: 'center',
  },
});

export default LineChart;
