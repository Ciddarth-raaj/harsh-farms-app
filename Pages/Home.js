import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

import Colors from '../Constants/colors';

import NavigationWrapper from '../Components/NavigationWrapper';
import ProductCard from '../Components/ProductCard';
import {BackgroundCarousel} from '../Components/BackgroundCarousel';
import Header from '../Components/Header';

const images = [
  'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80',
  'https://images.unsplash.com/photo-1621233465510-5cea2ac64501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1618236497374-549103ce51e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
];

export default class Home extends React.Component {
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
      <>
        <SafeAreaView style={{backgroundColor: Colors.primary}} />
        <SafeAreaView>
          <NavigationWrapper tag={'home'} navigation={this.props.navigation}>
            <Header />
            <View style={styles.mainWrapper}>
              <View style={styles.sectionStyle}>
                <TextInput
                  style={{flex: 1}}
                  placeholder="Search"
                  underlineColorAndroid="transparent"
                />
                <Image
                  source={require('../Assets/search.png')}
                  style={styles.imageStyle}
                />
              </View>
              <View style={styles.container}>
                <BackgroundCarousel images={images} />
              </View>

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
          </NavigationWrapper>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },

  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  mainWrapper: {
    padding: 20,
  },
});
