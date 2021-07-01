import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

import Colors from '../Constants/colors';

export default class MoreModal extends React.Component {
  constructor(props) {
    super(props);
    const LOGGED_IN_MENU = [
      {
        title: 'My Profile',
        icon: require('../Assets/profile.png'),
        onClick: () => this.props.navigation.navigate('Myprofile'),
      },
      {
        title: 'Logout',
        icon: require('../Assets/logout.png'),
        onClick: () => this.props.navigation.navigate('Myprofile'),
      },
    ];

    const LOGGED_OUT_MENU = [
      {
        title: 'Signin',
        icon: require('../Assets/register.png'),
        onClick: () => this.props.navigation.navigate('Signin'),
      },
      {
        title: 'Login',
        icon: require('../Assets/login.png'),
        onClick: () => this.props.navigation.navigate('Login'),
      },
    ];

    this.state = {
      menuItem: [
        ...LOGGED_OUT_MENU,
        {
          title: 'Version Details',
          icon: require('../Assets/cart.png'),
          onClick: () => this.props.navigation.navigate('Version'),
        },
      ],
    };
  }

  render() {
    const {visiblilty, setVisibility} = this.props;
    const {menuItem} = this.state;
    return (
      <Modal
        visible={visiblilty}
        animationType={'slide'}
        transparent={true}
        onRequestClose={() => {
          setVisibility(false);
        }}>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.modalContainer}>
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  setVisibility(false);
                }}>
                <Image
                  style={styles.closeImage}
                  source={require('../Assets/close-red.png')}
                />
              </TouchableOpacity>
              <Text style={styles.heading}>More Menu</Text>
              {menuItem.map(v => (
                <TouchableOpacity
                  style={styles.listItem}
                  onPress={() => {
                    setVisibility(false);
                    v.onClick();
                  }}>
                  <Image source={v.icon} style={styles.imageStyle} />
                  <Text>{v.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 20,
    height: '50%',
    width: '90%',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
    marginTop: -10,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  imageStyle: {
    width: 25,
    height: 25,
    marginRight: 10,
    tintColor: '#c8c8c8',
  },
  closeImage: {
    height: 25,
    width: 25,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 20,
  },
});
