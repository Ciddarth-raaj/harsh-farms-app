import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../Constants/colors';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      QtyVisibility: false,
    };
  }

  updateQty(type) {
    let {qty} = this.state;
    if (type === 'add') {
      qty++;
    } else {
      if (this.state.qty > 0) {
        qty--;
      }
    }

    this.setState({qty: qty});
  }

  render() {
    const {QtyVisibility} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.wrapper}>
          <View style={styles.innerWrapper}>
            <View>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1620880762272-c2bf6b4f1ce2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
                }}
                style={styles.image}
              />
              <Text style={styles.nameText}>TOMATO</Text>
              <Text style={styles.subText}>(400KG-500KH)</Text>
            </View>
            <View style={styles.contentWrapper}>
              <View style={styles.priceWrapper}>
                <Text style={styles.spText}>{'\u20A8 100'}</Text>
                <Text style={styles.mrpText}>{'\u20A8 100'}</Text>
              </View>
              <Text style={[styles.stockText, styles.stockGreen]}>
                {'5 In Stock'}
              </Text>
              {QtyVisibility && (
                <View style={styles.qtyDiv}>
                  <View style={styles.TextViewStyle}>
                    <Text
                      style={styles.qtyButton}
                      onPress={() => this.updateQty('sub')}>
                      {'-'}
                    </Text>
                  </View>
                  <Text className={styles.price}>{this.state.qty}</Text>
                  <View style={styles.TextViewStyle}>
                    <Text
                      style={styles.qtyButton}
                      onPress={() => this.updateQty('add')}>
                      {'+'}
                    </Text>
                  </View>
                </View>
              )}

              <TouchableOpacity
                style={styles.shareButton}
                onPress={() => this.setState({QtyVisibility: true})}>
                <Text>ADD TO CART</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  contentWrapper: {
    marginLeft: 20,
    // height: 100,
    justifyContent: 'space-around',
  },
  priceWrapper: {
    flexDirection: 'row',
  },
  spText: {
    marginRight: 20,
    fontWeight: 'bold',
    fontSize: 18,
  },
  mrpText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  nameText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  stockText: {
    fontSize: 18,
  },
  stockGreen: {
    color: 'green',
  },
  stockRed: {
    color: 'red',
  },
  shareButton: {
    backgroundColor: Colors.primaryLight,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    color: '#0088ff',
    flexGrow: 0,
  },
  qtyDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  qtyButton: {
    fontSize: 24,
    fontWeight: 'bold',
    // borderRadius: 50,
    // borderColor: '#0088ff',
    // borderWidth: 2,
    // maxWidth: 30,
    // height: 30,
    // textAlign: 'center',
  },
});

// .qtyButton {
// 	font-weight: bold;
// 	font-size: 24px;
// 	border: solid;
// 	border-radius: 50px;
// 	border-width: 2px;
// 	border-color: #0088ff;
// 	max-width: 30px;
// 	height: 30px;
// 	text-align: center;
// 	cursor: pointer;
// }
