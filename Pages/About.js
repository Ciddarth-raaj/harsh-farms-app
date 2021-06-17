import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Share,
  Button,
  Picker,
  TextInput,
  Switch,
  ScrollView,
  Image,
} from 'react-native';

import Header from '../Components/Header';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about:
        'There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...',
    };
  }
  render() {
    const {about} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <Header />
          <View style={styles.wrapper}>
            <Text style={styles.heading}>About us</Text>

            <View style={styles.mainSubWrapper}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1539799827118-e091578f7011?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
                }}
                style={styles.image}
              />

              <Text style={styles.subHeading}>{about}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    marginBottom: 40,
  },
  mainSubWrapper: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
  subHeading: {
    marginBottom: 30,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'grey',
  },
});
