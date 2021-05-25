import React from 'react';
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

import Header from '../Components/Header';
import colors from '../Constants/colors';
import Styles from '../Constants/styles';

export default class Eua extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Header />

          <Text style={styles.heading}>End User Agreement</Text>
          <View style={{padding: 30}}>
            <View style={styles.fieldHolder}>
              <Text style={{marginRight: 6}} style={styles.textStyle}>
                1.
              </Text>
              <Text style={styles.textStyle}>
                All promotions offers are valid untill the stock lasts
              </Text>
            </View>
            <View style={styles.fieldHolder}>
              <Text style={{marginRight: 6}} style={styles.textStyle}>
                2.
              </Text>
              <Text style={styles.textStyle}>
                You can add product into your wishlist and get alerted when the
                next stock is available.Wishlist will be cleared every 23 hours.
              </Text>
            </View>
            <View style={styles.fieldHolder}>
              <Text style={{marginRight: 6}} style={styles.textStyle}>
                3.
              </Text>
              <Text style={styles.textStyle}>
                A product can be kept in cart for 60 minutes.After cut-off time
                the system will automatically remove the item from the cart and
                add it to available stock list.
              </Text>
            </View>
            <View style={styles.fieldHolder}>
              <Text style={{marginRight: 6}} style={styles.textStyle}>
                4.
              </Text>
              <Text style={styles.textStyle}>
                Check the items while collecting deleivery and if incase of any
                concerns return instantly
              </Text>
            </View>

            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => this.props.navigation.navigate('Signin')}>
              <Text style={Styles.buttonText}>Accept and Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 20,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.primary,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 21,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fieldHolder: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
