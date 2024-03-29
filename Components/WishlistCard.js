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
import Styles from '../Constants/styles';
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';

export default class WishlistCard extends Component {
  render() {
    const {image, name, id, price} = this.props;
    return (
      <View>
        <View style={styles.wrapper}>
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
              <View style={{marginBottom: 10}}>
                <Text style={styles.nameText}>{name}</Text>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.spText}>
                  {' '}
                  {'\u20A8'}
                  {price}
                </Text>
              </View>
              <TouchableOpacity style={styles.shareButton}>
                <Text style={{color: 'white'}}>Remove from wishlist</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.innerBottomWrapper}></View>
        </View>
        <View style={styles.line} />
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
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // borderWidth: 1,
    // borderColor: 'grey',
    position: 'relative',
    borderRadius: 6,
  },
  image: {
    width: 120,
    height: 110,
    borderRadius: 10,
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  innerBottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentWrapper: {
    marginLeft: 20,
    // height: 100,
    justifyContent: 'space-around',
    marginRight: 20,
  },
  priceWrapper: {
    flexDirection: 'row',
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
  shareButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: 'auto',
  },
  price: {
    fontWeight: 'bold',
    color: '#0088ff',
    flexGrow: 0,
  },
  qtyDiv: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.primaryLight,
    borderRadius: 10,
    marginTop: 20,
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

  line: {
    marginBottom: 10,
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(226, 226, 226)',
    // margin-bottom: 10px;
    // margin-top: 10px;
    // height: 1px;
    // width: 100%;
    // background: ;
  },
});
