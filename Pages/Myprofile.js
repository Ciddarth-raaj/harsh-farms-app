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

  onEditPress = () => {
    this.setState({TextInputDisableStatus: true});
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

      society,
    } = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>My Profile</Text>

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
            onChangeText={value => this.setState({name: value})}
          />

          <CustomInputText
            label={'Mobile Number'}
            value={phone}
            keyboardType="numeric"
            editable={false}
            onChangeText={value => thi.setState({phone: value})}
          />

          <Text style={styles.subText}>
            {'Mobile number will be used during order delivery and login'}
          </Text>

          <CustomInputText
            label={'Email'}
            value={email}
            editable={true}
            onChangeText={value => this.setState({email: value})}
          />

          <CustomInputText
            label={'Address'}
            value={address}
            numberOfLines={10}
            multiline={true}
            maxLength={400}
            underlineColorAndroid="transparent"
            onChangeText={value => this.setState({address: value})}
          />

          <Text style={[styles.label]}>{'Society'}</Text>
          <View style={[styles.input, {marginBottom: 15}]}>
            <RNPickerSelect
              value={selectedSociety}
              onValueChange={value => {
                this.setState({selectedSociety: value});
              }}
              items={society}
              placeholder={{label: 'Select a Society...', value: null}}
            />
          </View>

          <CustomButton
            onPress={this.onEditPress}
            wrapperStyle={{marginBottom: 30}}>
            {'Update Details'}
          </CustomButton>

          <Text style={styles.subHeading}>Change Password</Text>

          <CustomInputText
            label={'Current Password'}
            value={currentPass}
            maxLength={100}
            onChangeText={value => this.setState({currentPass: value})}
            secureTextEntry={showCurrentPassword}
            toggleSecure={v => this.setState({showCurrentPassword: v})}
          />
          <CustomInputText
            label={'New Password'}
            value={newPass}
            maxLength={100}
            onChangeText={value => this.setState({newPass: value})}
            secureTextEntry={showNewPassword}
            toggleSecure={v => this.setState({showNewPassword: v})}
          />

          <CustomInputText
            label={'Confirm Password'}
            value={confirmPass}
            maxLength={100}
            onChangeText={value => this.setState({confirmPass: value})}
            secureTextEntry={showConfirmPassword}
            toggleSecure={v => this.setState({showConfirmPassword: v})}
            customStyle={{marginBottom: 15}}
          />

          {/* <Text style={styles.subText}>
            {
              'Password must be atleast 8 characters long with 1 uppercase, 1 lower case and 1 numeric character'
            }
          </Text> */}

          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <CustomButton>{'Confirm'}</CustomButton>
            {/* <CustomButton wrapperStyle={{marginLeft: 10}}>
              {'Cancel'}
            </CustomButton> */}
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
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 30,
    color: Colors.secondary,
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
