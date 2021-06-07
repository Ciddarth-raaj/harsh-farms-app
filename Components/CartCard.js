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

import colors from '../Constants/colors';
import Colors from '../Constants/colors';

export default class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
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
    const {id, updateCart, sp, mrp, name, quantity, image} = this.props;
    const {qty} = this.state;
    return (
      <View style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />

          <View style={styles.contentWrapper}>
            <Text style={styles.nameText}>{name}</Text>

            <View style={styles.priceWrapper}>
              <Text style={styles.mrpText}>{`\u20A8 ${mrp}`}</Text>
              <Text style={styles.spText}>{`\u20A8 ${sp}`}</Text>
            </View>

            <View style={styles.qtyDiv}>
              <View style={styles.textViewStyle}>
                <Text
                  style={styles.qtyButton}
                  onPress={() => this.updateQty('sub')}>
                  {'-'}
                </Text>
              </View>
              <View style={{flex: 2, alignItems: 'center'}}>
                <Text className={styles.price}>{qty}</Text>
              </View>
              <View style={styles.textViewStyle}>
                <Text
                  style={styles.qtyButton}
                  onPress={() => this.updateQty('add')}>
                  {'+'}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteWrapper}>
            <Image
              source={require('../Assets/delete.png')}
              style={styles.deleteImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    position: 'relative',
    borderRadius: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  contentWrapper: {
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 10,
    flex: 1,
  },
  priceWrapper: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: colors.primary,
  },
  mrpText: {
    textDecorationLine: 'line-through',
    marginRight: 15,
    color: 'gray',
  },
  nameText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  subText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
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
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
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
    borderWidth: 1,
    borderColor: '#c9c9c9',
    marginVertical: 10,
    borderRadius: 5,
  },
  qtyButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 5,
  },
  discountSectionField: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: Colors.secondary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    zIndex: 1,
  },
  discountSection: {
    fontWeight: 'bold',
    color: 'white',
  },
  textViewStyle: {
    backgroundColor: Colors.secondary,
    flex: 1,
    alignItems: 'center',
  },
  deleteWrapper: {
    zIndex: 1,
  },
  deleteImage: {
    width: 25,
    height: 25,
  },
});
