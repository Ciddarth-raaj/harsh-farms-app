import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  ScrollView,
  Image,
} from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.wrapper}>Header Goes Here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
  },
});
