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
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import Header from '../Components/Header';
import colors from '../Constants/colors';
import Styles from '../Constants/styles';
import Colors from '../Constants/colors';
import {color} from 'react-native-reanimated';

export default class Eua extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      Eua: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, su',
    };
  }

  changeColor() {
    if (!this.state.pressed) {
      this.setState({
        pressed: true,
        backgroundColor: colors.primary,
      });
    } else {
      this.setState({pressed: false, backgroundColor: 'red'});
    }
  }
  render() {
    const {Eua} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={{marginBottom: 20}}>
              <Header />
            </View>

            <Text style={styles.heading}>End User Agreement</Text>
            <View style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                  {/* {Eua} */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in culpa qui officia deserunt mollit anim id est laborum. oris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, su
                </Text>
              </ScrollView>
            </View>
            {/* 
            <View style={{padding: 30}}>
              <View style={styles.textAreaContainer}>
                <TextInput
                  style={styles.textArea}
                  underlineColorAndroid="transparent"
                  placeholder="Address"
                  value={Eua}
                  multiline={true}
                  // onChangeText={value => this.setState({address: value})}
                />
              </View>
              <View style={styles.fieldHolder}>
                <Text style={{marginRight: 6}} style={styles.textStyle}>
                  1.
                </Text>
                <Text style={styles.textStyle}>
                  All promotions offers are valid untill the stock lasts
                </Text>
              </View>
              <View style={styles.fieldHolder}>
                <Text style={{marginRight: 6}} style={styles.textStyle}>
                  2.
                </Text>
                <Text style={styles.textStyle}>
                  You can add product into your wishlist and get alerted when
                  the next stock is available.Wishlist will be cleared every 23
                  hours.
                </Text>
              </View>
              <View style={styles.fieldHolder}>
                <Text style={{marginRight: 6}} style={styles.textStyle}>
                  3.
                </Text>
                <Text style={styles.textStyle}>
                  A product can be kept in cart for 60 minutes.After cut-off
                  time the system will automatically remove the item from the
                  cart and add it to available stock list.
                </Text>
              </View>
              <View style={styles.fieldHolder}>
                <Text style={{marginRight: 6}} style={styles.textStyle}>
                  4.
                </Text>
                <Text style={styles.textStyle}>
                  Check the items while collecting deleivery and if incase of
                  any concerns return instantly
                </Text>
              </View>

              <TouchableOpacity
                style={styles.buttonWrapper}
                onPress={() => this.props.navigation.navigate('Signin')}>
                <Text style={Styles.buttonText}>Accept and Continue</Text>
              </TouchableOpacity>
            </View> */}

            <TouchableHighlight
              activeOpacity={0.2}
              // backgroundColor: '#73AB00',
              underlayColor="#477d4a"
              // underlayColor="#606060"
              style={styles.buttonWrapper}
              onPress={() => this.props.navigation.navigate('Signin')}>
              <Text style={Styles.buttonText}>Accept and Continue</Text>
            </TouchableHighlight>
            <TouchableHighlight
              activeOpacity={0.2}
              // backgroundColor: '#73AB00',
              underlayColor="#477d4a"
              // underlayColor="#606060"
              style={styles.buttonWrapperBottom}
              onPress={() => this.props.navigation.navigate('Home')}>
              <Text style={Styles.buttonText}>Do not accept</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#73AB00',
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 21,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonWrapperBottom: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#73AB00',
    paddingLeft: 30,
    paddingRight: 30,
    width: 200,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  fieldHolder: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textArea: {
    width: '100%',
    paddingLeft: 16,
    height: 400,
  },
  textAreaContainer: {
    textAlignVertical: 'top',
    height: 700,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginBottom: 21,
  },
  container: {
    // flex: 1,
    height: 300,
    marginBottom: 20,
  },
  scrollView: {
    borderWidth: 2,
    borderColor: Colors.primary,
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    padding: 15,
  },
});
