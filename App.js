import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import Eua from './Pages/Eua';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Listing from './Pages/Listing';
import Payment from './Pages/Payment';
import Categories from './Components/Categories';
import Myprofile from './Pages/Myprofile';
import About from './Pages/About';
import Myorders from './Pages/Myorders';
import Version from './Pages/Version';

import global from './Constants/variables';

import {
  setCustomText,
  setCustomTextInput,
  setCustomView,
} from 'react-native-global-props';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    setCustomText({style: {fontFamily: 'Poppins-Regular'}});
    setCustomTextInput({style: {fontFamily: 'Poppins-Regular'}});
    setCustomView({style: {fontFamily: 'Poppins-Regular'}});
    this.setToken();
  }

  async setToken() {
    try {
      const accessToken = await AsyncStorage.getItem('token');
      if (accessToken != undefined && accessToken != null) {
        global.accessToken = accessToken;
        global.clt_type = await AsyncStorage.getItem('clt-type-id');
      }
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const Stack = createStackNavigator();

    const MyTheme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#FFFFFF',
      },
    };

    return (
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Eua" component={Eua} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Wishlist" component={Wishlist} />
          <Stack.Screen name="Listing" component={Listing} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Myprofile" component={Myprofile} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Myorders" component={Myorders} />
          <Stack.Screen name="Version" component={Version} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
