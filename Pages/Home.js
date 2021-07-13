import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../Constants/colors';

import ImageCarousel from '../Components/ImageCarousal';
import GlobalWrapper from '../Components/GlobalWrapper';
import ProductCard from '../Components/ProductCard';
import CustomTextInput from '../Components/CustomTextInput';

import ProductHelper from '../helper/products';
import BannersHelper from '../helper/banners';

const images = [
  'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1850&q=80',
  'https://images.unsplash.com/photo-1621233465510-5cea2ac64501?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1618236497374-549103ce51e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
];

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_listing: [],
      banners: [],
      searchText: '',
    };
  }

  async componentDidMount() {
    const accessToken = await AsyncStorage.getItem('token');
    if (accessToken != undefined && accessToken != null) {
      global.accessToken = accessToken;
      global.clt_type = await AsyncStorage.getItem('clt-type-id');
    }

    this.getProducts();
    this.getBanners();
  }

  getBanners() {
    BannersHelper.get()
      .then(data => {
        this.setState({banners: data});
      })
      .catch(err => {
        console.log(err);
      });
  }

  getProducts() {
    ProductHelper.get()
      .then(data => {
        this.setState({product_listing: data});
      })
      .catch(err => console.log(err));
  }

  search() {
    const {searchText} = this.state;
    this.props.navigation.replace('Listing', {
      title: searchText,
      type: 'search',
    });
  }

  render() {
    const {product_listing, banners, searchText} = this.state;
    return (
      <GlobalWrapper tag={'home'} navigation={this.props.navigation}>
        <View style={styles.searchContainer}>
          <TextInput
            style={{flex: 1}}
            placeholder="Search"
            placeholderTextColor={'#d9d9d9'}
            value={searchText}
            onChangeText={v => this.setState({searchText: v})}
          />
          <TouchableOpacity onPress={() => this.search()}>
            <Image
              source={require('../Assets/search.png')}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>

        {banners.length > 0 && <ImageCarousel data={banners} />}

        <Text style={styles.heading}>New Products</Text>

        <View style={styles.wrapper}>
          {product_listing.map(p => (
            <ProductCard
              id={p.product_id}
              name={p.product_name}
              mrp={p.original_price}
              sp={p.selling_price}
              image={p.image}
              tag={p.batch_tag}
              stock={p.available_stock}
              navigation={this.props.navigation}
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
  searchContainer: {
    paddingLeft: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: Colors.primary,
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  imageStyle: {
    height: 20,
    width: 20,
    marginRight: 10,
    resizeMode: 'stretch',
    alignItems: 'center',
    tintColor: Colors.secondary,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 0,
    marginTop: 20,
  },
});
