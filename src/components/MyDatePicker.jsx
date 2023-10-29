import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const MyDatePicker = ({date, onChange, onPressDone}) => {
  const [dateSt, setDateSt] = useState(date);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.alingEnd}
        onPress={() => onPressDone(dateSt)}
        hitSlop={styles.doneButton}>
        <Text style={styles.doneLabel}>Done</Text>
      </TouchableOpacity>
      <View style={styles.pickerContainer}>
        <DatePicker
          mode="date"
          date={dateSt}
          textColor="black"
          style={{width: WIDTH}}
          androidVariant="iosClone"
          onDateChange={date => {
            onChange(date);
            setDateSt(date);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alingEnd: {
    alignSelf: 'flex-end',
  },
  container: {
    marginHorizontal: DimUtils.getDP(24),
  },
  doneButton: {
    top: DimUtils.getDP(16),
    left: DimUtils.getDP(16),
    right: DimUtils.getDP(16),
    bottom: DimUtils.getDP(16),
  },
  doneLabel: {
    color: colors.purple,
    fontSize: DimUtils.getFontSize(18),
    fontFamily: 'Rubik-Medium',
    alignSelf: 'flex-end',
  },
  pickerContainer: {
    alignSelf: 'center',
  },
});

export default MyDatePicker;
