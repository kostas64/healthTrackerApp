import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Navigation} from './src/router/BottomTab';
import StatusBarManager from './src/components/StatusBarManager';
import ContextProvider from './src/context/Context';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBarManager />
        <NavigationContainer>
          <ContextProvider>
            <Navigation />
          </ContextProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
