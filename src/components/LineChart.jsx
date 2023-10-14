import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import {WIDTH} from '../assets/constants';
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
    marginTop: 16,
    marginBottom: 32,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -30,
    width: WIDTH - 40,
    alignItems: 'center',
  },
});

export default LineChart;
