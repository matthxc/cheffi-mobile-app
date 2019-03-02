import './config';
import React, { Component } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Root, StyleProvider } from 'native-base';
import ReduxNavigation from './navigation/ReduxNavigation';
import DebugConfig from './config/DebugConfig';
import createStore from './redux';
import getTheme from './theme/native-base-theme/components';
import platform from './theme/native-base-theme/variables/platform';

// create our store
const store = createStore();

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(platform)}>
          <Root>
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />
              <ReduxNavigation />
            </View>
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
