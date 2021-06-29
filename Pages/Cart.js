import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import CartCard from '../Components/CartCard';
import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import Colors from '../Constants/colors';
import {LICENSE_ID} from '../Constants/constants';
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
          mrp: 200,
          product_name: 'Red Apple | Best Quality | 1 Kg',
          item_image:
            'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
        },
        {
          product_id: 2,
          qty: 10,
          sp: 10,
          mrp: 200,
          product_name: 'Orange | Top Grade | 1 Kg',
          item_image:
            'https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg',
        },
        {
          product_id: 3,
          qty: 10,
          sp: 100,
          mrp: 200,
          product_name: 'Random',
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
      saved: 30,
      terms: '1) All products once purchased cannot be refunded',
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
                id={c.product_id}
                name={c.product_name}
                qty={c.qty}
                // updateCart={this.updateCart}
                sp={c.sp}
                mrp={c.mrp}
                image={c.item_image}
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
              onPress={() => this.props.navigation.navigate('Payment')}>
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
