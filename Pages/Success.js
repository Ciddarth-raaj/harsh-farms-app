import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import GlobalWrapper from '../Components/GlobalWrapper';
import Styles from '../Constants/styles';
import Colors from '../Constants/colors';
import numberFormatter from '../util/numberFormatter';
import Rate, {AndroidMarket} from 'react-native-rate';
import CustomButton from '../Components/CustomButton';

export default class Success extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_name: 'Bottle',
      total: 3434,
      address: 'NO.33 Random street, Random city',
      payment_method: 'Google pay',
      rated: false,
    };
  }
  render() {
    const {payment_method, product_name, total, address} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation} disableFooter={true}>
        <View style={styles.mainWrapper}>
          <Text style={styles.successheading}>Success!</Text>
          <View style={styles.imageHolder}>
            <Image
              style={styles.image}
              source={require('../Assets/success.png')}
            />
          </View>
          <Text style={styles.successSubheading}>
            Your Order has been successfully placed
          </Text>
          <Text style={Styles.heading}>Order Summary</Text>

          <View style={styles.imageHolderField}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1626609676274-405368136093?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
              }}
              style={styles.productImage}
            />
          </View>
          <Text style={styles.nameText}>
            <Text style={{fontWeight: 'bold'}}>Product : </Text>
            {product_name}
          </Text>
          <Text style={styles.nameText}>
            <Text style={{fontWeight: 'bold'}}>Total Payment : </Text>
            {numberFormatter(total)}
          </Text>
          <Text style={styles.nameText}>
            <Text style={{fontWeight: 'bold'}}>Payment Method : </Text>
            {payment_method}
          </Text>
          <Text style={styles.nameText}>
            <Text style={{fontWeight: 'bold'}}>Address : </Text>
            {address}
          </Text>
          <CustomButton
            title="Rate Our App"
            onPress={() => {
              const options = {
                // AppleAppID: '2193813192',
                // GooglePackageName: 'com.mywebsite.myapp',
                // AmazonPackageName: 'com.mywebsite.myapp',
                OtherAndroidURL: 'http://www.randomappstore.com/app/47172391',
                preferredAndroidMarket: AndroidMarket.Google,
                preferInApp: false,
                openAppStoreIfInAppFails: true,
                fallbackPlatformURL: 'http://www.mywebsite.com/myapp.html',
              };
              Rate.rate(options, success => {
                if (success) {
                  this.setState({rated: true});
                }
              });
            }}>
            {'Rate Our App'}
          </CustomButton>
          <View style={{marginTop: 10, marginBottom: 10}}>
            <CustomButton
              onPress={() => this.props.navigation.navigate('Home')}>
              {'Continue'}
            </CustomButton>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
  },
  successheading: {
    fontSize: 26,
    color: Colors.primary,
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  imageHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  successSubheading: {
    fontSize: 18,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 50,
  },
  nameText: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  productImage: {
    height: 60,
    width: 60,
    marginRight: 10,
  },
  imageHolderField: {
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});
