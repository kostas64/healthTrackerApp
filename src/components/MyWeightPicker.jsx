import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import CustomPicker from './CustomPicker';
import {colors} from '../assets/constants';
import {WEIGHTS} from '../assets/healthDetails';
import {DimUtils} from '../utils/DimensionUtils';

const MyWeightPicker = ({weight, onChange, onPressDone, contHeight}) => {
  const items = WEIGHTS;
  const [selectedValue, setSelectedValue] = useState(weight);

  return (
    <View>
      {/* Done button */}
      <TouchableOpacity
        style={{marginRight: DimUtils.getDP(24)}}
        onPress={() => onPressDone(selectedValue)}
        hitSlop={styles.doneButton}>
        <Text style={styles.doneLabel}>Done</Text>
      </TouchableOpacity>

      {/* Gender picker */}
      <View style={styles.pickerContainer}>
        <CustomPicker
          items={items}
          contHeight={contHeight}
          indexToStart={items?.findIndex(item => item === weight)}
          itemHeight={32}
          onIndexChange={index => {
            onChange(items[index]);
            setSelectedValue(items[index]);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default MyWeightPicker;
