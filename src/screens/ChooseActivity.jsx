import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Screen from '../components/Screen';
import Button from '../components/Button';
import {DimUtils} from '../utils/DimensionUtils';
import {activities} from '../assets/activitiesData';
import ActivityItem from '../components/ActivityItem';
import {L_SPACE, WIDTH, XL_SPACE} from '../assets/constants';

const ListHeader = () => <Text style={styles.title}>{'Choose activity'}</Text>;

const ChooseActivity = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const [selectedAct, setSelectedAct] = React.useState(null);

  const fromLabel = route?.params?.from;

  const paddingBottom = insets.bottom > 0 ? insets.bottom : 2 * L_SPACE;
  const listBottomSpace = paddingBottom + 4 * XL_SPACE;

  const onPress = () =>
    navigation.navigate('Activity', {
      activity: selectedAct,
    });

  const renderItem = ({item, index}) => {
    const isSelected = item.label === selectedAct;

    const onPress = () => {
      if (selectedAct === item.label) {
        setSelectedAct(null);
        return;
      }

      setSelectedAct(item.label);
    };

    return (
      <ActivityItem
        key={`activity-${index}`}
        item={item}
        onPress={onPress}
        isSelected={isSelected}
      />
    );
  };

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
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: listBottomSpace}}
      />

      {/* Start activity */}
      <Button
        onPress={onPress}
        disabled={!selectedAct}
        label={'Start activity'}
        buttonContainerStyle={[
          styles.buttonContainer,
          {bottom: paddingBottom},
          !selectedAct && {opacity: 0.3},
        ]}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingBottom: 0,
    alignItems: 'center',
    paddingHorizontal: DimUtils.getDP(24),
  },
  title: {
    marginBottom: DimUtils.getDP(8),
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  buttonContainer: {
    position: 'absolute',
    width: WIDTH - 48,
  },
});

export default ChooseActivity;
