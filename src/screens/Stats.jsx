import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Stats = () => {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
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
