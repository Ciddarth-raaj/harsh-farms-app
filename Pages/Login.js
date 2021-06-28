import React, {Component} from 'react';
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

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';

import CustomInputText from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.state = {
      showPassword: true,
      username: '',
      password: '',
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }

  onSubmit() {
    const {username, password} = this.state;
    const alertInitText = 'Fill these fields to continue:\n';
    let alertText = alertInitText;

    if (username == '') {
      alertText += '• Username\n';
    }

    if (password == '') {
      alertText += '• Password\n';
    }

    if (alertText !== alertInitText) {
      alert(alertText);
      return;
    }
  }

  render() {
    const {username, password, showPassword} = this.state;
    return (
      <GlobalWrapper tag={'login'} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>Login</Text>
          <View style={styles.fieldHolder}>
            <CustomInputText
              maxLength={100}
              value={username}
              label={'Username'}
              onChangeText={value => this.setState({username: value})}
            />

            <CustomInputText
              label={'Password'}
              value={password}
              maxLength={100}
              onChangeText={value => this.setState({password: value})}
              secureTextEntry={showPassword}
              toggleSecure={v => this.setState({showPassword: v})}
            />

            <CustomButton
              wrapperStyle={{marginTop: 20}}
              onPress={() => this.onSubmit()}>
              {'Login'}
            </CustomButton>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.bottomText}>Forgot Password?</Text>
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
    marginTop: 100,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    color: Colors.secondary,
    marginTop: 10,
    textAlign: 'center',
  },
});
