import React from 'react';
import Header from '../Components/Header';
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
import ProductCard from '../Components/ProductCard';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_listing: [
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          item_image:
            'https://images.unsplash.com/photo-1622473590864-caf55d61c69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          discount: '30%',
        },
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          discount: '30%',
          item_image:
            'https://images.unsplash.com/photo-1622473590864-caf55d61c69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      ],
    };
  }
  render() {
    const {product_listing} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Header />

            <View style={styles.wrapper}>
              {product_listing.map(p => (
                <ProductCard
                  id={p.product_id}
                  name={p.product_name}
                  mrp={p.mrp}
                  sp={p.sp}
                  image={p.item_image}
                  item_quantity={p.item_quantity}
                  discount={p.discount}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
