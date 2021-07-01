import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import UserHelper from '../helper/user';

export default class Eua extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Eua: 'Lorem ipsum dolor sit amet, sse cillum dolore eu, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, su',
    };
  }

  componentDidMount() {
    const params = this.props.route.params.data;
    const keys = [
      'name',
      'mobile_nr',
      'email_id',
      'address',
      'society_id',
      'password',
    ];
    for (let key of keys) {
      if (params[key] == undefined) {
        alert('Invalid Data!');
        this.props.navigation.navigate('Signin');
        break;
      }
    }
  }

  acceptTerms() {
    const data = this.props.route.params.data;

    UserHelper.register(data)
      .then(async data => {
        if (data.code == 200) {
          await AsyncStorage.setItem('token', data.token);
          await AsyncStorage.setItem(
            'clt-type-id',
            data.clt_type_id.toString(),
          );
          global.accessToken = data.token;
          global.clt_type = data.clt_type_id.toString();
          alert('Account successfully created!');
          this.props.navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        } else if (data.code == 101) {
          alert('Phone number already exists!');
          this.props.navigation.goBack();
        } else {
          throw 'error';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error creating account!');
      });
  }

  render() {
    const {Eua} = this.state;
    return (
      <GlobalWrapper>
        <View style={{padding: 20}}>
          <Text style={styles.heading}>End User Agreement</Text>

          <Text style={styles.textStyle}>{Eua}</Text>

          <View style={styles.buttonDiv}>
            <CustomButton
              wrapperStyle={{marginRight: 10}}
              onPress={() => this.props.navigation.navigate('Signin')}>
              {'Do Not Accept'}
            </CustomButton>

            <CustomButton
              wrapperStyle={{marginLeft: 10}}
              onPress={() => this.acceptTerms()}>
              {'Accept and Continue'}
            </CustomButton>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 20,
  },
  buttonDiv: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
