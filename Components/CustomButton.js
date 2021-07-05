import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Colors from '../Constants/colors';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {wrapperStyle, textStyle, children, onPress} = this.props;

    return (
      <TouchableOpacity
        style={[styles.wrapperStyle, wrapperStyle]}
        onPress={onPress}>
        <Text style={[styles.textStyle, textStyle]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  wrapperStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.primary,
    flex: 1,
    borderRadius: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
  },
});
