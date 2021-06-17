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

export default class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitchConfirm = this.toggleSwitchConfirm.bind(this);
    this.state = {
      showPassword: true,
      showConfirmPassword: true,
      phone: '8890637892',
      password: '',
      sentOtp: false,
      confirmPass: '',
      otp: '',
      timer: 60,
      hidden: true,
    };
  }

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
    const {password, confirmPass, otp} = this.state;
    const alertInitText = 'Fill these fields to continue:\n';
    let alertText = alertInitText;

    if (password == '') {
      alertText += '• Password\n';
    }

    if (confirmPass == '') {
      alertText += '• Confirm Password\n';
    }

    if (otp == '') {
      alertText += '• OTP\n';
    } else if (isNaN(otp)) {
      alertText += '• Invalid OTP\n';
    }

    if (alertText !== alertInitText) {
      alert(alertText);
      return;
    }
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
    } = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
          <View style={styles.wrapper}>
            <Text style={styles.heading}>Forgot Password</Text>

            <View style={styles.fieldHolder}>
              <CustomInputText
                style={styles.input}
                label={'Phone Number'}
                value={phone}
                keyboardType="numeric"
                onChangeText={value =>
                  this.setState({
                    phone: value,
                  })
                }
              />
            </View>

            {sentOtp && (
              <View style={styles.fieldHolder}>
                <View style={styles.fieldHolder}>
                  <CustomInputText
                    style={styles.input}
                    maxLength={4}
                    label={'OTP'}
                    value={otp}
                    onChangeText={value =>
                      this.setState({
                        otp: value,
                      })
                    }
                  />

                  <View>
                    <CustomInputText
                      // style={styles.inputPassfield}\
                      style={styles.input}
                      label={'Password'}
                      maxLength={100}
                      value={password}
                      onChangeText={value => this.setState({password: value})}
                      secureTextEntry={showPassword}
                      toggleSecure={v => this.setState({showPassword: v})}
                    />
                  </View>

                  <View>
                    <CustomInputText
                      // style={styles.inputPassfield}\
                      style={styles.input}
                      label={'Confirm Password'}
                      value={confirmPass}
                      maxLength={100}
                      onChangeText={value =>
                        this.setState({confirmPass: value})
                      }
                      secureTextEntry={showConfirmPassword}
                      toggleSecure={v =>
                        this.setState({showConfirmPassword: v})
                      }
                    />
                  </View>
                </View>
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
                }}
                // onPress={() => (sentOtp ? this.checkInput() : this.sendOtp())
                // }
              >
                <Text style={Styles.buttonText}>Send OTP</Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
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
  },
  heading: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 25,
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
    color: '#0088ff',
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
