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

import ImageCarousel from '../Components/ImageCarousal';
import GlobalWrapper from '../Components/GlobalWrapper';
import ProductCard from '../Components/ProductCard';

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
          product_name: 'Red Apple | Best Quality | 1 Kg',
          item_image:
            'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
          discount: '30% offer',
          available_stock: '100 in stock',
        },
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Orange | Top Grade | 1 Kg',
          discount: '30% offer',
          available_stock: '100 in stock',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
        },
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Orange | Top Grade | 1 Kg',
          discount: '30% offer',
          available_stock: '100 in stock',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
        },
        {
          product_id: 1,
          mrp: 200,
          sp: 100,
          product_name: 'Orange | Top Grade | 1 Kg',
          discount: '30% offer',
          available_stock: '100 in stock',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
        },
      ],
    };
  }
  render() {
    const {product_listing} = this.state;
    return (
      <GlobalWrapper tag={'home'} navigation={this.props.navigation}>
        <View>
          <View style={styles.container}>
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
          </View>
        </View>
        <ImageCarousel
          data={[
            {
              url: 'https://i2.wp.com/kgsadvisors.com/wp-content/uploads/2020/06/Hero-Banner-Placeholder-Light-1024x480-1.png?fit=1024%2C480&ssl=1',
            },
            {
              url: 'https://www.cellmax.eu/wp-content/uploads/2020/01/Hero-Banner-Placeholder-Dark-1024x480-1.png',
            },
          ]}
        />

        <Text style={styles.heading}>New Products</Text>

        <View style={styles.wrapper}>
          {product_listing.map(p => (
            <ProductCard
              id={p.product_id}
              name={p.product_name}
              mrp={p.mrp}
              sp={p.sp}
              image={p.item_image}
              discount={p.discount}
              stock={p.available_stock}
            />
          ))}
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 20,
    marginTop: 30,
  },
});
