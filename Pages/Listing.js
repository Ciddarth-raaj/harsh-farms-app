import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import ProductCard from '../Components/ProductCard';
import GlobalWrapper from '../Components/GlobalWrapper';

import ProductHelper from '../helper/products';

export default class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_listing: [],
      pageName: 'Categories',
    };
  }

  componentDidMount() {
    const params = this.props.route.params;
    this.setState({pageName: params['category_name']});
    this.getProducts();
  }

  getProducts() {
    ProductHelper.get()
      .then(data => {
        this.setState({product_listing: data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const {product_listing, pageName} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <Text style={styles.heading}>{pageName}</Text>
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
    padding: 20,
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginTop: 20,
  },
});
