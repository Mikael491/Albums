import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// const App = () =>
//    (
//     <Text>Hey Winta!</Text>
//   );

class HelloWinta extends Component {
  render() {
    return <Header />;
  }
}

AppRegistry.registerComponent('albums', () => HelloWinta);
