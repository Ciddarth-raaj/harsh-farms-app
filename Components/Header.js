import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../Constants/colors';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1621377674852-0b332949ef25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
            }}
            style={styles.image}
          />
          <Text style={styles.companyName}>HARSH FARMS</Text>
        </View>
        <Image
          source={require('../Assets/search.png')}
          style={styles.searchImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    width: '100%',
    padding: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
    color: 'white',
  },
  searchImage: {
    width: 20,
    height: 20,
  },
});
