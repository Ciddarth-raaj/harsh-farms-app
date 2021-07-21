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

import Colors from '../Constants/colors';
import numberFormatter from '../util/numberFormatter';

import CustomButton from '../Components/CustomButton';

export default class OrderProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {id, name, mrp, sp, image, quantity} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.innerWrapper}>
          <View style={styles.imageHolderField}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            />
          </View>

          <View style={styles.contentWrapper}>
            <Text style={styles.nameText}>{name}</Text>

            <View style={styles.priceWrapper}>
              <Text style={styles.mrpText}>{numberFormatter(mrp)}</Text>
              <Text style={styles.spText}>{numberFormatter(sp)}</Text>
            </View>

            <Text style={styles.nameText}>
              <Text style={{fontWeight: 'bold'}}>Quantity : </Text>
              {quantity}
            </Text>
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
    width: 130,
    height: 100,
    borderRadius: 5,
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  innerWrapper: {
    flexDirection: 'row',
  },
  contentWrapper: {
    justifyContent: 'space-evenly',
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
});
