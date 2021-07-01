import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalWrapper from '../Components/GlobalWrapper';
import WishlistCard from '../Components/WishlistCard';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [],
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    global.accessToken = token;

    if (token == undefined || token == null) {
      Alert.alert(
        'Wishlist',
        'Login to view this page',
        [
          {
            text: 'Cancel',
            style: 'destructive',
            onPress: () => this.props.navigation.goBack(),
          },
          {
            text: 'Sign In',
            onPress: () => this.props.navigation.navigate('Signin'),
          },
          {
            text: 'Login',
            onPress: () => this.props.navigation.navigate('Login'),
          },
        ],
        {cancelable: false},
      );
    } else {
      // this.getCart();
    }
  }

  render() {
    const {wishlist} = this.state;
    return (
      <GlobalWrapper tag={'wishlist'} navigation={this.props.navigation}>
        {wishlist.length > 0 ? (
          <View style={styles.mainWrapper}>
            <Text style={styles.heading}>My Wishlist</Text>
            {wishlist.map(c => (
              <WishlistCard
                id={c.product_id}
                name={c.product_name}
                // updateCart={this.updateCart}
                price={c.sp}
                image={c.item_image}
              />
            ))}
            {/* <WishlistCard /> */}
          </View>
        ) : (
          <View style={styles.mainSubWrapper}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1539799827118-e091578f7011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
              }}
              style={styles.image}
            />
            <Text style={styles.heading}>Your Wishlist is empty</Text>
            <Text style={styles.heading}>
              Add items to your wishlist and they will appear here
            </Text>
          </View>
        )}
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
  },
  mainSubWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'right',
    marginBottom: 10,
    fontSize: 18,
  },
  shareButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
});
