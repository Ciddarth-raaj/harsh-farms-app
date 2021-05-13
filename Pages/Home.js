import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
} from 'react-native';

import Colors from '../Constants/colors';

import GlobalWrapper from '../Components/GlobalWrapper';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <GlobalWrapper tag={'home'} navigation={this.props.navigation}>
          <View></View>
        </GlobalWrapper>
      </SafeAreaView>
    );
  }
}
