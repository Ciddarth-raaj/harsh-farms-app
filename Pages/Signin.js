import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import Header from '../Components/Header';
import GlobalWrapper from '../Components/GlobalWrapper';
import CustomInputText from '../Components/CustomTextInput';

import SocietyHelper from '../helper/society';
import UserHelper from '../helper/user';
import CustomButton from '../Components/CustomButton';

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: true,
      showConfirmPassword: true,
      phone: '',
      password: '',
      confirmPass: '',
      name: '',
      email: '',
      address: '',
      securityNumber: '',
      primaryNumber: '',
      selectedSociety: undefined,
      phone_prefix: '91',
      society: [],
      error: {
        phone: false,
        password: false,
        confirmPass: false,
        name: false,
        email: false,
        address: false,
        securityNumber: false,
        primaryNumber: false,
        selectedSociety: false,
        phone_prefix: false,
      },
    };
  }

  componentDidMount() {
    this.getSociety();
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

  validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validateNumber(e) {
    const re = /^[0-9\b]+$/;
    return re.test(String(e).toLowerCase());
  }

  onSubmit() {
    const {
      name,
      email,
      phone,
      password,
      confirmPass,
      selectedSociety,
      address,
      error,
    } = this.state;

    let count = 0;

    if (name == '') {
      count++;
      error['name'] = true;
    }

    if (email == '') {
      count++;
      error['email'] = true;
    } else if (!this.validateEmail(email)) {
      count++;
      error['email'] = true;
    }

    if (phone == '') {
      count++;
      error['phone'] = true;
    } else if (isNaN(phone)) {
      count++;
      error['phone'] = true;
    } else if (phone.length < 11 && phone.length < 10) {
      count++;
      error['phone'] = true;
    }

    if (selectedSociety == undefined) {
      count++;
      error['selectedSociety'] = true;
    }

    if (address == '') {
      count++;
      error['address'] = true;
    }
    if (password == '') {
      count++;
      error['password'] = true;
    }

    if (confirmPass == '') {
      count++;
      error['confirmPass'] = true;
    }

    if (count > 0) {
      this.setState({error: error});
      alert('Please recheck all the entered details!');
      return;
    }

    const data = {
      name: name,
      mobile_nr: phone,
      email_id: email,
      address: address,
      society_id: selectedSociety,
      password: password,
    };

    this.props.navigation.navigate('Eua', {data: data});
  }

  setError = (val, key) => {
    const {error} = this.state;
    error[key] = val;
  };

  render() {
    const {
      phone,
      name,
      email,
      address,
      securityNumber,
      password,
      confirmPass,
      primaryNumber,
      selectedSociety,
      phone_prefix,
      showPassword,
      showConfirmPassword,
      society,
      error,
    } = this.state;
    return (
      <GlobalWrapper tag={'signin'} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={Styles.heading}>Sign Up</Text>
          <Text style={Styles.secondaryHeading}>Personal Details</Text>
          <CustomInputText
            label={'Name'}
            maxLength={100}
            value={name}
            onChangeText={value => {
              this.setState({name: value});
              this.setError(false, 'name');
            }}
            error={error['name']}
            autoCompleteType={'name'}
          />
          <CustomInputText
            label={'Phone Number'}
            value={phone}
            maxLength={11}
            keyboardType="numeric"
            onChangeText={value => {
              this.setState({phone: value});
              this.setError(false, 'phone');
            }}
            error={error['phone']}
            autoCompleteType={'tel'}
          />
          <CustomInputText
            label={'Email address'}
            value={email}
            onChangeText={value => {
              this.setState({email: value});
              this.setError(false, 'email');
            }}
            maxLength={100}
            autoCompleteType={'email'}
            error={error['email']}
            keyboardType={'email-address'}
            autoCapitalize={'none'}
          />
          <CustomInputText
            label={'Address'}
            value={address}
            numberOfLines={10}
            multiline={true}
            maxLength={400}
            underlineColorAndroid="transparent"
            onChangeText={value => {
              this.setState({address: value});
              this.setError(false, 'address');
            }}
            error={error['address']}
            autoCompleteType={'name'}
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
              onValueChange={value => this.setState({selectedSociety: value})}
              items={society}
              placeholder={{label: 'Select a Society...', value: null}}
            />
          </View>

          <View style={styles.accountDetailsSection}>
            <Text style={Styles.heading}>Account Details</Text>
            <View>
              <CustomInputText
                label={'Password'}
                value={password}
                maxLength={100}
                onChangeText={value => {
                  this.setState({password: value});
                  this.setError(false, 'password');
                }}
                secureTextEntry={showPassword}
                toggleSecure={v => this.setState({showPassword: v})}
                error={error['password']}
                autoCompleteType={'password'}
              />
              <CustomInputText
                label={'Confirm Password'}
                value={confirmPass}
                maxLength={100}
                onChangeText={value => {
                  this.setState({confirmPass: value});
                  this.setError(false, 'confirmPass');
                }}
                secureTextEntry={showConfirmPassword}
                toggleSecure={v => this.setState({showConfirmPassword: v})}
                error={error['confirmPass']}
                autoCompleteType={'password'}
              />
            </View>

            <CustomButton
              wrapperStyle={{marginTop: 20}}
              onPress={() => this.onSubmit()}>
              {'Submit'}
            </CustomButton>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
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
  subHeading: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.secondary,
  },
});
