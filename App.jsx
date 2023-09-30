import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import BottomStack from './src/router/BottomTab';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <StatusBarManager />
      <NavigationContainer>
        <BottomStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
