/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { MutableRefObject, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigator from './src/navigation/appNavigator';
import store, { persistor } from './src/store';
import { fetchSessionId } from './src/store/reducerSlice/auth'
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { changeRoute } from './src/store/reducerSlice/experiment';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const routeNameRef: MutableRefObject<any | undefined> = useRef();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  useEffect(() => {
    store.dispatch(fetchSessionId())
  }, [])

  const getActiveRouteName = (state: NavigationState | undefined): string => {
    // @ts-ignore todo
    const route = state.routes[state.index];
  
    if (route.state) {
      // Dive into nested navigators
      // @ts-ignore todo
      return getActiveRouteName(route.state);
    }
  
    return route.name;
  };

  const onStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = getActiveRouteName(state);
    if (previousRouteName !== currentRouteName) {
      store.dispatch(changeRoute(currentRouteName))
    }
    routeNameRef.current = currentRouteName;
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer onStateChange={onStateChange}>
          <AppNavigator />
        </NavigationContainer>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
