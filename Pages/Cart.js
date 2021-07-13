import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Alert} from 'react-native';

import CartCard from '../Components/CartCard';
import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import Colors from '../Constants/colors';
import {LICENSE_ID} from '../Constants/constants';
import numberFormatter from '../util/numberFormatter';

import CartHelper from '../helper/cart';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      delivery: 0,
      total_quantity: 0,
      subTotal: 0,
      otherCharges: 0,
      discount: 0,
      grandTotal: 0,
      saved: 0,
      terms: '1) All products once purchased cannot be refunded',
    };
  }

  async componentDidMount() {
    const token = await AsyncStorage.getItem('token');
    global.accessToken = token;

    if (token == undefined || token == null) {
      Alert.alert(
        'Cart',
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
      this.getCart();
    }
  }

  getCalculatedData(data) {
    let subTotal = 0;
    let deliveryCharge = 30;
    let actualPrice = 0;

    for (let d of data) {
      subTotal += d.qty * d.selling_price;
      actualPrice += d.qty * d.original_price;
    }

    return {
      subTotal: subTotal,
      deliveryCharge: deliveryCharge,
      grandTotal: subTotal + deliveryCharge,
      saved: actualPrice - subTotal,
    };
  }

  getCart() {
    CartHelper.get()
      .then(data => {
        const calculatedData = this.getCalculatedData(data);
        this.setState({
          cart: data,
          subTotal: calculatedData.subTotal,
          otherCharges: calculatedData.deliveryCharge,
          grandTotal: calculatedData.grandTotal,
          saved: calculatedData.saved,
        });
      })
      .catch(err => console.log(err));
  }

  getSubTotal = cartData => {
    const {cart} = this.state;
    if (cartData === undefined) {
      cartData = cart;
    }
    let subTotal = 0;
    cartData.forEach(c => {
      subTotal += c.qty * c.sp;
    });
    return subTotal;
  };

  modifyData = (product_id, qty) => {
    const {cart} = this.state;

    for (let i in cart) {
      if (cart[i].product_id == product_id) {
        if (qty == undefined) {
          cart.splice(i, 1);
        } else {
          cart[i].qty = qty;
        }
        break;
      }
    }

    const calculatedData = this.getCalculatedData(cart);
    this.setState({
      cart: cart,
      subTotal: calculatedData.subTotal,
      otherCharges: calculatedData.deliveryCharge,
      grandTotal: calculatedData.grandTotal,
      saved: calculatedData.saved,
    });
  };

  getSummary(title, value) {
    return (
      <View style={styles.summaryItem}>
        <Text style={styles.label}>{title}</Text>
        <Text style={styles.labelValue}>{value}</Text>
      </View>
    );
  }

  render() {
    const {
      cart,
      // subTotal,
      delivery,
      total_quantity,
      subTotal,
      otherCharges,
      grandTotal,
      discount,
      saved,
    } = this.state;
    return (
      <GlobalWrapper tag={'cart'} navigation={this.props.navigation}>
        {cart.length > 0 ? (
          <View style={styles.mainWrapper}>
            <Text style={styles.heading}>My Cart</Text>

            {cart.map(c => (
              <CartCard
                key={'cart-' + c.product_id}
                id={c.product_id}
                name={c.product_name}
                qty={c.qty}
                stock={c.available_stock}
                // updateCart={this.updateCart}
                sp={c.selling_price}
                mrp={c.original_price}
                image={c.image}
                modifyData={(product_id, qty) =>
                  this.modifyData(product_id, qty)
                }
              />
            ))}

            <View style={styles.summaryDiv}>
              {/* {this.getSummary('Total Quantity', total_quantity)}
              {this.getSummary('Discount', discount + '%')} */}
              {this.getSummary('Sub Total', numberFormatter(subTotal))}
              {this.getSummary(
                'Delivery Charges',
                numberFormatter(otherCharges),
              )}
              {this.getSummary(
                'Grand Total',
                numberFormatter(
                  subTotal - subTotal * (discount / 100) + otherCharges,
                ),
              )}
            </View>
            <Text style={styles.subText}>
              {'You save '}
              <Text style={{color: Colors.secondary}}>
                {numberFormatter(saved)}
              </Text>
              {' in this order'}
            </Text>
            <Text style={styles.subText}>
              {`FSSAI License ID : ${LICENSE_ID}`}
            </Text>

            <CustomButton
              wrapperStyle={{marginTop: 15}}
              onPress={() => this.props.navigation.navigate('Checkout')}>
              {'Proceed to Buy'}
            </CustomButton>
          </View>
        ) : (
          <View style={styles.mainSubWrapper}>
            <Image
              source={require('../Assets/cart.png')}
              style={styles.image}
            />
            <Text style={styles.heading}>Your Cart is empty</Text>
            <CustomButton
              onPress={() => this.props.navigation.navigate('Home')}>
              {'Start Shopping'}
            </CustomButton>
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
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
    tintColor: Colors.secondary,
  },
  mainSubWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryDiv: {
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 3,
    padding: 10,
    paddingBottom: 5,
    marginBottom: 5,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: '600',
    color: '#090909',
  },
  labelValue: {
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  subText: {
    textAlign: 'center',
    marginTop: 10,
  },
});
