import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import GlobalWrapper from '../Components/GlobalWrapper';
import CustomButton from '../Components/CustomButton';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import UserHelper from '../helper/user';

export default class Eua extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Eua:
        'A privacy policy is a legal statement that discloses how a party gathers, stores, and uses the personal information it collects. Personal information refers to anything that can be used to identify an individual, including Client names, phone numbers, email addresses, Society Names. These policies are used by companies and mobile app developers to stay compliant with federal laws. They fulfil the legal requirement to safeguard user privacy while also protecting the company itself from legal challenges. The contents of these policies can vary greatly depending on the industry, user demographics, governing laws and jurisdictions, and application platform. Employing the use of third party services may also affect the need for one, as well as its contents-even if the app itself does not collect user information\n' +
        '\n' +
        '\n' +
        'ORDERS and DELIVERIES \n' +
        '\n' +
        'We have two delivery timings in a day.\n' +
        'For those who order from 3am to 5pm, we will deliver between 6.30pm to 8.30pm.\n' +
        'For those who order from 5pm to 3am, we will deliver between 6am to 8am.\n' +
        'We offer 24/7 order booking facility.\n' +
        'We do not offer a cash on delivery option.(When we provide the "COD" facility, We will let you know for sure).\n' +
        '\n' +
        '\n' +
        'RETURN POLICY\n' +
        '\n' +
        'After delivery, the product will be delivered to return and replacement within 1 hour.\n' +
        '\n' +
        '\n' +
        'ORDER CANCEL and REFUND\n' +
        '\n' +
        'Any order can be cancel with-in the next 1hour.\n' +
        'After the order is cancelled then it will be automatically generated to refund.\n' +
        'Refund will be done only for the fund excluding the processing fee.\n' +
        '\n' +
        '\n' +
        'OFFERS\n' +
        '\n' +
        'Occasionally we make offers. like 20% or 150grams.\n' +
        '\n' +
        '\n' +
        'Changes to This Terms and Conditions :\n' +
        '\n' +
        'We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.\n' +
        '\n' +
        '(The Company reserves the right to change these terms and conditions in any manner from time to time without being liable to assign any reason for the same or to inform the Customer or any third party about such changes).\n' +
        '\n' +
        'These terms and conditions are effective as of 11-06-2021.\n' +
        '\n' +
        '\n' +
        'Contact Us :\n' +
        '\n' +
        'If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at chandrasekharkhajana345@gmail.com.',
    };
  }

  componentDidMount() {
    const params = this.props.route.params.data;
    const keys = [
      'name',
      'mobile_nr',
      'email_id',
      'address',
      'society_id',
      'password',
    ];
    for (let key of keys) {
      if (params[key] == undefined) {
        alert('Invalid Data!');
        this.props.navigation.navigate('Signin');
        break;
      }
    }
  }

  acceptTerms() {
    const data = this.props.route.params.data;

    UserHelper.register(data)
      .then(async data => {
        if (data.code == 200) {
          await AsyncStorage.setItem('token', data.token);
          await AsyncStorage.setItem(
            'clt-type-id',
            data.clt_type_id.toString(),
          );
          global.accessToken = data.token;
          global.clt_type = data.clt_type_id.toString();
          alert('Account successfully created!');
          this.props.navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        } else if (data.code == 101) {
          alert('Phone number already exists!');
          this.props.navigation.goBack();
        } else {
          throw 'error';
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error creating account!');
      });
  }

  render() {
    const {Eua} = this.state;
    return (
      <GlobalWrapper>
        <View style={{padding: 20}}>
          <Text style={styles.heading}>End User Agreement</Text>

          <Text style={styles.textStyle}>{Eua}</Text>

          <View style={styles.buttonDiv}>
            <CustomButton
              wrapperStyle={{marginRight: 10}}
              onPress={() => this.props.navigation.navigate('Signin')}>
              {'Do Not Accept'}
            </CustomButton>

            <CustomButton
              wrapperStyle={{marginLeft: 10}}
              onPress={() => this.acceptTerms()}>
              {'Accept and Continue'}
            </CustomButton>
          </View>
        </View>
      </GlobalWrapper>
    );
  }
}

const styles = StyleSheet.create({
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.secondary,
    marginBottom: 20,
  },
  buttonDiv: {
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 16,
    marginBottom: 20,
  },
});
