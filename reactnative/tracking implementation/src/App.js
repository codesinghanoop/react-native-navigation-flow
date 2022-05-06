/**
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import RootNavigator from './navigation/RootNavigator';

const App: () => Node = () => {
  return <RootNavigator />;
};

export default App;
