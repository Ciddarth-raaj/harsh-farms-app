import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../Constants/colors';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://www.iconsdb.com/icons/preview/white/carrot-xxl.png',
            }}
            style={styles.image}
          />
          <Text style={styles.companyName}>{'Harsh Farms'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    // marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    width: '100%',
    padding: 10,
    paddingBottom: 12,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
