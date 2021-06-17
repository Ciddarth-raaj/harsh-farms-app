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
import Colors from '../Constants/colors';

export default class Payment extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header />
        <View style={styles.mainWrapper}>
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
        </View>
      </SafeAreaView>
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
