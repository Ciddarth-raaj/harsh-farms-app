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
import WishlistCard from '../Components/WishlistCard';

export default class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishlist: [
        // {
        //   product_id: 1,
        //   sp: 100,
        //   product_name: 'Random',
        //   item_image:
        //     'https://images.unsplash.com/photo-1622473590864-caf55d61c69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        // },
        // {
        //   product_id: 2,
        //   sp: 10,
        //   product_name: 'Random',
        //   item_image:
        //     'https://images.unsplash.com/photo-1622510993112-b31de77a2424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        // },
        // {
        //   product_id: 3,
        //   sp: 100,
        //   product_name: 'Random',
        //   item_image:
        //     'https://images.unsplash.com/photo-1612564148954-59545876eaa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        // },
      ],
    };
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
