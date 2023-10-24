import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Screen from '../components/Screen';
import {L_SPACE} from '../assets/constants';
import {DimUtils} from '../utils/DimensionUtils';
import {activities} from '../assets/activitiesData';
import ActivityItem from '../components/ActivityItem';

const ListHeader = () => <Text style={styles.title}>{'Choose activity'}</Text>;

const Train = ({route}) => {
  const insets = useSafeAreaInsets();
  const fromLabel = route?.params?.from;

  const paddingBottom = insets.bottom > 0 ? insets.bottom : 2 * L_SPACE;

  const renderItem = ({item, index}) => (
    <ActivityItem key={`activity-${index}`} item={item} />
  );

  return (
    <Screen
      noHeader
      hasBackButton
      renderInsetPaddings
      rotateBack={'-90deg'}
      backButtonLabel={fromLabel}
      containerStyle={styles.containerStyle}>
      {/* Title */}

      <FlatList
        numColumns={2}
        data={activities}
        renderItem={renderItem}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={{paddingBottom}}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 0,
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    marginBottom: DimUtils.getDP(8),
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
});

export default Train;
