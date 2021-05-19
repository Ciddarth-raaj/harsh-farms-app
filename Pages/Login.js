import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import Styles from '../Constants/styles';
import Colors from '../Constants/colors';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import Header from '../Components/Header';
import colors from '../Constants/colors';
import GlobalWrapper from '../Components/GlobalWrapper';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
      confirmPass: '',
      loginWithOtp: false,
      otp: '',
      name: '',
      email: '',
      address: '',
      securityNumber: '',
      primaryNumber: '',
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
    } = this.state;
    return (
      <SafeAreaView>
        <GlobalWrapper tag={'login'} navigation={this.props.navigation}>
          <ScrollView>
            <View>
              <Header />
              <View style={styles.wrapper}>
                <Text style={styles.heading}>Welcome To Harsh Farms</Text>
                <View style={styles.fieldHolder}>
                  <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={value => this.setState({name: value})}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    value={phone}
                    keyboardType="numeric"
                    onChangeText={value => this.setState({phone: value})}
                  />
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
                  <TextInput
                    style={styles.input}
                    placeholder="Security"
                    value={securityNumber}
                    onChangeText={value =>
                      this.setState({securityNumber: value})
                    }
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={value => this.setState({password: value})}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPass}
                    onChangeText={value => this.setState({confirmPass: value})}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Mobile Number (Primary)"
                    value={primaryNumber}
                    keyboardType="numeric"
                    onChangeText={value =>
                      this.setState({primaryNumber: value})
                    }
                  />
                </View>
                <TouchableOpacity style={styles.buttonWrapper}>
                  <Text style={Styles.buttonText}>Submit</Text>
                </TouchableOpacity>
              </View>

              {/* <View>
          <FloatingLabelInput
            label="Phone"
            value={phone}
            mask="(99)99999-9999"
            keyboardType="numeric"
            // onChangeText={value => setPhone(value)}
          />
        </View> */}
            </View>
          </ScrollView>
        </GlobalWrapper>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  inputGroup: {
    position: 'relative',
    borderWidth: 1,
  },
  inputText: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    fontSize: 14,
    backgroundColor: 'transparent',
    width: '100%',
    color: '#363636',
  },
  fieldHolder: {
    width: '100%',
  },
  wrapper: {
    margin: 10,
    padding: 20,
  },
  heading: {
    marginBottom: 20,
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
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
  textAreaContainer: {
    borderWidth: 2,
    borderColor: colors.primary,
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
    backgroundColor: colors.primary,
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
});
