import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import BottomStack from './src/router/BottomTab';
import {L_SPACE, XL_SPACE} from './src/assets/constants';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <BottomStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3 * XL_SPACE,
    marginHorizontal: 2 * L_SPACE,
  },
  boxContainer: {
    marginTop: 3 * L_SPACE,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  marginTopXL: {
    marginTop: XL_SPACE,
  },
  marginTopXXL: {
    marginTop: 2 * XL_SPACE,
  },
});

export default App;
