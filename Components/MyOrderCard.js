import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../Components/CustomButton';

import Colors from '../Constants/colors';

export default class MyOrderCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {order_number, date, status, amount} = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.topComponent}>
          <Text>
            <Text style={{fontWeight: 'bold'}}> Order Number :</Text>{' '}
            {order_number}
          </Text>
          <Text style={{fontWeight: 'bold'}}>{date}</Text>
        </View>
        <View style={styles.topComponent}>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Order Amount : </Text> {amount}
          </Text>
          <Text>
            <Text style={{fontWeight: 'bold'}}>Order Status :</Text> {status}
          </Text>
        </View>
        <View styles={styles.buttonWrapper}>
          <CustomButton
            onPress={() => this.props.navigation.navigate('OrderDetails')}
            wrapperStyle={{marginTop: 20}}>
            {'More'}
          </CustomButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    borderRadius: 6,
  },
  topComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
  },
});
