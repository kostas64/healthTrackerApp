import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

import {images} from '../assets/images';
import Header from '../components/Header';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, XL_SPACE, colors} from '../assets/constants';

const data = [
  {
    title: 'Health details',
    screen: 'HealthDetails',
  },
  {
    title: 'Change move detais',
    screen: 'SetGoal',
  },
];

const Item = ({title, subtitle, screen}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
      </View>
      <Image source={images.arrow} style={styles.arrow} />
    </TouchableOpacity>
  );
};

const Table = ({array}) => {
  const navigation = useNavigation();

  const onPress = item => {
    !!item.screen && navigation.navigate(item.screen);
  };

  return (
    <View style={styles.tableContainer}>
      {array.map((item, key) => (
        <View key={key}>
          {key !== 0 && <View style={styles.hr} />}
          <TouchableOpacity
            onPress={() => onPress(item)}
            style={styles.tableItemContainer}>
            <Text key={key} style={styles.tableItemTitle}>
              {item.title}
            </Text>
            <Image source={images.arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const Me = () => {
  const {user} = useContext(Context);

  return (
    <View style={styles.container}>
      <Header title={'Me'} subtitle={'Profile'} />

      <View style={{marginTop: XL_SPACE}} />
      <Item
        title={`${user.name} ${user.surname}`}
        subtitle={user.email}
        screen={'Account'}
      />

      <View style={{marginTop: 2 * L_SPACE}} />
      <Table array={data} />

      <View style={{marginTop: 2 * L_SPACE}} />
      <Item title={'Notifications'} screen={'Notifications'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(8),
    marginHorizontal: DimUtils.getDP(24),
    backgroundColor: colors.lightestPurple,
  },
  itemTitle: {
    fontSize: DimUtils.getFontSize(16),
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
  },
  itemSubtitle: {
    fontSize: DimUtils.getFontSize(14),
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
  },
  arrow: {
    transform: [{rotate: '180deg'}],
    tintColor: colors.lightPurple,
    width: DimUtils.getDP(16),
    height: DimUtils.getDP(16),
  },
  tableContainer: {
    borderRadius: DimUtils.getDP(8),
    marginHorizontal: DimUtils.getDP(24),
    backgroundColor: colors.lightestPurple,
  },
  hr: {
    height: 1,
    marginLeft: DimUtils.getDP(14),
    backgroundColor: colors.lightPurple,
  },
  tableItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(8),
    backgroundColor: colors.lightestPurple,
  },
  tableItemTitle: {
    fontSize: DimUtils.getFontSize(16),
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
  },
});

export default Me;
