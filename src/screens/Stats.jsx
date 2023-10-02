import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Stats = () => {
  return (
    <View style={styles.container}>
      <Header title={'Your activities'} subtitle={'Today'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Stats;
