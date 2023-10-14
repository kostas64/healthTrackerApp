import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import LineChartItem from './LineChartItem';

const ListChartSquadItem = ({data, onPress, index}) => {
  const hour = index === 0 ? `08:00` : index === 1 ? `16:00` : '23:59';

  const getIndex = nestedI => {
    if (index === 0) {
      if (nestedI === 0) return 0;
      if (nestedI === 1) return 1;
      if (nestedI === 2) return 2;
      if (nestedI === 3) return 3;
    } else if (index === 1) {
      if (nestedI === 0) return 4;
      if (nestedI === 1) return 5;
      if (nestedI === 2) return 6;
      if (nestedI === 3) return 7;
    } else {
      if (nestedI === 0) return 8;
      if (nestedI === 1) return 9;
      if (nestedI === 2) return 10;
      if (nestedI === 3) return 11;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemsContainer}>
        {data?.map((item, key) => (
          <LineChartItem
            key={key}
            index={getIndex(key)}
            onPress={onPress}
            distance={item?.distance}
            calories={item?.calories}
          />
        ))}
      </View>
      <Text style={styles.hour}>{hour}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hour: {
    color: colors.black,
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
  },
});

export default ListChartSquadItem;
