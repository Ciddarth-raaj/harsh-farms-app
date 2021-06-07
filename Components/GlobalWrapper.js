import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';

import Colors from '../Constants/colors';

import Header from '../Components/Header';

export default class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {children} = this.props;
    return (
      <>
        <SafeAreaView style={{backgroundColor: Colors.primary}} />
        <SafeAreaView>
          <Header />
          <ScrollView>{children}</ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    // flex: 1,
    // alignItems: 'center',
    // flexDirection: 'column',
    // marginTop: 50,
  },
});
