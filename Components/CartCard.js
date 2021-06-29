import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import colors from '../Constants/colors';
import Colors from '../Constants/colors';
import numberFormatter from '../util/numberFormatter';

export default class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
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
    const {id, sp, mrp, name, image} = this.props;
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
              <Text style={styles.mrpText}>{numberFormatter(mrp)}</Text>
              <Text style={styles.spText}>{numberFormatter(sp)}</Text>
            </View>

            <View style={styles.qtyDiv}>
              <TouchableOpacity
                style={[styles.textViewStyleMinus, styles.qtyCounter]}
                onPress={() => this.updateQty('sub')}>
                <Text style={styles.qtyButton}>{'-'}</Text>
              </TouchableOpacity>
              <View style={styles.qtyTextWrapper}>
                <Text style={styles.qtyText}>{qty}</Text>
              </View>
              <TouchableOpacity
                style={[styles.textViewStylePlus, styles.qtyCounter]}
                onPress={() => this.updateQty('add')}>
                <Text style={styles.qtyButton}>{'+'}</Text>
              </TouchableOpacity>
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
    fontWeight: '600',
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

  qtyDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
    borderRadius: 12,
  },
  qtyButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 5,
  },
  qtyCounter: {
    backgroundColor: Colors.secondary,
    flex: 1,
    alignItems: 'center',
  },
  textViewStylePlus: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textViewStyleMinus: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  qtyTextWrapper: {
    flex: 1,
  },
  qtyText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
