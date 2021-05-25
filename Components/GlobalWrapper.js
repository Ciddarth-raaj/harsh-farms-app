import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import NavigationDrawer from './NavigationDrawer';
import Header from './Header';

export default class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationVisibility: false,
      menu: {
        home: {
          title: 'Overview',
          selected: false,
          pageName: 'Home',
          icon: require('../Assets/icon-grey/home.png'),
          selectedIcon: require('../Assets/icon-selected/home.png'),
        },
        signin: {
          title: 'Signin',
          selected: false,
          pageName: 'Eua',
          icon: require('../Assets/icon-grey/home.png'),
          selectedIcon: require('../Assets/icon-selected/home.png'),
        },
        login: {
          title: 'Login',
          selected: false,
          pageName: 'Login',
          icon: require('../Assets/icon-grey/home.png'),
          selectedIcon: require('../Assets/icon-selected/home.png'),
        },
      },
    };
  }

  render() {
    const {menu, navigationVisibility} = this.state;
    const {children, tag, navigation} = this.props;
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView style={{height: '90%'}}>{children}</ScrollView>
        <View style={styles.footerMenu}>
          {Object.keys(menu).map(m => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => this.props.navigation.navigate(menu[m].pageName)}>
              <Image
                source={menu[m].selected ? menu[m].selectedIcon : menu[m].icon}
                style={styles.menuIcon}
              />
              <Text
                style={[
                  styles.menuText,
                  menu[m].selected && styles.menuTextSelected,
                ]}>
                {menu[m].title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  wrapper: {
    // height: '100%',
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
  footerMenu: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopColor: '#c9c9c9',
    borderTopWidth: 1,
    paddingTop: 10,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 25,
    height: 25,
    marginBottom: 5,
  },
  menuText: {
    fontSize: 13,
    color: 'gray',
  },
  menuTextSelected: {
    fontWeight: 'bold',
    color: Colors.primary,
  },
});
