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
import colors from '../Constants/colors';
import Colors from '../Constants/colors';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
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
    const {id, name, mrp, sp, image, item_quantity, discount} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.discountSectionField}>
          <Text style={styles.discountSection}>{discount}</Text>
        </View>

        <View style={styles.innerWrapper}>
          <View>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.contentWrapper}>
            <View style={{marginBottom: 0}}>
              <Text style={styles.nameText}>{name}</Text>
              <Text style={styles.subText}>{item_quantity}</Text>
            </View>
            <View style={styles.priceWrapper}>
              <Text style={styles.mrpText}>{`\u20A8 ${mrp}`}</Text>
              <Text style={styles.spText}>{`\u20A8 ${sp}`}</Text>
            </View>

            {/* {QtyVisibility && ( */}
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
            {/* )} */}

            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white'}}>Add to Basket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
    marginBottom: 15,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    position: 'relative',
    borderRadius: 3,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  contentWrapper: {
    justifyContent: 'space-between',
    marginLeft: 10,
    flex: 1,
  },
  priceWrapper: {
    flexDirection: 'row',
    // marginBottom: 10,
  },
  spText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.primary,
  },
  mrpText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    marginRight: 15,
    color: 'gray',
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    // marginTop: 10,
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
  discountSectionField: {
    position: 'absolute',
    top: 6,
    right: 5,
    backgroundColor: 'orange',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 6,
  },
  discountSection: {
    fontWeight: 'bold',
    color: 'white',
  },
});
