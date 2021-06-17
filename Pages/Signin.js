import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  Picker,
  TextInput,
  Switch,
  ScrollView,
  Image,
} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import Header from '../Components/Header';
import GlobalWrapper from '../Components/GlobalWrapper';
import CustomInputText from '../Components/CustomTextInput';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitchConfirm = this.toggleSwitchConfirm.bind(this);
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
      selectedValue: 'Society',
      phone_prefix: '91',
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }

  toggleSwitchConfirm() {
    this.setState({showConfirmPassword: !this.state.showConfirmPassword});
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
    const {name, email, phone, password, confirmPass, selectedValue, address} =
      this.state;
    const alertInitText = 'Fill these fields to continue:\n';
    let alertText = alertInitText;

    if (name == '') {
      alertText += '• Username\n';
    }

    if (email == '') {
      alertText += '• Email\n';
    } else if (!this.validateEmail(email)) {
      alertText += '• Invalid Email\n';
    }

    if (phone == '') {
      alertText += '• Mobile Number\n';
    } else if (isNaN(phone)) {
      alertText += '• Invalid Mobile Number\n';
    } else if (phone.length < 11 && phone.length < 10) {
      alertText += '• Invalid Mobile Number\n';
    }

    if (address == '') {
      alertText += '• Address\n';
    }
    if (password == '') {
      alertText += '• Password\n';
    }

    if (confirmPass == '') {
      alertText += '• Confirm Password\n';
    }

    if (alertText !== alertInitText) {
      alert(alertText);
      return;
    }
  }

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
      selectedValue,
      phone_prefix,
      showPassword,
      showConfirmPassword,
    } = this.state;
    return (
      <GlobalWrapper tag={'signin'} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Sign Up</Text>
          <Text style={styles.subHeading}>Personal Details</Text>
          <CustomInputText
            label={'Name'}
            maxLength={100}
            value={name}
            onChangeText={value => this.setState({name: value})}
          />
          <CustomInputText
            label={'Phone Number'}
            value={phone}
            maxLength={11}
            keyboardType="numeric"
            onChangeText={value => this.setState({phone: value})}
          />
          <CustomInputText
            label={'Email address'}
            value={email}
            onChangeText={value => this.setState({email: value})}
            maxLength={100}
          />
          <CustomInputText
            label={'Address'}
            value={address}
            numberOfLines={10}
            multiline={true}
            maxLength={400}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({address: value})}
          />

          <View style={styles.textAreaContainer}>
            <Picker
              selectedValue={selectedValue}
              style={styles.input}
              style={{borderWidth: 1, color: 'gray'}}
              // onValueChange={(itemValue, itemIndex) =>
              //   setSelectedValue(itemValue)
              // }
            >
              <Picker.Item label="Society" value="Society" />
            </Picker>
          </View>

          <View style={styles.accountDetailsSection}>
            <Text style={styles.subHeading}>Account Details</Text>
            <View>
              <CustomInputText
                label={'Password'}
                value={password}
                maxLength={100}
                onChangeText={value => this.setState({password: value})}
                secureTextEntry={showPassword}
                toggleSecure={v => this.setState({showPassword: v})}
              />
              <CustomInputText
                label={'Confirm Password'}
                value={confirmPass}
                maxLength={100}
                onChangeText={value => this.setState({confirmPass: value})}
                secureTextEntry={showConfirmPassword}
                toggleSecure={v => this.setState({showConfirmPassword: v})}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => this.onSubmit()}>
              <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
  },
  textAreaContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    width: '100%',
    paddingLeft: 16,
  },
  buttonWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.primary,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 21,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
  },
  subHeading: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.secondary,
  },
});
