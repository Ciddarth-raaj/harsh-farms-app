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
import Styles from '../Constants/styles';
import Colors from '../Constants/colors';
import Header from '../Components/Header';

export default class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '8890637892',
      password: '',
      sentOtp: false,
      confirmPass: '',
      otp: '',
      timer: 60,
    };
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {phone, password, sentOtp, otp, confirmPass, timer} = this.state;
    return (
      <SafeAreaView>
        <Header />
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Forgot Password</Text>

          <View style={styles.fieldHolder}>
            <TextInput
              style={styles.input}
              placeholder="Phone"
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
                <TextInput
                  style={styles.input}
                  placeholder="Enter OTP"
                  value={otp}
                  onChangeText={value =>
                    this.setState({
                      otp: value,
                    })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={value =>
                    this.setState({
                      password: value,
                    })
                  }
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={true}
                  value={confirmPass}
                  onChangeText={value =>
                    this.setState({
                      confirmPass: value,
                    })
                  }
                />
              </View>
            </View>
          )}

          {sentOtp && (
            <View>
              <Text style={styles.bottomText}>
                OTP will expire in {timer} seconds
              </Text>
              <TouchableOpacity
                onPress={() => {
                  {
                    this.props.navigation.navigate('Forgot'),
                      this.setState({
                        timer: 60,
                      });
                    clearInterval(this.interval), this.intervalTimer();
                  }
                }}>
                <Text style={styles.bottomText}>Resend OTP</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => {
              this.setState({
                sentOtp: true,
              });
              this.intervalTimer();
            }}
            // onPress={() => (sentOtp ? this.checkInput() : this.sendOtp())
            // }
          >
            <Text style={Styles.buttonText}>
              {sentOtp ? 'Submit' : 'Send OTP'}
            </Text>
          </TouchableOpacity>
        </View>
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
    borderRadius: 9,
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
});
