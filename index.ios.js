import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// const App = () =>
//    (
//     <Text>Hey Winta!</Text>
//   );

class App extends Component {
  render() {
    return <Header headerText={'Albums'} />;
  }
}

AppRegistry.registerComponent('albums', () => App);
