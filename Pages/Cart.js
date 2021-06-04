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
import CartCart from '../Components/CartCart';
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';
import colors from '../Constants/colors';
import Colors from '../Constants/colors';

import numberFormatter from '../util/numberFormatter';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        {
          product_id: 1,
          qty: 10,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          item_image:
            'https://images.unsplash.com/photo-1622473590864-caf55d61c69d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          product_id: 2,
          qty: 10,
          sp: 10,
          product_name: 'Random',
          item_quantity: '40 KG',
          item_image:
            'https://images.unsplash.com/photo-1622510993112-b31de77a2424?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          product_id: 3,
          qty: 10,
          sp: 100,
          product_name: 'Random',
          item_quantity: '40 KG',
          item_image:
            'https://images.unsplash.com/photo-1612564148954-59545876eaa0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
        },
      ],
      delivery: 50,
      total_quantity: 20,
      subTotal: 300,
      otherCharges: 30,
      discount: 20,
      grandTotal: 400,
    };
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

  updateCartValue = (id, qty) => {
    const {cart} = this.state;
    let {subTotal} = this.state;

    for (let i in cart) {
      if (cart[i].product_id === id) {
        if (qty === 0) {
          subTotal = subTotal - cart[i].qty * cart[i].sp;
          cart.splice(i, 1);
          break;
        }
        subTotal = subTotal - cart[i].qty * cart[i].sp;
        subTotal = subTotal + qty * cart[i].sp;
        cart[i].qty = qty;
        break;
      }
    }

    this.setState({
      cart: cart,
      subTotal: subTotal,
    });
  };

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
    } = this.state;
    return (
      <SafeAreaView>
        <GlobalWrapper tag={'cart'} navigation={this.props.navigation}>
          <Header />
          {cart.length > 0 ? (
            <View style={styles.mainWrapper}>
              <Text style={styles.heading}>My Cart</Text>

              {cart.map(c => (
                <CartCart
                  id={c.product_id}
                  name={c.product_name}
                  qty={c.qty}
                  // updateCart={this.updateCart}
                  price={c.sp}
                  image={c.item_image}
                  item_quantity={c.item_quantity}
                />
              ))}
              <View>
                <Text style={styles.text}>Quantiy: {total_quantity}</Text>
                <Text style={styles.text}>
                  Subtotal: {numberFormatter(subTotal)}
                </Text>
                <Text style={styles.text}>Discount : {discount}%</Text>
                <Text style={styles.text}>
                  Home Deleivery Charges : {numberFormatter(otherCharges)}
                </Text>
                <Text style={styles.text}>
                  Grand Total :{' '}
                  {numberFormatter(
                    subTotal - subTotal * (discount / 100) + otherCharges,
                  )}
                </Text>

                <TouchableOpacity style={styles.shareButton}>
                  <Text style={{color: 'white'}}>Proceed to Buy</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View style={styles.mainSubWrapper}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1539799827118-e091578f7011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                }}
                style={styles.image}
              />
              <Text style={styles.heading}>Your Cart is empty</Text>
              <Text style={styles.heading}>
                Add items to your Cart and they will appear here
              </Text>
            </View>
          )}
        </GlobalWrapper>
      </SafeAreaView>
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
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
  mainSubWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
