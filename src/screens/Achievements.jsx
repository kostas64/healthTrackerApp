import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Achievements = () => {
  return (
    <View style={styles.container}>
      <Header title={'Your achievements'} subtitle={'Check your badges'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Achievements;
