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

import CustomInputText from '../Components/CustomTextInput';
import RNPickerSelect from 'react-native-picker-select';
import CustomButton from '../Components/CustomButton';
import Styles from '../Constants/styles';
import OrderProductCard from '../Components/OrderProductCard';

import UserHelper from '../helper/user';
import SocietyHelper from '../helper/society';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',

      email: '',
      address: '',
      selectedSociety: '',
      society: '',
      phone: '',
      product_listing: [
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',
          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',

          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
        {
          product_id: 1,
          product_name: 'Random',
          original_price: '33',
          selling_price: '33',
          quantity: 22,
          image:
            'https://images.unsplash.com/photo-1626288937173-9506afb2fc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
        },
      ],
      error: {
        name: false,
        phone: false,
        email: false,
        address: false,
        selectedSociety: false,
      },
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

  componentDidMount() {
    this.getSociety();
    this.getDetails();
  }

  getSociety() {
    SocietyHelper.get()
      .then(data => {
        if (data.length > 0) {
          const formatted = [];
          for (let d of data) {
            formatted.push({
              label: d.society_name,
              value: d.society_id,
            });
          }
          this.setState({society: formatted});
        }
      })
      .catch(err => console.log(err));
  }

  getDetails() {
    UserHelper.getDetails()
      .then(data => {
        this.setState({
          // account_name: data.account_name,
          phone: data.mobile_nr,
          name: data.name,
          email: data.email_id,
          selectedSociety: data.society_id,
          address: data.address,
        });
      })
      .catch(err => console.log(err));
  }

  onEditPress() {
    const {name, email, address, selectedSociety, error, phone} = this.state;
    let count = 0;

    if (name == '') {
      count++;
      error['name'] = true;
    }

    if (email == '') {
      count++;
      error['email'] = true;
    }
    if (phone == '') {
      count++;
      error['phone'] = true;
    }

    if (address == '') {
      count++;
      error['address'] = true;
    }

    if (selectedSociety == 0 || selectedSociety == undefined) {
      count++;
      error['selectedSociety'] = true;
    }

    if (count > 0) {
      this.setState({error: error});
      alert('Please check all the values!');
      return;
    }

    const data = {
      name: name,
      email_id: email,
      society_id: selectedSociety,
      address: address,
    };

    UserHelper.update(data)
      .then(data => {
        if (data.code == 200) {
          alert('Updated Details!');
        } else {
          throw 'err';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error updating details!');
      });
  }

  setError = (val, key) => {
    const {error} = this.state;
    error[key] = val;
  };

  render() {
    const {
      name,

      phone,
      email,
      address,
      selectedSociety,

      error,
      society,
      product_listing,
    } = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation} disableFooter={true}>
        <View style={styles.mainWrapper}>
          <Text style={Styles.heading}>Checkout</Text>
          <Text style={Styles.subText}>Profile Details</Text>
          <CustomInputText
            label={'Name'}
            value={name}
            editable={true}
            error={error['name']}
            onChangeText={value => {
              this.setState({name: value});
              this.setError(false, 'name');
            }}
          />

          <CustomInputText
            label={'Mobile Number'}
            value={phone}
            keyboardType="numeric"
            editable={false}
            error={error['phone']}
            onChangeText={value => {
              this.setState({phone: value});
              this.setError(false, 'phone');
            }}
          />

          <Text style={styles.subText}>
            {'Mobile number will be used during order delivery and login'}
          </Text>

          <CustomInputText
            label={'Email'}
            value={email}
            editable={true}
            error={error['email']}
            onChangeText={value => {
              this.setState({email: value});
              this.setError(false, 'email');
            }}
          />

          <CustomInputText
            label={'Address'}
            value={address}
            numberOfLines={10}
            multiline={true}
            maxLength={400}
            error={error['address']}
            underlineColorAndroid="transparent"
            onChangeText={value => {
              this.setState({address: value});
              this.setError(false, 'address');
            }}
          />

          <Text
            style={[styles.label, error['selectedSociety'] && {color: 'red'}]}>
            {'Society'}
          </Text>
          <View
            style={[
              styles.input,
              {marginBottom: 15},
              error['selectedSociety'] ? {borderColor: 'red'} : {},
            ]}>
            <RNPickerSelect
              value={selectedSociety}
              onValueChange={value => {
                this.setState({selectedSociety: value});
                this.setError(false, 'selectedSociety');
              }}
              items={society}
              placeholder={{label: 'Select a Society...', value: null}}
            />
          </View>

          {/* <CustomButton
              onPress={() => this.onEditPress()}
              wrapperStyle={{marginBottom: 30}}>
              {'Update Details'}
            </CustomButton> */}

          <Text style={Styles.subText}>{'Payment Method'}</Text>

          <RadioButtonRN
            data={this.payment_methods}
            selectedBtn={e => this.setState({res: e})}
            circleSize={16}
            activeColor="#306b67"
          />
          <CustomButton wrapperStyle={{marginBottom: 10, marginTop: 20}}>
            {'Continue'}
          </CustomButton>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
  },
  shareButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.primary,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 12,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 15,
  },
});
