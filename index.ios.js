import React, { Component } from 'react';
import { Text, AppRegistry } from 'react-native';

// const App = () =>
//    (
//     <Text>Hey Winta!</Text>
//   );

class HelloWinta extends Component {
  render() {
    return (
      <Text>Hey Winta!</Text>
    );
  }
}

AppRegistry.registerComponent('albums', () => HelloWinta);
