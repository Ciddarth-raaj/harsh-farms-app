import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';

import GlobalWrapper from '../Components/GlobalWrapper';
import CustomInputText from '../Components/CustomTextInput';
import CustomButton from '../Components/CustomButton';

import UserHelper from '../helper/user';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: true,
      username: '',
      password: '',
      error: {
        username: false,
        password: false,
      },
    };
  }

  onSubmit() {
    const {username, password, error} = this.state;
    let count = 0;

    if (username == '') {
      count++;
      error['username'] = true;
    }

    if (password == '') {
      count++;
      error['password'] = true;
    }

    if (count > 0) {
      this.setState({error: error});
      alert('Please fill all fields!');
      return;
    }

    UserHelper.login(username, password)
      .then(async data => {
        if (data.code == 200) {
          await AsyncStorage.setItem('token', data.token);
          await AsyncStorage.setItem(
            'clt-type-id',
            data.clt_type_id.toString(),
          );
          global.accessToken = data.token;
          global.clt_type = data.clt_type_id.toString();
          this.props.navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        } else if (data.code == 201) {
          alert('Your account was deactivated!');
        } else if (data.code == 404) {
          alert('Invalid Username / Password!\nTry Again!');
        } else {
          throw 'error';
        }
      })
      .catch(err => {
        alert('Error Logging In!');
      });
  }

  setError = (val, key) => {
    const {error} = this.state;
    error[key] = val;
  };

  render() {
    const {username, password, showPassword, error} = this.state;
    return (
      <GlobalWrapper tag={'login'} navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={Styles.heading}>Login</Text>
          <View style={styles.fieldHolder}>
            <CustomInputText
              maxLength={100}
              value={username}
              label={'Username'}
              onChangeText={value => {
                this.setState({username: value});
                this.setError(false, 'username');
              }}
              error={error['username']}
            />

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
