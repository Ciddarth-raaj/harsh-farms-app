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
  Switch,
} from 'react-native';
import Styles from '../Constants/styles';
import Colors from '../Constants/colors';
import Header from '../Components/Header';

import CustomInputText from '../Components/CustomTextInput';
import GlobalWrapper from '../Components/GlobalWrapper';

export default class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitchConfirm = this.toggleSwitchConfirm.bind(this);
    this.state = {
      showPassword: true,
      showConfirmPassword: true,
      // phone: '9003945219',
      phone: '9003945219',
      password: '',
      sentOtp: false,
      confirmPass: '',
      otp: '',
      timer: 60,
      hidden: true,
      hiden: true,
      error: {
        otp: false,
        password: false,
        confirmPass: false,
      },
    };
  }

  setError = (val, key) => {
    const {error} = this.state;
    error[key] = val;
  };

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }

  toggleSwitchConfirm() {
    this.setState({showConfirmPassword: !this.state.showConfirmPassword});
  }

  intervalTimer() {
    this.interval = setInterval(
      () => this.setState(prevState => ({timer: prevState.timer - 1})),
      1000,
    );
  }

  componentDidUpdate() {
    if (this.state.timer === 0) {
      clearInterval(this.interval);
      alert('OTP has expired, Press resend otp to get another one');
    }
  }

  validateNumber(e) {
    const re = /^[0-9\b]+$/;
    return re.test(String(e).toLowerCase());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSubmit() {
    const {password, confirmPass, otp, error} = this.state;
    let count = 0;

    if (otp == '') {
      count++;
      error['otp'] = true;
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
      alert('Please fill all fields!');
      return;
    }
    // const alertInitText = 'Fill these fields to continue:\n';
    // let alertText = alertInitText;

    // if (otp == '') {
    //   alertText += '• OTP\n';
    // } else if (isNaN(otp)) {
    //   alertText += '• Invalid OTP\n';
    // }

    // if (password == '') {
    //   alertText += '• Password\n';
    // }

    // if (confirmPass == '') {
    //   alertText += '• Confirm Password\n';
    // }

    // if (alertText !== alertInitText) {
    //   alert(alertText);
    //   return;
    // }
  }

  render() {
    const {
      phone,
      password,
      sentOtp,
      otp,
      confirmPass,
      timer,
      hidden,
      showPassword,
      showConfirmPassword,
      error,
    } = this.state;
    return (
      <GlobalWrapper disableFooter={true} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={Styles.heading}>Forgot Password</Text>

          <View style={styles.fieldHolder}>
            <CustomInputText
              label={'Phone Number'}
              value={phone}
              keyboardType="numeric"
              editable={!sentOtp}
              onChangeText={value => {
                this.setState({
                  phone: value,
                });
              }}
            />
          </View>

          {sentOtp && (
            <View style={styles.fieldHolder}>
              <CustomInputText
                maxLength={4}
                label={'OTP'}
                value={otp}
                onChangeText={value => {
                  this.setState({
                    otp: value,
                  });
                  this.setError(false, 'otp');
                }}
                error={error['otp']}
              />

              <CustomInputText
                label={'Password'}
                maxLength={100}
                value={password}
                onChangeText={value => {
                  this.setState({password: value});
                  this.setError(false, 'password');
                }}
                secureTextEntry={showPassword}
                toggleSecure={v => this.setState({showPassword: v})}
                error={error['password']}
              />

              <CustomInputText
                label={'Confirm Password'}
                value={confirmPass}
                maxLength={100}
                onChangeText={value => this.setState({confirmPass: value})}
                secureTextEntry={showConfirmPassword}
                toggleSecure={v => {
                  this.setState({showConfirmPassword: v});
                  this.setError(false, 'confirmPass');
                }}
                error={error['confirmPass']}
              />
            </View>
          )}

          {sentOtp && (
            <View>
              <Text style={styles.bottomText}>
                OTP will expire in {timer} seconds
              </Text>
            </View>
          )}

          {sentOtp && (
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => {
                {
                  this.props.navigation.navigate('Forgot'),
                    this.setState({
                      timer: 60,
                    });
                  clearInterval(this.interval), this.intervalTimer();
                }
              }}>
              <Text styles={{textAlign: 'center'}} style={Styles.buttonText}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          )}

          {sentOtp && (
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => this.onSubmit()}>
              <Text style={Styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          )}
          {hidden && (
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => {
                this.setState({
                  sentOtp: true,
                  hidden: false,
                });
                this.intervalTimer();
              }}>
              <Text style={Styles.buttonText}>Send OTP</Text>
            </TouchableOpacity>
          )}
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  fieldHolder: {
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  input: {
    position: 'relative',
    width: '100%',
    height: 40,
    // borderRadius: 9,
    marginBottom: 21,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#efefef',
  },
  buttonWrapper: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 21,
    textAlign: 'center',
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
  bottomText: {
    fontSize: 14,
    color: Colors.secondary,
    textAlign: 'center',
    marginBottom: 21,
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    width: '100%',
    height: 40,
    // borderWidth: 2,
    // borderColor: Colors.primary,
    // marginBottom: 10,
    // paddingLeft: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 21,
    paddingLeft: 20,

    backgroundColor: '#efefef',
  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
