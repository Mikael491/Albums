import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{ props.album.collectionName || props.album.artistName }</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
