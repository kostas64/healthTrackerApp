import React from 'react';
import {View, StyleSheet} from 'react-native';

import Header from '../components/Header';

const Me = () => {
  return (
    <View style={styles.container}>
      <Header title={'Me'} subtitle={'Profile'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Me;
