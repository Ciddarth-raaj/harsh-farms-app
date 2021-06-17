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
          <View style={styles.fieldHolder}>
            <View srtyles={styles.personalDetailsSection}>
              <Text style={styles.subHeading}>Personal Details</Text>
              <CustomInputText
                label={'Name'}
                value={name}
                onChangeText={value => this.setState({name: value})}
              />
              <CustomInputText
                label={'Phone Number'}
                value={phone}
                keyboardType="numeric"
                onChangeText={value => this.setState({phone: value})}
              />
              <CustomInputText
                label={'Email address'}
                value={email}
                onChangeText={value => this.setState({email: value})}
              />
              <CustomInputText
                label={'Address'}
                value={address}
                numberOfLines={10}
                multiline={true}
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
            </View>

            <View style={styles.accountDetailsSection}>
              <Text style={styles.subHeading}>Account Details</Text>
              <View>
                <CustomInputText
                  label={'Password'}
                  value={password}
                  onChangeText={value => this.setState({password: value})}
                  secureTextEntry={showPassword}
                />
                <CustomInputText
                  label={'Confirm Password'}
                  value={confirmPass}
                  onChangeText={value => this.setState({confirmPass: value})}
                  secureTextEntry={showConfirmPassword}
                />
              </View>
              <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={Styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}
const styles = StyleSheet.create({
  // inputGroup: {
  //   position: 'relative',
  //   borderWidth: 1,
  // },
  // inputText: {
  //   padding: 10,
  //   borderWidth: 1,
  //   borderRadius: 2,
  //   fontSize: 14,
  //   backgroundColor: 'transparent',
  //   width: '100%',
  //   color: '#363636',
  // },
  fieldHolder: {
    width: '100%',
  },
  wrapper: {
    margin: 10,
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

  inputPassfield: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 20,
  },

  inputNumber: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
  },
  inputNumberPrefix: {
    width: '20%',
    height: 40,
    marginRight: '5%',
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
  },
  bottomContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  textContent: {
    marginLeft: 6,
  },
  bottomText: {
    fontSize: 14,
    color: '#0088ff',
    marginTop: 10,
  },
  sendOTPText: {
    position: 'absolute',
    top: 10,
    right: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0088ff',
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
    color: 'orange',
    marginBottom: 40,
  },
  subHeading: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
  },
  accountDetailsSection: {
    marginTop: 40,
  },
  toggleSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 21,
  },

  // New css
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
