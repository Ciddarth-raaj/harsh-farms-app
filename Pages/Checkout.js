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
        label: 'Cash on Delivery',
      },
      {
        label: 'Online Payment',
      },
    ];
  }
  render() {
    return (
      <GlobalWrapper navigation={this.props.navigation} disableFooter={true}>
        <SafeAreaView>
          <View style={styles.mainWrapper}>
            <Text style={styles.heading}>{'Checkout'}</Text>
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
    color: Colors.secondary,
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
