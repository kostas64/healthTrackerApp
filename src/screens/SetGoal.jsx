import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';
import Screen from '../components/Screen';
import {Context} from '../context/Context';
import Counter from '../components/Counter';
import {DimUtils} from '../utils/DimensionUtils';

const SetGoal = ({navigation, route}) => {
  const {goalSteps, setGoalSteps} = useContext(Context);
  const [number, setNumber] = useState(goalSteps);

  const fromLabel = route?.params?.from;

  const subtitle =
    "Set a goal based on how active you are, or how active you'd like to be, each day.";

  const changeNumber = action => {
    setNumber(old => (action === 'add' ? old + 10 : old - 10));
  };

  return (
    <Screen
      noHeader
      backButtonLabel={fromLabel}
      renderInsetPaddings
      hasBackButton
      containerStyle={styles.containerStyle}>
      <View style={styles.innerContainer}>
        {/* Title & Subtitle */}
        <View>
          <Text style={styles.title}>Your Daily Move Goal</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        {/* Counter */}
        <Counter
          number={number}
          setNumber={setNumber}
          changeNumber={changeNumber}
        />

        {/* Button */}
        <Button
          label={'Change move goal'}
          onPress={() => {
            setGoalSteps(number);
            navigation.pop();
          }}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: DimUtils.getDP(24),
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    alignSelf: 'center',
    fontSize: DimUtils.getFontSize(32),
    fontFamily: 'Rubik-SemiBold',
  },
  subtitle: {
    marginTop: DimUtils.getDP(16),
    fontSize: DimUtils.getFontSize(16),
    fontFamily: 'Rubik-Regular',
    textAlign: 'center',
  },
});

export default SetGoal;
