/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StatusBar, useColorScheme, Text} from 'react-native';
import Navigation from './app/navigations/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
