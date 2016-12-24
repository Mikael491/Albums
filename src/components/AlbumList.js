import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://itunes.apple.com/search?term=jack+johnson')
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <Text>AlbumList!</Text>
      </View>
    );
  }
}

export default AlbumList;
