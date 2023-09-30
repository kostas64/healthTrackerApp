import React from 'react';
import {StatusBar} from 'react-native';

const StatusBarManager = () => {
  return (
    <StatusBar
      translucent
      barStyle={'dark-content'}
      backgroundColor={'transparent'}
    />
  );
};

export default StatusBarManager;
