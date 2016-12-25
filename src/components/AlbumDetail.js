import React from 'react';
import { Text } from 'react-native';

const AlbumDetail = (object) => {
  return (
      <Text>
        { object.album.collectionName || object.album.artistName }
      </Text>
  );
};

export default AlbumDetail;
