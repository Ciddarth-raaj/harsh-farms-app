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
  ScrollView,
} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import Header from '../Components/Header';
import GlobalWrapper from '../Components/GlobalWrapper';

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    } = this.state;
    return (
      <GlobalWrapper tag={'signin'} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Welcome To Harsh Farms</Text>
          <View style={styles.fieldHolder}>
            <View srtyles={styles.personalDetailsSection}>
              <Text style={styles.subHeading}>Personal Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={value => this.setState({name: value})}
              />
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <TextInput
                  style={styles.inputNumberPrefix}
                  placeholder=" "
                  value={phone_prefix}
                  keyboardType="numeric"
                  // onChangeText={value => this.setState({phone: value})}
                />
                <TextInput
                  style={styles.inputNumber}
                  placeholder="Phone Number"
                  value={phone}
                  keyboardType="numeric"
                  onChangeText={value => this.setState({phone: value})}
                />
              </View>

              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={value => this.setState({email: value})}
              />

              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Address"
                  value={address}
                  numberOfLines={10}
                  multiline={true}
                  onChangeText={value => this.setState({address: value})}
                />
              </View>
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
              {/* <TextInput
                      style={styles.input}
                      placeholder="Security"
                      value={securityNumber}
                      onChangeText={value =>
                        this.setState({securityNumber: value})
                      }
                    /> */}
            </View>
            <View srtyles={styles.accountDetailsSection}>
              <Text style={styles.subHeading}>Account Details</Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
              />

              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPass}
                secureTextEntry={true}
                onChangeText={value => this.setState({confirmPass: value})}
              />

              {/* <TextInput
                      style={styles.input}
                      placeholder="Mobile Number (Primary)"
                      value={primaryNumber}
                      keyboardType="numeric"
                      onChangeText={value =>
                        this.setState({primaryNumber: value})
                      }
                    /> */}
            </View>
            <TouchableOpacity style={styles.buttonWrapper}>
              <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
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

  inputNumber: {
    width: '75%',
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
    marginBottom: 20,
  },
  subHeading: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
  },
});
