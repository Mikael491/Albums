import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>Buy now</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    color: '#fff',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: '400',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 5,
    backgroundColor: '#2971b2',
    marginLeft: 20,
    marginRight: 20
  }
};

export default Button;
