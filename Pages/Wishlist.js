import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';
import WishlistCard from '../Components/WishlistCard';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [
        {
          product_id: 1,

          sp: 100,
          product_name: 'Random',

          item_image:
            'https://images.unsplash.com/photo-1622473590864-caf55d61c69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          product_id: 2,

          sp: 10,
          product_name: 'Random',

          item_image:
            'https://images.unsplash.com/photo-1622510993112-b31de77a2424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          product_id: 3,
          sp: 100,
          product_name: 'Random',
          item_image:
            'https://images.unsplash.com/photo-1612564148954-59545876eaa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
      ],
    };
  }
  render() {
    const {wishlist} = this.state;
    return (
      <GlobalWrapper tag={'wishlist'} navigation={this.props.navigation}>
        <Header />
        <Text style={styles.heading}>My Wishlist</Text>
        <View style={styles.mainWrapper}>
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
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
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
});
