import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';

import GlobalWrapper from '../Components/GlobalWrapper';
import ProductCard from '../Components/ProductCard';
import CustomButton from '../Components/CustomButton';

import WishlistHelper from '../helper/wishlist';

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
      this.getWishlist();
    }
  }

  getWishlist() {
    WishlistHelper.get()
      .then(data => this.setState({wishlist: data}))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const {wishlist} = this.state;
    return (
      <GlobalWrapper tag={'wishlist'} navigation={this.props.navigation}>
        {wishlist.length > 0 ? (
          <View style={styles.wrapper}>
            <Text style={Styles.heading}>{'Wishlist'}</Text>
            {wishlist.map(p => (
              <ProductCard
                id={p.product_id}
                name={p.product_name}
                mrp={p.original_price}
                sp={p.selling_price}
                image={p.image}
                tag={p.batch_tag}
                stock={p.available_stock}
                navigation={this.props.navigation}
                type={'wishlist'}
              />
            ))}
          </View>
        ) : (
          <View style={styles.wrapper}>
            <Image
              source={require('../Assets/wishlist.png')}
              style={styles.image}
            />
            <Text style={Styles.heading}>Your Wishlist is empty</Text>
            <CustomButton
              onPress={() => this.props.navigation.navigate('Home')}>
              {'Start Adding'}
            </CustomButton>
          </View>
        )}
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
    tintColor: Colors.secondary,
  },
});
