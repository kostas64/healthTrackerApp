import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import Screen from '../components/Screen';
import {Context} from '../context/Context';
import {DimUtils} from '../utils/DimensionUtils';
import NotificationItem from '../components/NotificationItem';

const Notifications = () => {
  const {notifications} = useContext(Context);

  const renderItem = ({item, index}) => (
    <NotificationItem key={`notify-${index}`} item={item} index={index} />
  );

  return (
    <Screen
      noHeader
      hasBackButton
      renderInsetPaddings
      backButtonLabel={'Profile'}
      containerStyle={styles.containerStyle}>
      {/* Title & Subtitle */}
      <View>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* Notifications */}
      <Text style={styles.activityLabel}>Activity</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  activityLabel: {
    marginTop: DimUtils.getDP(24),
    marginBottom: DimUtils.getDP(8),
    marginLeft: DimUtils.getDP(16),
    fontFamily: 'Rubik-Medium',
    fontSize: DimUtils.getDP(18),
  },
});

export default Notifications;
