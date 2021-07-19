import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
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
      show: false,
      categories: [
        {
          category_name: 'Branded Foods',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Beverages',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'HouseHolds',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Kitchen needs',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Seeds',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Baby Care',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Baby Care',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
        {
          category_name: 'Baby Care',
          image:
            'https://images.unsplash.com/photo-1622790210211-b5c39301578a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        },
      ],
      menu: {
        home: {
          title: 'Overview',
          selected: false,
          action: () => props.navigation.navigate('Home'),
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
        cart: {
          title: 'My Cart',
          selected: false,
          action: () => props.navigation.navigate('Cart'),
          icon: require('../Assets/icon-grey/cart.png'),
          selectedIcon: require('../Assets/icon-selected/home.png'),
        },
        wishlist: {
          title: 'Wishlist',
          selected: false,
          action: () => props.navigation.navigate('Wishlist'),
          icon: require('../Assets/icon-grey/cart.png'),
          selectedIcon: require('../Assets/icon-selected/home.png'),
        },
        // category: {
        //   title: 'Category',
        //   selected: false,
        //   action: () => this.openModal(),
        //   icon: require('../Assets/icon-grey/category.png'),
        //   selectedIcon: require('../Assets/icon-selected/category.png'),
        // },
      },
    };
  }

  openModal() {
    this.setState({
      show: true,
    });
  }

  render() {
    const {menu, navigationVisibility, categories, show} = this.state;
    const {children, tag, navigation} = this.props;
    return (
      <SafeAreaView style={styles.wrapper}>
        <ScrollView style={{height: '90%'}}>{children}</ScrollView>
        <View style={styles.footerMenu}>
          {Object.keys(menu).map(m => (
            <TouchableOpacity
              style={styles.menuItem}
              onPress={
                (() => {
                  // this.props.navigation.navigate(menu[m].pageName);
                },
                menu[m].action)
              }>
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

  modalWrapper: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // borderWidth: 1,
    // borderColor: 'grey',
    position: 'relative',
    borderRadius: 6,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 2,
    marginRight: 20,
  },
  innerWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    alignContent: 'center',
  },

  nameText: {
    fontSize: 18,
  },

  line: {
    marginBottom: 10,
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(226, 226, 226)',
  },
  closeIcon: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: 90,
    right: 5,
    backgroundColor: 'orange',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 6,
  },
  modalContainer: {
    position: 'relative',
  },
  backText: {
    textAlign: 'right',
    fontSize: 16,
    paddingRight: 20,
  },
});
