import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import GlobalWrapper from './GlobalWrapper';
import Colors from '../Constants/colors';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  render() {
    const {categories} = this.state;
    return (
      <GlobalWrapper tag={'categories'} navigation={this.props.navigation}>
        <View style={styles.modalContainer}>
          <ScrollView>
            {/* <Text
                  style={styles.backText}
                  onPress={() => {
                    this.setState({
                      show: false,
                    });
                  }}>
                  Go Back
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
                    //   onPress={() => {
                    //     this.setState({
                    //       show: false,
                    //     });
                    //   }}
                    >
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
      </GlobalWrapper>
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
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.primary,
    marginBottom: 20,
  },
});
