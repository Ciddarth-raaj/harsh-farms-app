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

export default class FooterMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showMore: false,
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
          title: 'Home',
          selected: false,
          action: () => props.navigation.navigate('Home'),
          icon: require('../Assets/icon-grey/home.png'),
        },
        cart: {
          title: 'My Cart',
          selected: false,
          action: () => props.navigation.navigate('Cart'),
          icon: require('../Assets/icon-grey/cart.png'),
        },
        wishlist: {
          title: 'Wishlist',
          selected: false,
          action: () => props.navigation.navigate('Wishlist'),
          icon: require('../Assets/icon-grey/wishlist.png'),
        },
        // signin: {
        //   title: 'Signin',
        //   selected: false,
        //   action: () => props.navigation.navigate('Eua'),
        //   pageName: 'Eua',
        //   icon: require('../Assets/icon-grey/home.png'),
        //   selectedIcon: require('../Assets/icon-selected/home.png'),
        // },
        // login: {
        //   title: 'Login',
        //   selected: false,
        //   action: () => props.navigation.navigate('About'),
        //   pageName: 'Login',
        //   icon: require('../Assets/icon-grey/home.png'),
        //   selectedIcon: require('../Assets/icon-selected/home.png'),
        // },
        // categories: {
        //   title: 'Category',
        //   selected: false,
        //   action: () => props.navigation.navigate('Categories'),
        //   icon: require('../Assets/icon-grey/category.png'),
        // },
        category: {
          title: 'Category',
          selected: false,
          action: () => this.openModal(),
          icon: require('../Assets/icon-grey/category.png'),
          selectedIcon: require('../Assets/icon-selected/category.png'),
        },
        more: {
          title: 'More',
          selected: false,
          action: () => this.openMoreModal(),
          // action: () => props.navigation.navigate('Wishlist'),
          icon: require('../Assets/icon-grey/more.png'),
        },
      },
    };
  }

  openModal() {
    this.setState({
      show: true,
    });
  }

  openMoreModal() {
    this.setState({
      showMore: true,
    });
  }

  componentDidMount() {
    const {tag} = this.props;
    const {menu} = this.state;

    if (menu[tag] != undefined) {
      menu[tag].selected = true;
      this.setState({menu: menu});
    }
  }

  render() {
    const {menu, categories} = this.state;
    return (
      <View style={styles.wrapper}>
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
              <View>
                <Image
                  source={menu[m].icon}
                  style={[
                    styles.menuIcon,
                    {tintColor: menu[m].selected ? Colors.primary : 'none'},
                  ]}
                />
              </View>

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
        <Modal
          visible={this.state.show}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.modalContainer}>
            {/* <Header /> */}
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      show: false,
                    });
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    // style={styles.closeImage}
                    source={require('../Assets/close-red.png')}
                  />
                </TouchableOpacity>
              </View>
              {/* <Text
                style={styles.backText}
                onPress={() => {
                  this.setState({
                    show: false,
                  });
                }}>
                Close
              </Text> */}
              <Text style={styles.heading}>Categories</Text>
              {categories.map(c => (
                <View style={styles.modalWrapper}>
                  <View style={styles.innerWrapper}>
                    <View>
                      <Image
                        source={{
                          uri: c.image,
                        }}
                        style={styles.image}
                      />
                    </View>

                    <View style={styles.contentWrapper}>
                      <View
                        onPress={() => {
                          this.setState({
                            show: false,
                          });
                        }}>
                        <Text
                          onPress={() =>
                            this.props.navigation.navigate('Listing')
                          }
                          style={styles.nameText}>
                          {c.category_name}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.line} />
                </View>
              ))}
            </ScrollView>
          </View>
        </Modal>

        <Modal
          visible={this.state.showMore}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.modalContainer}>
            {/* <Header /> */}
            <ScrollView>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 10,
                  paddingTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({
                      showMore: false,
                    });
                  }}>
                  <Image
                    style={{height: 30, width: 30}}
                    // style={styles.closeImage}
                    source={require('../Assets/close-red.png')}
                  />
                </TouchableOpacity>
              </View>
              {/* <Text
                style={styles.backText}
                onPress={() => {
                  this.setState({
                    show: false,
                  });
                }}>
                Close
              </Text> */}
              <Text style={styles.heading}>More</Text>
              <View style={styles.modalWrapper}>
                <View style={styles.innerWrapper}>
                  <Text
                    onPress={() => this.props.navigation.navigate('Version')}
                    style={styles.nameText}>
                    Version Details
                  </Text>
                </View>
                <View style={styles.line} />
              </View>

              {/* {categories.map(c => (
                <View style={styles.modalWrapper}>
                  <View style={styles.innerWrapper}>
                    <View>
                      <Image
                        source={{
                          uri: c.image,
                        }}
                        style={styles.image}
                      />
                    </View>

                    <View style={styles.contentWrapper}>
                      <View
                        onPress={() => {
                          this.setState({
                            show: false,
                          });
                        }}>
                        <Text
                          onPress={() =>
                            this.props.navigation.navigate('Listing')
                          }
                          style={styles.nameText}>
                          {c.category_name}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.line} />
                </View>
              ))} */}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
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
    height: 400,
    marginTop: '50%',
    marginLeft: 40,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
  },

  closeImage: {
    position: 'absolute',
    right: 80,
    height: 30,
    width: 30,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
    paddingTop: 20,
  },
});
