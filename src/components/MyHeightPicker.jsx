import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {DimUtils} from '../utils/DimensionUtils';
import {WIDTH, colors} from '../assets/constants';

const MyHeightPicker = ({height, onChange, onPressDone}) => {
  const [items, setItems] = useState([]);
  const [selectedValue, setSelectedValue] = useState(height);

  useEffect(() => {
    let tmpArr = [];

    for (let i = 30; i <= 250; i++) {
      tmpArr.push(`${i} cm`);
    }

    setItems(tmpArr);

    return () => {
      setItems([]);
    };
  }, []);
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
      <Picker
        style={{width: WIDTH}}
        selectedValue={selectedValue}
        onValueChange={itemValue => {
          onChange(itemValue);
          setSelectedValue(itemValue);
        }}>
        {items.map((item, index) => (
          <Picker.Item key={index} label={item} value={item} />
        ))}
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

export default MyHeightPicker;
