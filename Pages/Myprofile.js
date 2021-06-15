import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  Picker,
  TextInput,
  Switch,
  ScrollView,
  Image,
} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import Header from '../Components/Header';
import GlobalWrapper from '../Components/GlobalWrapper';

export default class Myprofile extends Component {
  constructor(props) {
    super(props);
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.toggleSwitchConfirm = this.toggleSwitchConfirm.bind(this);
    this.toggleSwitchCurrent = this.toggleSwitchCurrent.bind(this);
    this.state = {
      showPassword: true,
      showConfirmPassword: true,
      showCurrentPassword: true,
      phone: '333333333',
      currentPass: '',
      newPass: '',
      confirmPass: '',
      name: 'Nithish',
      account_name: 'Nithish',
      email: 'nithss0404@gmail.com',
      address:
        'Block-c, 24, Bangur Avenue, Bangur Block-c, 24, Bangur Avenue, BangurBlock-c, 24, Bangur Avenue, Bangur',
      securityNumber: '',
      primaryNumber: '',
      selectedValue: 'Society',
      phone_prefix: '91',

      TextInputDisableStatus: false,
    };
  }

  toggleSwitch() {
    this.setState({showPassword: !this.state.showPassword});
  }

  toggleSwitchConfirm() {
    this.setState({showConfirmPassword: !this.state.showConfirmPassword});
  }

  toggleSwitchCurrent() {
    this.setState({showCurrentPassword: !this.state.showCurrentPassword});
  }

  onPressButton = () => {
    this.setState({TextInputDisableStatus: true});
  };
  render() {
    const {
      name,
      account_name,
      phone,
      email,
      address,
      selectedValue,
      password,
      confirmPass,
      currentPass,
      newPass,
    } = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <Header />
            <View style={styles.wrapper}>
              <Text style={styles.heading}>My Profile</Text>
              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Name"
                  value={account_name}
                  editable={this.state.TextInputDisableStatus}
                  onChangeText={value => this.setState({account_name: value})}
                />
              </View>

              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Name"
                  value={name}
                  editable={this.state.TextInputDisableStatus}
                  onChangeText={value => this.setState({name: value})}
                />
              </View>

              <View>
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput
                  style={styles.input}
                  // placeholder="Name"
                  value={phone}
                  keyboardType="numeric"
                  editable={this.state.TextInputDisableStatus}
                  onChangeText={value => this.setState({phone: value})}
                />
              </View>

              <Text style={styles.subHeading}>
                (Mobile number will be used during order deleivery only)
              </Text>

              <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  value={email}
                  editable={this.state.TextInputDisableStatus}
                  onChangeText={value => this.setState({email: value})}
                />
              </View>

              <View>
                <Text style={styles.label}>Address</Text>
                <View style={styles.textAreaContainer}>
                  <TextInput
                    style={styles.textArea}
                    value={email}
                    editable={this.state.TextInputDisableStatus}
                    value={address}
                    numberOfLines={10}
                    multiline={true}
                    onChangeText={value => this.setState({address: value})}
                  />
                </View>
              </View>

              <View style={styles.textAreaContainer}>
                <Picker
                  selectedValue={selectedValue}
                  editable={this.state.TextInputDisableStatus}
                  style={styles.input}
                  style={{borderWidth: 1, color: 'gray'}}
                  // onValueChange={(itemValue, itemIndex) =>
                  //   setSelectedValue(itemValue)
                  // }
                >
                  <Picker.Item label="Society" value="Society" />
                </Picker>
              </View>

              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={this.onPressButton}>
                <Text style={Styles.buttonText}>Edit</Text>
              </TouchableOpacity>

              <View style={{marginTop: 40}}>
                <Text style={styles.subHeading}>Change Password</Text>
                <View>
                  <Text style={styles.label}>Current Password</Text>
                  <View style={styles.container}>
                    <View style={styles.sectionStyle}>
                      <TextInput
                        style={{flex: 1}}
                        value={currentPass}
                        onChangeText={value =>
                          this.setState({currentPass: value})
                        }
                        secureTextEntry={this.state.showCurrentPassword}
                      />
                      <Switch
                        onValueChange={this.toggleSwitchCurrent}
                        value={!this.state.showCurrentPassword}
                        style={styles.imageStyle}
                      />
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>New Password</Text>
                  <View style={styles.container}>
                    <View style={styles.sectionStyle}>
                      <TextInput
                        // style={styles.inputPassfield}
                        value={newPass}
                        style={{flex: 1}}
                        secureTextEntry={this.state.showPassword}
                        onChangeText={value => this.setState({newPass: value})}
                      />
                      <Switch
                        onValueChange={this.toggleSwitch}
                        value={!this.state.showPassword}
                        style={styles.imageStyle}
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Confirm Password</Text>
                  <View style={styles.container}>
                    <View style={styles.sectionStyle}>
                      <TextInput
                        style={{flex: 1}}
                        value={confirmPass}
                        onChangeText={value =>
                          this.setState({confirmPass: value})
                        }
                        secureTextEntry={this.state.showConfirmPassword}
                      />
                      <Switch
                        onValueChange={this.toggleSwitchConfirm}
                        value={!this.state.showConfirmPassword}
                        style={styles.imageStyle}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <TouchableOpacity style={styles.buttonWrapper}>
                  <Text style={Styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                  <Text style={Styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.subHeading}>
                Note:Password must be atleast 8 characters long with 1
                uppercase, 1 lower case and 1 numeric character
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 40,
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
    paddingLeft: 20,
  },

  buttonWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.primary,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 21,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textArea: {
    height: 100,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
    width: '100%',
    paddingLeft: 16,
  },
  textAreaContainer: {
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionStyle: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 10,
    paddingLeft: 20,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imageStyle: {
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  subHeading: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
});
