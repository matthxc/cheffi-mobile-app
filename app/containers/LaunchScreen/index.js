// @flow

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {};
class LaunchScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Launch Screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default LaunchScreen;
