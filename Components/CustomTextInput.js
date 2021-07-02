import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Colors from '../Constants/colors';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      label,
      secureTextEntry,
      toggleSecure,
      multiline,
      error,
      customStyle,
    } = this.props;
    return (
      <View>
        <Text style={[styles.label, error && {color: 'red'}]}>{label}</Text>
        <View style={styles.container}>
          <TextInput
            style={[
              styles.inputText,
              multiline ? {height: 100, paddingTop: 10} : {},
              error && {borderColor: 'red'},
              customStyle,
            ]}
            {...this.props}
          />
          {secureTextEntry !== undefined && (
            <TouchableOpacity
              style={styles.eyeContainer}
              onPress={() => toggleSecure(!secureTextEntry)}>
              <Image
                source={
                  secureTextEntry
                    ? require('../Assets/eye.png')
                    : require('../Assets/eye-hidden.png')
                }
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 12,
  },
  container: {
    position: 'relative',
  },
  eyeContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  eyeIcon: {
    width: 20,
    height: 20,
  },
});
