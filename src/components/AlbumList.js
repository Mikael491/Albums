import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://itunes.apple.com/lookup?id=271256&entity=album')
      .then(response => this.setState({ albums: response.data.results }));
  }

  renderAlbums() {
    return this.state.albums.map((album) =>
    <AlbumDetail key={album.collectionId || album.artistId} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
