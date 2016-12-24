import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

// const App = () =>
//    (
//     <Text>Hey Winta!</Text>
//   );

class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent('albums', () => App);
