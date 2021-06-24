import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

export default class Eua extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false,
      Eua: 'Lorem ipsum dolor sit amet, sse cillum dolore eu, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, suconsectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis aute  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatsint occaecat cupidatat non proident, su',
    };
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
              onPress={() => this.props.navigation.navigate('Home')}>
              {'Do Not Accept'}
            </CustomButton>

            <CustomButton
              wrapperStyle={{marginLeft: 10}}
              onPress={() => this.props.navigation.navigate('Signin')}>
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
