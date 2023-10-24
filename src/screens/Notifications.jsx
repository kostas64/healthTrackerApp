import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

import Screen from '../components/Screen';
import {colors} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';

const Item = ({title, subtitle, caption}) => {
  const [switchEn, setSwitchEn] = useState(true);

  return (
    <View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>{title}</Text>
          {subtitle && <Text style={styles.itemSubtitle}>{subtitle}</Text>}
        </View>
        <Switch
          value={switchEn}
          onValueChange={v => setSwitchEn(v)}
          thumbColor={'white'}
          trackColor={{true: colors.purple, false: colors.lightGrey}}
        />
      </View>
      {!!caption && <Text style={styles.caption}>{caption}</Text>}
    </View>
  );
};

const Notifications = () => {
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
      <Item
        title={'Daily Coaching'}
        caption={
          'Get notifications that help you complete your Activity goals.'
        }
      />
      <Item
        title={'Goal Completions'}
        caption={
          'Receive a notification when you close your Move ring or earn an award.'
        }
      />
      <Item
        title={'Activity Sharing'}
        caption={
          'Receive a notification when someone who shares Activity with you completes a workout or earns an award.'
        }
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
  itemSubtitle: {
    fontSize: DimUtils.getFontSize(14),
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

export default Notifications;
