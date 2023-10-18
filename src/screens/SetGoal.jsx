import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Button from '../components/Button';
import {Context} from '../context/Context';
import Counter from '../components/Counter';
import {DimUtils} from '../utils/DimensionUtils';
import {L_SPACE, M_SPACE} from '../assets/constants';

const SetGoal = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const {goalSteps, setGoalSteps} = useContext(Context);

  const [number, setNumber] = useState(goalSteps);

  const paddingTop = insets.top > 0 ? insets.top + M_SPACE : 2 * L_SPACE;
  const paddingBottom =
    insets.bottom > 0 ? insets.bottom + M_SPACE : 2 * L_SPACE;

  const subtitle =
    "Set a goal based on how active you are, or how active you'd like to be, each day.";

  const changeNumber = action => {
    setNumber(old => (action === 'add' ? old + 10 : old - 10));
  };

  return (
    <View style={[styles.container, {paddingTop, paddingBottom}]}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: DimUtils.getDP(24),
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
