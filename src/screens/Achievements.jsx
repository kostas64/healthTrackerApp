import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Achievements = () => {
  return (
    <View style={styles.container}>
      <Text>Achievements</Text>
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
