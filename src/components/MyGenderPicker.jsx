import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import CustomPicker from './CustomPicker';
import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const items = ['Male', 'Female', 'Other'];

const MyGenderPicker = ({gender, onChange, onPressDone, contHeight}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(gender);

  return (
    <View>
      {/* Done button */}
      <TouchableOpacity
        style={styles.alignEnd}
        onPress={() => onPressDone(selectedLanguage)}
        hitSlop={styles.doneButton}>
        <Text style={styles.doneLabel}>Done</Text>
      </TouchableOpacity>

      {/* Gender picker */}
      <View style={styles.pickerContainer}>
        <CustomPicker
          items={items}
          contHeight={contHeight}
          indexToStart={items?.findIndex(item => item === gender)}
          itemHeight={32}
          onIndexChange={index => {
            onChange(items[index]);
            setSelectedLanguage(items[index]);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alignEnd: {
    alignSelf: 'flex-end',
    marginRight: DimUtils.getDP(24),
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

export default MyGenderPicker;
