import React, {useContext} from 'react';
import {View, Text, Switch, StyleSheet} from 'react-native';

import {colors} from '../assets/constants';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';

const NotificationItem = ({item, index}) => {
  const {notifications, setNotifications} = useContext(Context);

  const onSwitchChange = v => {
    let notifyTemp = notifications;
    notifyTemp[index].enabled = v;
    setNotifications([...notifyTemp]);
  };

  return (
    <View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <Switch
          value={item.enabled}
          onValueChange={onSwitchChange}
          thumbColor={'white'}
          trackColor={{true: colors.purple, false: colors.lightGrey}}
        />
      </View>
      {!!item.caption && <Text style={styles.caption}>{item.caption}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: DimUtils.getDP(16),
    borderRadius: DimUtils.getDP(8),
    backgroundColor: colors.lightestPurple,
  },
  itemTitle: {
    fontSize: DimUtils.getFontSize(16),
    color: colors.purple,
    fontFamily: 'Rubik-Regular',
  },
  caption: {
    fontFamily: 'Rubik-Regular',
    marginTop: DimUtils.getDP(6),
    marginBottom: DimUtils.getDP(20),
    paddingHorizontal: DimUtils.getDP(14),
  },
});

export default NotificationItem;
