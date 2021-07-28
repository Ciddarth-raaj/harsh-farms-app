import React, {Component} from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import CustomInputText from '../Components/CustomTextInput';
import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import UserHelper from '../helper/user';
import SocietyHelper from '../helper/society';

export default class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showNewPassword: true,
      showConfirmPassword: true,
      showCurrentPassword: true,
      phone: '',
      currentPass: '',
      newPass: '',
      confirmPass: '',
      name: '',
      // account_name: '',
      email: '',
      address: '',
      selectedSociety: '',
      society: [],
      error: {
        name: false,
        phone: false,
        email: false,
        address: false,
        selectedSociety: false,
        newPass: false,
        confirmPass: false,
        currentPass: false,
      },
    };
  }

  componentDidMount() {
    this.getSociety();
    this.getDetails();
  }

  getSociety() {
    SocietyHelper.get()
      .then(data => {
        if (data.length > 0) {
          const formatted = [];
          for (let d of data) {
            formatted.push({
              label: d.society_name,
              value: d.society_id,
            });
          }
          this.setState({society: formatted});
        }
      })
      .catch(err => console.log(err));
  }

  getDetails() {
    UserHelper.getDetails()
      .then(data => {
        this.setState({
          // account_name: data.account_name,
          phone: data.mobile_nr,
          name: data.name,
          email: data.email_id,
          selectedSociety: data.society_id,
          address: data.address,
        });
      })
      .catch(err => console.log(err));
  }

  onEditPress() {
    const {name, email, address, selectedSociety, error} = this.state;
    let count = 0;

    if (name == '') {
      count++;
      error['name'] = true;
    }

    if (email == '') {
      count++;
      error['email'] = true;
    }

    if (address == '') {
      count++;
      error['address'] = true;
    }

    if (selectedSociety == 0 || selectedSociety == undefined) {
      count++;
      error['selectedSociety'] = true;
    }

    if (count > 0) {
      this.setState({error: error});
      alert('Please check all the values!');
      return;
    }

    const data = {
      name: name,
      email_id: email,
      society_id: selectedSociety,
      address: address,
    };

    UserHelper.update(data)
      .then(data => {
        if (data.code == 200) {
          alert('Updated Details!');
        } else {
          throw 'err';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error updating details!');
      });
  }

  onUpdatePassword() {
    const {newPass, confirmPass, currentPass, error} = this.state;
    let count = 0;

    if (newPass == '') {
      count++;
      error['newPass'] = true;
    }

    if (confirmPass == '') {
      count++;
      error['confirmPass'] = true;
    }

    if (currentPass == '') {
      count++;
      error['currentPass'] = true;
    }

    if (count > 0) {
      this.setState({error: error});
      alert('Please check all the values!');
      return;
    }

    if (newPass != confirmPass) {
      alert('Passwords do not match');
      return;
    }

    if (newPass == currentPass) {
      alert('Current Password and New Password cannot be the same');
      return;
    }

    UserHelper.updatePassword(currentPass, newPass)
      .then(data => {
        if (data.code == 200) {
          alert('Password Updated!');
          this.setState({newPass: '', confirmPass: '', currentPass: ''});
        } else if (data.code == 404) {
          alert('Invalid Password!');
        } else {
          throw 'error';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error updating password!');
      });
  }

  setError = (val, key) => {
    const {error} = this.state;
    error[key] = val;
  };

  render() {
    const {
      name,
      account_name,
      phone,
      email,
      address,
      selectedSociety,
      confirmPass,
      currentPass,
      newPass,
      showConfirmPassword,
      showNewPassword,
      showCurrentPassword,
      error,
      society,
    } = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={Styles.heading}>My Profile</Text>

          <Text style={styles.subHeading}>Profile Details</Text>
          {/* <CustomInputText
            label={'Account Name'}
            value={account_name}
            editable={false}
            onChangeText={value => this.setState({account_name: value})}
          /> */}

          <CustomInputText
            label={'Name'}
            value={name}
            editable={true}
            error={error['name']}
            onChangeText={value => {
              this.setState({name: value});
              this.setError(false, 'name');
            }}
          />

          <CustomInputText
            label={'Mobile Number'}
            value={phone}
            keyboardType="numeric"
            editable={false}
            error={error['phone']}
            onChangeText={value => {
              this.setState({phone: value});
              this.setError(false, 'phone');
            }}
          />

          <Text style={styles.subText}>
            {'Mobile number will be used during order delivery and login'}
          </Text>

          <CustomInputText
            label={'Email'}
            value={email}
            editable={true}
            error={error['email']}
            onChangeText={value => {
              this.setState({email: value});
              this.setError(false, 'email');
            }}
          />

          <CustomInputText
            label={'Address'}
            value={address}
            numberOfLines={10}
            multiline={true}
            maxLength={400}
            error={error['address']}
            underlineColorAndroid="transparent"
            onChangeText={value => {
              this.setState({address: value});
              this.setError(false, 'address');
            }}
          />

          <Text
            style={[styles.label, error['selectedSociety'] && {color: 'red'}]}>
            {'Society'}
          </Text>
          <View
            style={[
              styles.input,
              {marginBottom: 15},
              error['selectedSociety'] ? {borderColor: 'red'} : {},
            ]}>
            <RNPickerSelect
              value={selectedSociety}
              onValueChange={value => {
                this.setState({selectedSociety: value});
                this.setError(false, 'selectedSociety');
              }}
              items={society}
              placeholder={{label: 'Select a Society...', value: null}}
            />
          </View>

          <CustomButton
            onPress={() => this.onEditPress()}
            wrapperStyle={{marginBottom: 30}}>
            {'Update Details'}
          </CustomButton>

          <Text style={styles.subHeading}>Change Password</Text>

          <CustomInputText
            label={'Current Password'}
            value={currentPass}
            maxLength={100}
            onChangeText={value => {
              this.setState({currentPass: value});
              this.setError(false, 'currentPass');
            }}
            secureTextEntry={showCurrentPassword}
            error={error['currentPass']}
            toggleSecure={v => this.setState({showCurrentPassword: v})}
          />
          <CustomInputText
            label={'New Password'}
            value={newPass}
            maxLength={100}
            onChangeText={value => {
              this.setState({newPass: value});
              this.setError(false, 'newPass');
            }}
            secureTextEntry={showNewPassword}
            error={error['newPass']}
            toggleSecure={v => this.setState({showNewPassword: v})}
          />

          <CustomInputText
            label={'Confirm Password'}
            value={confirmPass}
            maxLength={100}
            onChangeText={value => {
              this.setState({confirmPass: value});
              this.setError(false, 'confirmPass');
            }}
            secureTextEntry={showConfirmPassword}
            error={error['confirmPass']}
            toggleSecure={v => this.setState({showConfirmPassword: v})}
            customStyle={{marginBottom: 15}}
          />

          {/* <Text style={styles.subText}>
            {
              'Password must be atleast 8 characters long with 1 uppercase, 1 lower case and 1 numeric character'
            }
          </Text> */}

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CustomButton onPress={() => this.onUpdatePassword()}>
              {'Confirm'}
            </CustomButton>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
    justifyContent: 'center',
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
    fontSize: 12,
  },
  subHeading: {
    marginBottom: 20,
    // marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.secondary,
    textAlign: 'center',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.primary,
    marginBottom: 10,
  },
});
