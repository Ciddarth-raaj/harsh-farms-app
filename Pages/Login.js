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
} from 'react-native';

import Colors from '../Constants/colors';
import Styles from '../Constants/styles';
import GlobalWrapper from '../Components/GlobalWrapper';
import Header from '../Components/Header';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    const {username, password} = this.state;
    return (
      <SafeAreaView>
        <GlobalWrapper tag={'login'} navigation={this.props.navigation}>
          <ScrollView>
            <View style={styles.wrapper}>
              <Text style={styles.heading}>Login</Text>
              <View style={styles.fieldHolder}>
                <View>
                  <Text style={styles.label}>Username</Text>
                  <TextInput
                    style={styles.input}
                    // placeholder="Username"
                    value={username}
                    onChangeText={value => this.setState({username: value})}
                  />
                </View>
                <View>
                  <Text style={styles.label}>Password</Text>
                  <TextInput
                    style={styles.input}
                    // placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={value => this.setState({password: value})}
                  />
                </View>

                <TouchableOpacity style={styles.buttonWrapper}>
                  <Text style={Styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Forgot')}>
                  <Text style={styles.bottomText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </GlobalWrapper>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  fieldHolder: {
    width: '100%',
  },
  wrapper: {
    padding: 20,
    marginTop: 100,
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
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 14,
    color: '#0088ff',
    marginTop: 10,
    textAlign: 'center',
  },
  label: {
    color: 'grey',
    fontWeight: '500',
    marginBottom: 5,
  },
});
