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
import ProductCard from '../Components/ProductCard';

export default class Home extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <GlobalWrapper tag={'home'} navigation={this.props.navigation}>
          <View style={styles.wrapper}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </GlobalWrapper>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
});
