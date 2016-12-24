import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://itunes.apple.com/search?term=jack+johnson')
      .then(response => console.log(response));
  }

  render() {
    return (
      <View>
        <Text>AlbumList!</Text>
      </View>
    );
  }
}

export default AlbumList;
