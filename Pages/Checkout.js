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
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';
import Colors from '../Constants/colors';
import RadioButtonRN from 'radio-buttons-react-native';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      res: {},
    };

    this.payment_methods = [
      {
        label: 'Google pay',
      },
      {
        label: 'Paytm',
      },
      {
        label: 'Netbanking',
      },
    ];
  }
  render() {
    return (
      <GlobalWrapper>
        <SafeAreaView>
          {/* <Header /> */}
          {/* <View style={styles.mainWrapper}>
            <Text style={styles.heading}>Choose your payment option</Text>

            <TouchableOpacity style={styles.shareButton}>
              <Text style={{color: 'white'}}>Google Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={{color: 'white'}}>Paytm</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={{color: 'white'}}>Net Banking</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.mainWrapper}>
            <RadioButtonRN
              data={this.payment_methods}
              selectedBtn={e => this.setState({res: e})}
              circleSize={16}
              activeColor="#306b67"
            />
          </View>
        </SafeAreaView>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
});
