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
import GlobalWrapper from '../Components/GlobalWrapper';
import OrderProductCard from '../Components/OrderProductCard';
import Colors from '../Constants/colors';
import Styles from '../Constants/styles';
import numberFormatter from '../util/numberFormatter';

export default class OrderDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',

      email: '',
      address: '',
      selectedSociety: '',
      society: '',
      phone: '',
      number_products: 2,
      price: 33,
      deleivery: 3434,
      total: 232323,
      product_listing: [
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',
          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',

          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',
          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
      ],
    };
  }
  render() {
    const {
      name,

      phone,
      email,
      address,
      selectedSociety,
      number_products,
      price,
      deleivery,
      total,

      product_listing,
    } = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <SafeAreaView>
          <View style={styles.mainWrapper}>
            <Text style={Styles.heading}>Profile Details</Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Name : </Text>
              {name}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Mobile Number : </Text>
              {phone}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Email : </Text>
              {email}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Address : </Text>
              {address}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Society : </Text>
              {selectedSociety}
            </Text>

            <Text style={Styles.heading}>Products</Text>

            {product_listing.map(p => (
              <OrderProductCard
                id={p.product_id}
                name={p.product_name}
                mrp={p.original_price}
                sp={p.selling_price}
                image={p.image}
                navigation={this.props.navigation}
                quantity={p.quantity}
                navigation={this.props.navigation}
              />
            ))}

            <Text style={Styles.heading}>Product Summary</Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Number of products : </Text>
              {number_products}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Price : </Text>
              {numberFormatter(price)}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Deleivery Charge : </Text>
              {numberFormatter(deleivery)}
            </Text>
            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Total : </Text>
              {numberFormatter(total)}
            </Text>
          </View>
        </SafeAreaView>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.primary,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 12,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 15,
  },
});
