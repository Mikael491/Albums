import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (object) => {
  return (
    <Card>
      <Text>{ object.album.collectionName || object.album.artistName }</Text>
    </Card>
  );
};

export default AlbumDetail;
