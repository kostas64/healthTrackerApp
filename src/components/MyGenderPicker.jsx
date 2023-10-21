import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const MyGenderPicker = ({gender, onChange, onPressDone}) => {
  const [selectedLanguage, setSelectedLanguage] = useState(gender);

  return (
    <View style={styles.container}>
      {/* Done button */}
      <TouchableOpacity
        style={{marginRight: DimUtils.getDP(24)}}
        onPress={() => onPressDone(selectedLanguage)}
        hitSlop={styles.doneButton}>
        <Text style={styles.doneLabel}>Done</Text>
      </TouchableOpacity>

      {/* Gender picker */}
      <Picker
        style={{width: WIDTH}}
        selectedValue={selectedLanguage}
        onValueChange={itemValue => {
          onChange(itemValue);
          setSelectedLanguage(itemValue);
        }}>
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
      </Picker>
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

export default MyGenderPicker;
