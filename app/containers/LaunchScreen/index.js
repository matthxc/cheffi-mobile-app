// @flow

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Content, Button as NButton, Text } from 'native-base';
import styled from 'styled-components/native';

const Button = styled(NButton)`
  align-self: center;
`;

type Props = {};
class LaunchScreen extends Component<Props> {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Launch Screen!</Text>
            <Button>
              <Text>Example Button</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
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
