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
    const {id, name, mrp, sp, image, tag, stock} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.discountSectionField}>
          <Text style={styles.discountSection}>{tag}</Text>
        </View>

        <View style={styles.innerWrapper}>
          <View style={styles.imageHolderField}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
            <Text style={styles.nameTextStock}>{`${stock} Left in Stock`}</Text>
          </View>

          <View style={styles.contentWrapper}>
            <Text style={styles.nameText}>{name}</Text>

            <View style={styles.priceWrapper}>
              <Text style={styles.mrpText}>{`\u20A8 ${mrp}`}</Text>
              <Text style={styles.spText}>{`\u20A8 ${sp}`}</Text>
            </View>

            {/* {QtyVisibility && ( */}
            <View style={styles.qtyDiv}>
              <View style={styles.textViewStyleMinus}>
                <Text
                  style={styles.qtyButton}
                  onPress={() => this.updateQty('sub')}>
                  {'-'}
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Text className={styles.price}>{this.state.qty}</Text>
              </View>
              <View style={styles.textViewStylePlus}>
                <Text
                  style={styles.qtyButton}
                  onPress={() => this.updateQty('add')}>
                  {'+'}
                </Text>
              </View>
            </View>
            {/* )} */}

            <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
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

  imageHolderField: {
    width: '45%',
  },
  image: {
    marginTop: 30,
    width: '100%',
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
    color: '#347672',
    // color: colors.primary,
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
    fontWeight: 'bold',
  },
  nameTextStock: {
    fontSize: 16,
    marginBottom: 5,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
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
    backgroundColor: '#347672',
    // backgroundColor: '#73AB00',
    // backgroundColor: Colors.primary,
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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 5,
  },
  discountSectionField: {
    position: 'absolute',
    top: 5,
    left: 5,
    backgroundColor: '#FC2215',
    // backgroundColor: '#00AF50',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    zIndex: 1,
  },
  discountSection: {
    fontWeight: 'bold',
    color: 'white',
  },
  textViewStylePlus: {
    backgroundColor: '#347672',
    // backgroundColor: '#73AB00',
    flex: 1,
    alignItems: 'center',
  },
  textViewStyleMinus: {
    backgroundColor: '#347672',
    // backgroundColor: '#FF4634',
    flex: 1,
    alignItems: 'center',
  },
});
