import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Navigation} from './src/router/BottomTab';
import ContextProvider from './src/context/Context';
import StatusBarManager from './src/components/StatusBarManager';

const App = () => {
  useEffect(() => {
    const hideSplash = async () => {
      await BootSplash.hide({fade: true});
    };

    hideSplash();
  }, []);
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
