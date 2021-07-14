import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import GlobalWrapper from '../Components/GlobalWrapper';

export default class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about:
        'Harsh Farms Mission is to supply the best tasting and finest Quality Fruits, Fresh Vegetables, Fresh Leafy Vegetables, Fresh Beans, Dry Items, Powder Items  directly from farm to our customers. Through our farming farmers, we aiming to have a maximum amount of organic produce as possible. Our farm provides online bookings and online payments only. Our farm provides delivery service to your residence or designated pick up points depending on your location.',
    };
  }
  render() {
    const {about} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
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
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10,
    padding: 20,
  },

  mainSubWrapper: {
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
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
});
