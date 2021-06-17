import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

export default class NavigationDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {menu, setVisibility} = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          style={[styles.closeButton, styles.buttonWrapper]}
          onPress={() => setVisibility(false)}>
          <Image
            source={require('../Assets/close.png')}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        {Object.keys(menu).map(m => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate(menu[m].pageName)}>
            <Text style={styles.menuText}>{menu[m].title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: '100%',
    width: 200,
    backgroundColor: Colors.primary,
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    paddingTop: 30,
  },
  menuText: {
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    left: 220,
    top: 20,
  },
  buttonWrapper: {
    padding: 10,
    backgroundColor: Colors.primary,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
});
