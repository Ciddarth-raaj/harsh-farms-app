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
  FlatList,
} from 'react-native';
import Colors from '../Constants/colors';
import Header from '../Components/Header';

export default class Myorders extends Component {
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
          order_number: 1,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_number: 2,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_number: 3,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_number: 4,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
        {
          order_number: 5,
          order_amount: 33,
          order_date: '30/1/2021',
          order_status: 'Deleivered',
          details: 'More',
        },
      ],
    };
  }

  render() {
    const {colums, orders} = this.state;
    return (
      <View>
        <Header />
        <View>
          <View style={styles.tableHeader}>
            {colums.map((c, index) => {
              {
                return (
                  <View style={styles.columnHeader}>
                    <Text style={styles.columnHeaderTxt}>{c}</Text>
                  </View>
                );
              }
            })}
          </View>

          <View style={styles.tableItems}>
            {orders.map((item, index) => {
              return (
                <View
                  style={{
                    ...styles.tableRow,
                    backgroundColor:
                      index % 2 == 1
                        ? '#F0FBFC'
                        : // '#7ea480'
                          'white',
                  }}>
                  <Text style={{...styles.columnRowTxt, fontWeight: 'bold'}}>
                    {item.order_number}
                  </Text>
                  <Text style={styles.columnRowTxt}>{item.order_amount}</Text>
                  <Text style={styles.columnRowTxt}>{item.order_date}</Text>
                  <Text style={styles.columnRowTxt}>{item.order_status}</Text>
                  <Text style={styles.columnRowTxt}>{item.details}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    // borderTopEndRadius: 10,
    // borderTopStartRadius: 10,
    height: 70,
    marginTop: 40,
  },
  tableRow: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
  columnHeader: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnHeaderTxt: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  columnRowTxt: {
    width: '20%',
    textAlign: 'center',
  },
  tableItems: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#37C2D0',
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
});
