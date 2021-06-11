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

export default class Forgot extends React.Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
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
    const {phone, password, sentOtp, otp, confirmPass, timer, hidden} =
      this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
          <View style={styles.wrapper}>
            <Text style={styles.heading}>Forgot Password</Text>

            <View style={styles.fieldHolder}>
              <View>
                <Text style={styles.label}>Phone number</Text>
                <TextInput
                  style={styles.input}
                  value={phone}
                  keyboardType="numeric"
                  onChangeText={value =>
                    this.setState({
                      phone: value,
                    })
                  }
                />
              </View>
            </View>

            {sentOtp && (
              <View style={styles.fieldHolder}>
                <View style={styles.fieldHolder}>
                  <View>
                    <Text style={styles.label}>OTP</Text>
                    <TextInput
                      style={styles.input}
                      value={otp}
                      onChangeText={value =>
                        this.setState({
                          otp: value,
                        })
                      }
                    />
                  </View>

                  <View>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.container}>
                      <View style={styles.sectionStyle}>
                        <TextInput
                          // style={styles.inputPassfield}
                          value={password}
                          style={{flex: 1}}
                          secureTextEntry={this.state.showPassword}
                          onChangeText={value =>
                            this.setState({password: value})
                          }
                        />
                        <Switch
                          onValueChange={this.toggleSwitch}
                          value={!this.state.showPassword}
                          style={styles.imageStyle}
                        />
                      </View>
                    </View>
                  </View>
                  {/* <View>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                      style={styles.input}
                      secureTextEntry={true}
                      value={password}
                      onChangeText={value =>
                        this.setState({
                          password: value,
                        })
                      }
                    />
                  </View> */}
                  <View>
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                      style={styles.input}
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
              </View>
            )}

            {sentOtp && (
              <View>
                <Text style={styles.bottomText}>
                  OTP will expire in {timer} seconds
                </Text>
                {/* <TouchableOpacity
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
                  <Text
                    styles={{textAlign: 'center'}}
                    style={Styles.buttonText}>
                    Resend OTP
                  </Text>
                </TouchableOpacity> */}
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
              <TouchableOpacity style={styles.buttonWrapper}>
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
