import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import Colors from '../Constants/colors';
import numberFormatter from '../util/numberFormatter';

import CustomButton from '../Components/CustomButton';

import CartHelper from '../helper/cart';
import WishlistHelper from '../helper/wishlist';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      added: false,
    };
  }

  updateQty(type) {
    const { stock } = this.props;
    let { qty } = this.state;
    if (stock == qty) {
      alert(`Only ${stock} left in stock!`)
      return;
    }
    if (type === 'add' && qty < stock) {
      qty++;
    } else {
      qty--;
    }

    this.setState({ qty: qty, added: false });
  }

  addToCart = () => {
    const { qty } = this.state;
    const { id, stock } = this.props;

    const loggedIn = global.accessToken != undefined;

    if (!loggedIn) {
      Alert.alert(
        'Add to Cart',
        'Login to Continue',
        [
          {
            text: 'Cancel',
            style: 'destructive',
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
        { cancelable: true },
      );
      return;
    }

    if (stock <= 0) {
      alert('No stock available!');
      return;
    }

    if (qty > stock) {
      alert(`Only ${stock} available in stock!`);
      return;
    }

    CartHelper.add(id, qty)
      .then(data => {
        if (data.code == 200) {
          this.setState({ added: true });
        } else {
          throw 'err';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error Adding to Cart!');
      });
  };

  addToWishlist() {
    const { id } = this.props;
    const loggedIn = global.accessToken != undefined;

    if (!loggedIn) {
      Alert.alert(
        'Add to Wishlist',
        'Login to Continue',
        [
          {
            text: 'Cancel',
            style: 'destructive',
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
        { cancelable: true },
      );
      return;
    }

    WishlistHelper.add(id)
      .then(data => {
        if (data.code == 200) {
          this.setState({ added: true });
        } else {
          throw 'err';
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { qty, added } = this.state;
    const { id, name, mrp, sp, image, tag, stock, type } = this.props;

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
            <Text style={styles.stockText}>
              {stock <= 0 ? 'No Stock' : `${stock} Left in Stock`}
            </Text>
          </View>

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

            <CustomButton
              wrapperStyle={[
                { padding: 10, maxHeight: 45 },
                stock <= 0 &&
                type == 'wishlist' && { backgroundColor: '#c9c9c9' },
              ]}
              onPress={() =>
                !added &&
                (stock <= 0 && type != 'wishlist'
                  ? this.addToWishlist()
                  : this.addToCart())
              }>
              {!added
                ? stock <= 0 && type != 'wishlist'
                  ? 'Add to Wishlist'
                  : 'Add to Cart'
                : 'Added'}
            </CustomButton>
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
    width: 130,
    height: 130,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'cover',
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
    color: Colors.primary,
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
  stockText: {
    fontSize: 14,
    color: Colors.primary,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 10,
  },
  subText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
  qtyDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 12,
  },
  qtyButton: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 5,
    // paddingBottom: 4,
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
  qtyCounter: {
    backgroundColor: Colors.primary,
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
  buttonWrapper: {
    flexDirection: 'row',
  },
  wishlistButton: {
    width: 35,
    height: 35,
    padding: 7,
    marginLeft: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  wishlistImage: {
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
});
