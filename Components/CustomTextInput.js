import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

import Colors from '../Constants/colors';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {label} = this.props;
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.inputText} {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
  },
});
