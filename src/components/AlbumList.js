import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://itunes.apple.com/lookup?id=271256&entity=album')
      .then(response => this.setState({ albums: response.data.results }));
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
    <Text key={album.collectionId || album.artistId}>
    { album.collectionName || album.artistName }</Text>);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;
