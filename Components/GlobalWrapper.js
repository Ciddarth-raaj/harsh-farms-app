import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

import Styles from '../Constants/styles';
import Colors from '../Constants/colors';

import NavigationDrawer from './NavigationDrawer';

export default class GlobalWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigationVisibility: false,
      menu: {
        home: {
          title: 'Overview',
          selected: false,
          pageName: 'Home',
        },
      },
    };
  }

  render() {
    const {menu, navigationVisibility} = this.state;
    const {children, tag, navigation} = this.props;
    return (
      <View style={styles.wrapper}>
        {navigationVisibility && (
          <NavigationDrawer
            menu={menu}
            setVisibility={v => this.setState({navigationVisibility: v})}
            navigation={navigation}
          />
        )}
        <TouchableOpacity
          onPress={() => this.setState({navigationVisibility: true})}
          style={styles.buttonWrapper}>
          <Image
            source={require('../Assets/menu.png')}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.title}>{menu[tag]?.title}</Text>
          <View style={Styles.line} />
        </View>
        <ScrollView style={{height: '100%'}}>{children}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 20,
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
});
