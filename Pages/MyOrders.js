import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../Constants/colors';

import GlobalWrapper from '../Components/GlobalWrapper';
import MyOrderCard from '../Components/MyOrderCard';

export default class MyOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colums: [
        'Order Number',
        'Order Amount',
        'Order    Date',
        'Order Status',
        'Details',
      ],

      orders: [
        {
          order_id: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_id: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_id: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_id: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_id: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
      ],
    };
  }

  render() {
    const {orders} = this.state;
    return (
      <GlobalWrapper navigation={this.props.navigation}>
        <View style={styles.Mainwrapper}>
          {orders.map(o => (
            <MyOrderCard
              order_id={o.order_id}
              amount={o.order_amount}
              date={o.order_date}
              status={o.order_status}
              navigation={this.props.navigation}
            />
          ))}
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  Mainwrapper: {
    padding: 20,
  },
});
